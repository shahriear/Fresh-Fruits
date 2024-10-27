import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';
const ResponsiveManu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="bg-primary text-xl font-semibold text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col gap-10 items-center cursor-pointer ">
              <li className="hover:text-green-500">Home</li>
              <li className="hover:text-green-500">About</li>
              <li className="hover:text-green-500">Service</li>
              <li className="hover:text-green-500">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveManu;
