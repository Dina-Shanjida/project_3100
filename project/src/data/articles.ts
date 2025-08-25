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
  // AI
  {
    id: "1",
    title: "The Future of Artificial Intelligence: What 2025 Holds",
    summary: "Exploring the cutting-edge developments in AI technology and their potential impact on society.",
    content: `Artificial Intelligence continues to evolve at an unprecedented pace...`,
    category: "AI",
    author: "Dr. Sarah Chen",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    publishedDate: "2024-12-18",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["AI", "Machine Learning", "Future Tech"],
    views: 15420,
    isEditorsPick: true,
    isTrending: true
  },
  {
    id: "5",
    title: "The Rise of Quantum Computing: Breaking Down the Barriers",
    summary: "Exploring how quantum computing is moving from theory to practical applications.",
    content: `Quantum computing is transitioning from an experimental technology to practical applications...`,
    category: "AI",
    author: "Dr. Maria Gonzalez",
    authorAvatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    publishedDate: "2024-12-14",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    tags: ["Quantum Computing", "Science", "Technology"],
    views: 8760,
    isTrending: true
  },
  {
    id: "ai-003",
    title: "AI-Powered Tools for Everyday Life",
    summary: "How AI is simplifying your daily routine.",
    content: "Smart assistants, recommendation engines, and predictive apps are changing how we shop, travel, and work.",
    category: "AI",
    author: "Leo Martin",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    publishedDate: "2025-07-01",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/11035559/pexels-photo-11035559.jpeg",
    tags: ["AI", "Life", "Tech"],
    views: 3500
  },

  // Gadgets
  {
    id: "2",
    title: "Revolutionary Gadgets That Will Change Your Life in 2025",
    summary: "Discover the most innovative gadgets and devices...",
    content: `The world of consumer technology is about to experience a revolutionary transformation...`,
    category: "Gadgets",
    author: "Mike Rodriguez",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    publishedDate: "2024-12-17",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg",
    tags: ["Gadgets", "Innovation", "Consumer Tech"],
    views: 12890,
    isTrending: true
  },
  {
    id: "6",
    title: "5G and Beyond: The Future of Mobile Connectivity",
    summary: "How 5G technology is transforming mobile experiences...",
    content: `5G technology has moved beyond the hype to deliver real-world benefits...`,
    category: "Gadgets",
    author: "Alex Kim",
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    publishedDate: "2024-12-13",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg",
    tags: ["5G", "Mobile Technology", "Connectivity"],
    views: 7940,
    isTrending: true
  },
  {
    id: "gad-002",
    title: "Top Gadgets You Can’t Miss",
    summary: "A rundown of the hottest gadgets this season.",
    content: "First sec...\n\nSecond sec...",
    category: "Gadgets",
    author: "Bob",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    publishedDate: "2025-06-01",
    readTime: "4 min",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    tags: ["Gadgets", "Tech"],
    views: 980
  },

  // Programming
  {
    id: "3",
    title: "Modern Web Development: React 19 and Beyond",
    summary: "An in-depth look at the latest features in React 19...",
    content: `React 19 has arrived with groundbreaking features...`,
    category: "Programming",
    author: "Emma Thompson",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    publishedDate: "2024-12-16",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    tags: ["React", "JavaScript", "Web Development"],
    views: 9850,
    isEditorsPick: true
  },
  {
    id: "prog-002",
    title: "Mastering TypeScript for Large Projects",
    summary: "Tips and patterns for scalable TypeScript applications.",
    content: "From interfaces to generics, here’s how you write maintainable TS code.",
    category: "Programming",
    author: "Samantha Lee",
    authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    publishedDate: "2025-07-10",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    tags: ["TypeScript", "Clean Code"],
    views: 2100
  },

  // Cybersecurity
  {
    id: "4",
    title: "Cybersecurity Threats in 2025: What You Need to Know",
    summary: "Understanding the evolving landscape of cybersecurity threats...",
    content: `As we move deeper into 2025, cybersecurity threats are becoming more sophisticated...`,
    category: "Cybersecurity",
    author: "James Liu",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    publishedDate: "2024-12-15",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    tags: ["Cybersecurity", "Privacy", "Data Protection"],
    views: 11230,
    isEditorsPick: true
  },
  {
    id: 'sec-001',
    title: 'Protecting Your Data in 2025',
    summary: 'Practical tips to stay secure online this year.',
    content: 'Paragraph 1...\n\nParagraph 2...',
    category: 'Cybersecurity',
    author: 'Alice',
    authorAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    publishedDate: '2025-05-10',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg',
    tags: ['Security', 'Data', 'Privacy'],
    views: 1200,
    isTrending: true
  },

  // Mobile
  {
    id: "mobile-001",
    title: "Mobile UX Best Practices for 2025",
    summary: "Designing smooth mobile experiences for modern users.",
    content: "Focus on performance, touch UX, and minimalist design.",
    category: "Mobile",
    author: "David Park",
    authorAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    publishedDate: "2025-06-25",
    readTime: "5 min",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
    tags: ["UX", "Mobile", "Design"],
    views: 800
  },

  // Gaming
  {
    id: "game-001",
    title: "Top Indie Games to Watch in 2025",
    summary: "These indie titles are taking the gaming world by storm.",
    content: "Featuring fresh gameplay, art, and stories from small teams.",
    category: "Gaming",
    author: "Nina Fox",
    authorAvatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
    publishedDate: "2025-06-20",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    tags: ["Gaming", "Indie", "Reviews"],
    views: 1050
  },

  // Startups
  {
    id: "startup-001",
    title: "Startup Trends to Watch in 2025",
    summary: "Where smart founders are investing time and money.",
    content: "SaaS, climate tech, AI tools, and health-tech are leading the way.",
    category: "Startups",
    author: "Carlos Mendes",
    authorAvatar: "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg",
    publishedDate: "2025-06-30",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    tags: ["Startup", "Business", "Funding"],
    views: 1400
  },

  // Reviews
  {
    id: "rev-001",
    title: "iPhone 17 Review: Is It Worth the Upgrade?",
    summary: "A deep dive into Apple’s latest flagship.",
    content: "With subtle design changes and big camera improvements, is it worth upgrading?",
    category: "Reviews",
    author: "Rita Hayes",
    authorAvatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
    publishedDate: "2025-06-28",
    readTime: "4 min",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    tags: ["iPhone", "Apple", "Tech Review"],
    views: 3000
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
  return articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
};

export const getTrendingArticles = () => {
  return articles.filter(article => article.isTrending).slice(0, 4);
};

export const getEditorsPicks = () => {
  return articles.filter(article => article.isEditorsPick);
};

export const getMostReadArticles = () => {
  return [...articles].sort((a, b) => b.views - a.views).slice(0, 5);
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

// ✅ New: Generate shareable link for an article
export const getArticleShareLink = (id: string) => {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/article/${id}`;
  }
  return `/article/${id}`;
};

export const getAllArticles = () => {
  return articles;
};