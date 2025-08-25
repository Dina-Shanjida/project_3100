import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 10 years in tech journalism, Sarah leads our editorial team with expertise in AI and emerging technologies.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Senior Tech Writer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mike specializes in gadget reviews and consumer technology, bringing technical expertise to everyday users.'
    },
    {
      name: 'Emma Thompson',
      role: 'Programming Correspondent',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emma covers software development trends and programming languages with deep technical knowledge.'
    },
    {
      name: 'James Liu',
      role: 'Cybersecurity Expert',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'James brings enterprise security experience to help readers understand cybersecurity threats and solutions.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description: 'We prioritize factual reporting and thorough research in every story we publish.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Our readers are at the heart of everything we do, from content creation to engagement.'
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'We maintain the highest standards of journalism and editorial integrity.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We cover technology trends and innovations from around the world.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-16 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-950 text-white py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About TechNova</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto dark:text-blue-200">
              Your trusted source for technology news, insights, and analysis since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                TechNova was founded with a simple but powerful mission: to make technology accessible and understandable for everyone. We believe that in our rapidly evolving digital world, staying informed about technology isn't just beneficial—it's essential.
              </p>
              <p className="text-lg mb-6">
                Our team of experienced journalists and tech experts work tirelessly to bring you the most important stories, breaking news, and in-depth analysis from the world of technology. From artificial intelligence and cybersecurity to the latest gadgets and programming trends, we cover it all.
              </p>
              <p className="text-lg">
                We're committed to providing accurate, unbiased reporting that helps our readers make informed decisions about the technology that shapes their lives.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img
                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-900/20 dark:to-purple-950/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg max-w-2xl mx-auto">
              The principles that guide our work and define who we are as a publication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg max-w-2xl mx-auto">
              The talented journalists and experts who bring you the latest in technology news
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-950 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-100 dark:text-blue-200">Monthly Readers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <div className="text-blue-100 dark:text-blue-200">Articles Published</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100 dark:text-blue-200">Expert Contributors</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-blue-100 dark:text-blue-200">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
