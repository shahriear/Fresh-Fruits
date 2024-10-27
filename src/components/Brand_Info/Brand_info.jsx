import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/Animation';

const Brand_info = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            src="/fruits-splash.png"
            alt="img"
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-center md:text-left lg:max-w[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              molestiae unde aut! Eos velit quibusdam, quaerat adipisci
              repudiandae voluptas magnam libero, impedit, voluptatibus nisi
              eveniet nihil quisquam doloremque vel facilis?
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis et delectus totam nulla tempore explicabo.
            </motion.p>
            {/* button Section */}

            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className=" flex justify-center md:justify-start"
            >
              <button className="primary_btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand_info;
