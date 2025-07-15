export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  publishedDate: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
  isEditorsPick?: boolean;
  isTrending?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence: What 2025 Holds",
    summary: "Exploring the cutting-edge developments in AI technology and their potential impact on society.",
    content: `Artificial Intelligence continues to evolve at an unprecedented pace, with 2025 promising to be a watershed year for the technology. From advanced language models to breakthrough applications in healthcare and autonomous systems, AI is reshaping every aspect of our digital landscape.

The integration of AI into everyday applications has moved beyond simple automation. We're seeing sophisticated reasoning capabilities, creative problem-solving, and even emotional intelligence being developed. Major tech companies are investing billions in AI research, with particular focus on making these systems more reliable, ethical, and accessible.

One of the most significant developments is the emergence of multimodal AI systems that can process and understand text, images, audio, and video simultaneously. This breakthrough is enabling new applications in content creation, medical diagnosis, and educational tools.

Healthcare applications are particularly promising, with AI systems now capable of detecting diseases earlier and more accurately than ever before. Drug discovery, personalized treatment plans, and robotic surgery are just the beginning of AI's transformation of medicine.

However, with these advances come important considerations about privacy, job displacement, and the need for responsible AI development. The tech industry is working closely with regulators and ethicists to ensure AI development remains beneficial to society.

The future of AI in 2025 looks incredibly bright, with potential applications that could solve some of humanity's most pressing challenges while creating new opportunities for innovation and growth.`,
    category: "AI",
    author: "Dr. Sarah Chen",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    publishedDate: "2024-12-18",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["AI", "Machine Learning", "Future Tech"],
    views: 15420,
    isEditorsPick: true,
    isTrending: true
  },
  {
    id: "2",
    title: "Revolutionary Gadgets That Will Change Your Life in 2025",
    summary: "Discover the most innovative gadgets and devices set to transform how we live, work, and play.",
    content: `The world of consumer technology is about to experience a revolutionary transformation. From smart home devices that anticipate your needs to wearable technology that monitors your health in real-time, 2025 is shaping up to be an incredible year for gadget enthusiasts.

Smart glasses are finally becoming mainstream, with major manufacturers releasing lightweight, stylish models that seamlessly integrate digital information into our field of vision. These devices are no longer bulky prototypes but sleek accessories that enhance productivity and entertainment.

Wearable health monitors have evolved beyond simple step counters. The latest devices can track blood glucose levels, detect early signs of illness, and even monitor mental health indicators. This technology is particularly valuable for preventive healthcare and chronic disease management.

Home automation has reached new levels of sophistication. Smart homes now feature AI-powered systems that learn your preferences and adjust lighting, temperature, and security automatically. Voice assistants have become more conversational and helpful, capable of handling complex tasks and providing personalized recommendations.

Electric vehicles are incorporating cutting-edge technology, with features like augmented reality windshields, autonomous driving capabilities, and seamless integration with smart home systems. The charging infrastructure is also expanding rapidly, making electric vehicles more practical for everyday use.

Gaming technology is experiencing a renaissance with ultra-realistic VR headsets, haptic feedback suits, and brain-computer interfaces that create unprecedented levels of immersion. These advances are not just for entertainment but have applications in education, therapy, and professional training.

The convergence of these technologies is creating an ecosystem where devices work together seamlessly, providing a more integrated and intuitive user experience than ever before.`,
    category: "Gadgets",
    author: "Mike Rodriguez",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    publishedDate: "2024-12-17",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Gadgets", "Innovation", "Consumer Tech"],
    views: 12890,
    isTrending: true
  },
  {
    id: "3",
    title: "Modern Web Development: React 19 and Beyond",
    summary: "An in-depth look at the latest features in React 19 and what they mean for developers.",
    content: `React 19 has arrived with groundbreaking features that promise to revolutionize how we build web applications. The latest version introduces concurrent rendering improvements, enhanced server-side rendering capabilities, and a more intuitive developer experience.

One of the most significant additions is the new use() hook, which simplifies data fetching and state management. This hook works seamlessly with Suspense boundaries, providing a more elegant solution for handling asynchronous operations and loading states.

The compiler improvements in React 19 automatically optimize component re-renders, reducing the need for manual optimization techniques like useMemo and useCallback. This means developers can focus more on building features rather than performance tuning.

Server Components have been refined to work more efficiently with client-side hydration, resulting in faster initial page loads and improved SEO performance. The integration between server and client components is now more seamless, making it easier to build full-stack applications.

The development experience has also been enhanced with improved error boundaries, better debugging tools, and more descriptive error messages. Hot module replacement is faster and more reliable, speeding up the development cycle.

TypeScript integration has been deepened, with better type inference and more precise type checking. This makes React applications more robust and maintainable, especially in large codebases.

React 19 also introduces new accessibility features, making it easier to build inclusive applications that work well with screen readers and other assistive technologies.

Looking beyond React 19, the roadmap includes exciting developments in areas like partial hydration, improved streaming capabilities, and better integration with modern web standards. The future of React development looks incredibly promising, with continued focus on performance, developer experience, and accessibility.`,
    category: "Programming",
    author: "Emma Thompson",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    publishedDate: "2024-12-16",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "JavaScript", "Web Development"],
    views: 9850,
    isEditorsPick: true
  },
  {
    id: "4",
    title: "Cybersecurity Threats in 2025: What You Need to Know",
    summary: "Understanding the evolving landscape of cybersecurity threats and how to protect yourself.",
    content: `As we move deeper into 2025, cybersecurity threats are becoming more sophisticated and widespread. From AI-powered attacks to quantum computing vulnerabilities, the security landscape is evolving rapidly, requiring new approaches to protection.

Artificial Intelligence is being weaponized by cybercriminals to create more convincing phishing attacks, generate malicious code, and automate large-scale attacks. These AI-driven threats can adapt and evolve in real-time, making traditional security measures less effective.

Ransomware attacks have evolved beyond simple file encryption. Modern ransomware groups now focus on data exfiltration, threatening to release sensitive information unless ransom demands are met. This double-extortion tactic affects organizations regardless of their backup strategies.

The rise of deepfake technology poses new challenges for identity verification and social engineering attacks. Cybercriminals can now create convincing audio and video content to impersonate executives, leading to sophisticated business email compromise schemes.

Cloud security has become paramount as more organizations migrate to cloud-based infrastructure. Misconfigurations, inadequate access controls, and shared responsibility model confusion continue to create vulnerabilities that attackers exploit.

Internet of Things (IoT) devices remain a significant security concern, with many devices lacking proper security updates and authentication mechanisms. As smart devices proliferate in homes and offices, they create new attack vectors for cybercriminals.

Zero-trust security models are becoming the new standard, requiring verification for every user and device regardless of their location. This approach provides better protection against insider threats and lateral movement within networks.

To protect against these evolving threats, organizations must implement comprehensive security strategies that include regular security training, multi-factor authentication, encryption, and continuous monitoring. The key is to stay informed about emerging threats and adapt security measures accordingly.`,
    category: "Cybersecurity",
    author: "James Liu",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    publishedDate: "2024-12-15",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Cybersecurity", "Privacy", "Data Protection"],
    views: 11230,
    isEditorsPick: true
  },
  {
    id: "5",
    title: "The Rise of Quantum Computing: Breaking Down the Barriers",
    summary: "Exploring how quantum computing is moving from theory to practical applications.",
    content: `Quantum computing is transitioning from an experimental technology to practical applications that could revolutionize industries. Recent breakthroughs in quantum error correction and hardware stability are bringing us closer to quantum advantage in real-world scenarios.

Major tech companies have made significant investments in quantum research, with IBM, Google, and Microsoft leading the charge in developing quantum processors with increasing numbers of qubits. These systems are becoming more stable and reliable, making them suitable for specific computational problems.

The pharmaceutical industry is among the first to benefit from quantum computing's potential. Drug discovery processes that traditionally take years can potentially be accelerated through quantum simulations of molecular interactions. This could lead to faster development of new medications and treatments.

Financial services are exploring quantum computing for risk analysis, portfolio optimization, and fraud detection. The ability to process vast amounts of data and identify complex patterns makes quantum systems particularly valuable for financial modeling.

Cryptography faces both opportunities and challenges from quantum computing. While quantum computers could potentially break current encryption methods, they also enable quantum cryptography techniques that provide unprecedented security through quantum key distribution.

Machine learning and AI are expected to benefit significantly from quantum computing. Quantum algorithms could speed up training processes for neural networks and enable new types of pattern recognition that are impossible with classical computers.

The logistics industry is exploring quantum computing for supply chain optimization, route planning, and inventory management. The ability to solve complex optimization problems could lead to more efficient transportation and reduced costs.

Despite these advances, quantum computing still faces significant challenges, including the need for extremely low temperatures, susceptibility to environmental interference, and the complexity of quantum programming. However, progress in these areas continues to accelerate, suggesting that practical quantum computing applications will become more common in the coming years.`,
    category: "AI",
    author: "Dr. Maria Gonzalez",
    authorAvatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    publishedDate: "2024-12-14",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Quantum Computing", "Science", "Technology"],
    views: 8760,
    isTrending: true
  },
  {
    id: "6",
    title: "5G and Beyond: The Future of Mobile Connectivity",
    summary: "How 5G technology is transforming mobile experiences and what comes next.",
    content: `5G technology has moved beyond the hype to deliver real-world benefits that are transforming how we use mobile devices. With faster speeds, lower latency, and improved reliability, 5G is enabling new applications and services that were previously impossible.

The gaming industry has been revolutionized by 5G's low latency capabilities. Cloud gaming services now provide console-quality experiences on mobile devices, eliminating the need for expensive gaming hardware. Real-time multiplayer games are more responsive and engaging than ever before.

Augmented reality applications are flourishing with 5G support. From navigation apps that overlay directions on real-world views to shopping experiences that let you try products virtually, AR is becoming more practical and immersive.

Smart cities are leveraging 5G for traffic management, environmental monitoring, and public safety. Connected sensors can provide real-time data about air quality, traffic patterns, and infrastructure conditions, enabling more responsive city services.

Healthcare is experiencing a transformation through 5G-enabled telemedicine. Remote surgery, real-time patient monitoring, and instant access to medical records are becoming standard practices, improving healthcare accessibility and quality.

The automotive industry is using 5G for vehicle-to-everything (V2X) communication, enabling safer autonomous driving and more efficient traffic management. Connected vehicles can share information about road conditions, hazards, and traffic patterns.

Industrial applications include remote equipment monitoring, predictive maintenance, and automated manufacturing processes. 5G enables real-time control of robotic systems and immediate response to equipment failures.

Looking ahead, 6G research is already underway, promising even faster speeds, better energy efficiency, and new capabilities like holographic communication and brain-computer interfaces. The future of mobile connectivity continues to evolve at an unprecedented pace.`,
    category: "Gadgets",
    author: "Alex Kim",
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    publishedDate: "2024-12-13",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["5G", "Mobile Technology", "Connectivity"],
    views: 7940,
    isTrending: true
  }
];

export const categories = [
  "AI",
  "Gadgets",
  "Programming",
  "Cybersecurity",
  "Mobile",
  "Gaming",
  "Startups",
  "Reviews"
];

export const getArticlesByCategory = (category: string) => {
  return articles.filter(article => article.category === category);
};

export const getTrendingArticles = () => {
  return articles.filter(article => article.isTrending).slice(0, 4);
};

export const getEditorsPicks = () => {
  return articles.filter(article => article.isEditorsPick);
};

export const getMostReadArticles = () => {
  return articles.sort((a, b) => b.views - a.views).slice(0, 5);
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};