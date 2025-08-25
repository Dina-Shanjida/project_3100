import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverReply, setServerReply] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setServerReply(data.reply || 'Thanks! We will get back to you.');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else setSubmitStatus('error');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-900 dark:from-blue-900 dark:to-purple-950 text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto dark:text-blue-200"
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 transition-colors duration-300">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" />
                    <InputField label="Email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" type="email" />
                  </div>
                  <InputField label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" />
                  <TextAreaField label="Message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more..." rows={6} />

                  {submitStatus === 'success' && serverReply && <Alert type="success" message={serverReply} />}
                  {submitStatus === 'error' && <Alert type="error" message="Something went wrong. Please try again." />}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <InfoHeader />
                <ContactCard icon={Mail} title="Email Us" content="contact@technova.com" note="We'll respond within 24 hours" bgColor="blue" />
                <ContactCard icon={Phone} title="Call Us" content="+1 (555) 123-4567" note="Monday - Friday, 9AM - 6PM PST" bgColor="green" />
                <ContactCard icon={MapPin} title="Visit Us" content="123 Tech Street, San Francisco, CA 94105" note="By appointment only" bgColor="purple" />
                <FAQSection />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

/* --- Helper Components --- */
const InputField = ({ label, name, value, onChange, placeholder, type = 'text' }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder, rows }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={rows}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none transition-colors"
    />
  </div>
);

const Alert = ({ type, message }: { type: 'success' | 'error'; message: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`rounded-lg p-4 ${
      type === 'success'
        ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
        : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
    } transition-colors`}
  >
    <p>{message}</p>
  </motion.div>
);

const InfoHeader = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get in touch</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Have a question about our coverage? Want to suggest a story? Need help with something? We're here to help.
    </p>
  </div>
);

const ContactCard = ({ icon: Icon, title, content, note, bgColor }: any) => (
  <div className="flex items-start">
    <div className={`p-3 rounded-lg mr-4 ${bgColor === 'blue' ? 'bg-blue-100 dark:bg-blue-900' : bgColor === 'green' ? 'bg-green-100 dark:bg-green-900' : 'bg-purple-100 dark:bg-purple-900'}`}>
      <Icon className={`h-6 w-6 ${bgColor === 'blue' ? 'text-blue-600 dark:text-blue-200' : bgColor === 'green' ? 'text-green-600 dark:text-green-200' : 'text-purple-600 dark:text-purple-200'}`} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
      {note && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{note}</p>}
    </div>
  </div>
);

const FAQSection = () => (
  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 transition-colors">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Frequently Asked Questions</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      <div>
        <h4 className="font-medium text-gray-900 dark:text-gray-100">How can I submit a story tip?</h4>
        <p className="text-sm mt-1">Send us an email with your story idea and we'll review it promptly.</p>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-gray-100">Do you accept guest articles?</h4>
        <p className="text-sm mt-1">Yes! Send us your pitch and writing samples for consideration.</p>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-gray-100">How can I advertise with TechNova?</h4>
        <p className="text-sm mt-1">Contact our advertising team at ads@technova.com for opportunities.</p>
      </div>
    </div>
  </div>
);
