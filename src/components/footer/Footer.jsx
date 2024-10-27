import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLeaf,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between"
      >
        {/* Logo section */}
        <div className="flex gap-2 font-bold text-2xl items-center">
          <p className="text-primary text-">FRUIT</p>
          <p className="text-secondary">STORE</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* social Link section */}
        <div>
          <a
            href="#"
            className="text-3xl flex items-center gap-4 text-gray-700"
          >
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
