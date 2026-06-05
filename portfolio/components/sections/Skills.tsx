'use client'

import { motion } from 'framer-motion'

const cyberSkills = [
  { name: 'Ethical Hacking', level: 90 },
  { name: 'Network Security', level: 85 },
  { name: 'Kali Linux', level: 95 },
  { name: 'Burp Suite & Wireshark', level: 80 },
  { name: 'Nmap & Reconnaissance', level: 90 },
  { name: 'Python for Security', level: 75 },
]

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical <span className="text-glow">Arsenal</span></h2>
          <p className="section-subtitle">Core competencies in cybersecurity and system analysis.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto glassmorphism p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cyberSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-200">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-dark-tertiary rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary glow"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills