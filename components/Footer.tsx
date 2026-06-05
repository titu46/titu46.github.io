'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaInstagram, FaFiverr, FaUpwork } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/titu46', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFiverr, href: '#', label: 'Fiverr' },
    { icon: FaUpwork, href: '#', label: 'Upwork' },
  ]

  return (
    <footer className="bg-dark-secondary border-t border-primary/20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold mb-4 text-glow">Email</h3>
            <a href="mailto:mazhar@example.com" className="text-gray-400 hover:text-primary">mazhar@example.com</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold mb-4 text-glow">Phone</h3>
            <a href="tel:+923001234567" className="text-gray-400 hover:text-primary">+92 300 1234567</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold mb-4 text-glow">Location</h3>
            <p className="text-gray-400">Sindh, Pakistan</p>
          </motion.div>
        </div>
        <div className="border-t border-primary/20 pt-8">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a key={social.label} href={social.href} className="text-gray-400 hover:text-primary" whileHover={{ scale: 1.2 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
          <p className="text-center text-gray-500 text-sm">© 2024 Mazhar Ali (Alee GFX). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
