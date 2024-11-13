'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Award, BookOpen, Cloud, Database } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {ProjectsSectionComponent} from './projects-section'

export function Homepage() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'achievements', 'skills','Projects']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-8">
            {['Home', 'About', 'Achievements', 'Skills','Project'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              Abhishek
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              B.Tech Computer Science and Engineering Student
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Button
                variant="default"
                size="lg"
                asChild
              >
                <a
                  href="http://www.linkedin.com/in/abhi-shek-40b342338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <a
                  href="https://github.com/Shek9949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/folders/1OpDfw4ZjXvEQIA-4EDCMXCFR08g8XaCH"
                  className="flex items-center space-x-2"
                >
                  <Award size={20} />
                  <span>Certificates</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-6">
              I'm a second-year B.Tech Computer Science and Engineering student at XYZ University, deeply passionate about developing innovative software solutions and solving complex problems using technology. With a strong foundation in programming languages like Java, Python, and C++, I'm constantly improving my skills in data structures, algorithms, and exploring cutting-edge fields such as AI, cloud computing, and blockchain.
            </p>
            <p className="text-lg mb-6">
              My work includes building machine learning models, contributing to open-source projects, and designing full-stack web applications. I'm actively expanding my knowledge in cloud platforms such as AWS and Azure, and I'm working on real-time systems and IoT projects. I'm also keen on exploring the potential of blockchain for decentralized applications and digital assets.
            </p>
          </div>
        </section>

        <section id="achievements" className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Machine Learning Spam Classifier",
                  description: "Developed a spam email classifier using Python and scikit-learn, achieving over 95% accuracy in classification.",
                  icon: <Database size={24} />,
                },
                {
                  title: "Full-stack Web Application",
                  description: "Built a web app for a local business using Node.js, Express, and MongoDB, enhancing customer interaction and reducing response times.",
                  icon: <Cloud size={24} />,
                },
                {
                  title: "Open-source Contributions",
                  description: "Contributed to several projects on GitHub, including a data visualization tool for COVID-19 trends and a weather forecasting API.",
                  icon: <Github size={24} />,
                },
                {
                  title: "Blockchain-based Voting System",
                  description: "Designed and implemented a blockchain-based voting system, ensuring transparency and security in digital elections.",
                  icon: <Database size={24} />,
                },
                {
                  title: "Cloud Computing Certifications",
                  description: "Completed certifications in AWS Cloud Solutions Architect and Azure Fundamentals to deepen my expertise in cloud computing.",
                  icon: <Award size={24} />,
                },
                {
                  title: "E-commerce Web Scraper",
                  description: "Developed a Python-based web scraper to gather real-time data from e-commerce websites to predict market trends.",
                  icon: <BookOpen size={24} />,
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  </div>
                  <p className="text-card-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Java", "Python", "C++", "JavaScript",
                "React", "Node.js", "MongoDB", 
                  "IoT"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-muted p-4 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <div id='project'></div>
      <ProjectsSectionComponent />

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="mt-4 flex justify-center space-x-4">
            <a href="http://www.linkedin.com/in/abhi-shek-40b342338" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Shek9949" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}