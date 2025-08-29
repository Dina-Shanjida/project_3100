import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'bot';
  message: string;
}

const QNA: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg: ChatMessage = { role: 'user', message: userInput };
    setChatHistory(prev => [...prev, userMsg]);
    setUserInput('');
    setIsSending(true);

    try {
      const testResponse = await fetch('http://localhost:5000/');
      if (!testResponse.ok) throw new Error('Server connection test failed');
      await testResponse.json();
    } catch (error) {
      console.error('Server connection test failed:', error);
      setChatHistory(prev => [...prev, { role: 'bot', message: 'Cannot connect to server. Please check if the server is running on http://localhost:5000' }]);
      setIsSending(false);
      return;
    }

    try {
      console.log('Sending chat request...');

      const messages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        ...chatHistory.map(msg => ({
          role: msg.role === 'bot' ? 'assistant' : 'user',
          content: msg.message
        })),
        { role: 'user', content: userInput }
      ];

      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({ messages })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', { status: response.status, statusText: response.statusText, error: errorText });
        throw new Error(`Server error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        role: 'bot',
        message: data.reply || 'Oops! Something went wrong.'
      };
      setChatHistory(prev => [...prev, botMsg]);

    } catch (error) {
      console.error('Chat error details:', error);
      let errorMessage = 'An error occurred. Please try again.';

      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage = 'Cannot connect to server. Please make sure the server is running.';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setChatHistory(prev => [...prev, { role: 'bot', message: errorMessage }]);
    } finally {
      setIsSending(false);

      if (chatContainerRef.current) {
        const container = chatContainerRef.current;
        const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
        if (distanceFromBottom < 50) {
          container.scrollTop = container.scrollHeight;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-16">
      <section className="bg-gradient-to-r from-blue-700 to-purple-900 dark:from-blue-900 dark:to-purple-950 text-white py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-4">
          QNA - Ask TechNova
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl max-w-3xl mx-auto">
          Ask questions about technology, AI, or anything on your mind and get instant answers powered by AI.
        </motion.p>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl transition-colors duration-300 flex flex-col min-h-[500px]">
            <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-4">
              {chatHistory.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400 text-center mt-10">Start the conversation by typing your question below...</p>
              )}
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg p-3 max-w-[70%] break-words ${msg.role === 'user' ? 'bg-blue-600 text-white dark:bg-blue-700' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200'}`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="flex gap-3 p-4 border-t border-gray-200 dark:border-gray-700">
              <input type="text" value={userInput} onChange={handleInputChange} placeholder="Type your question..." className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors" />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isSending} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-5 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                {isSending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QNA;
