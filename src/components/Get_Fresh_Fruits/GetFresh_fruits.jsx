import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/Animation';
import BannerJpg from '../../assets/banner-bg.jpg';
import { IoBagHandleOutline } from 'react-icons/io5';
const bgStyle = {
  background: `url(${BannerJpg})`,
  backgroundPosition: 'center',
  backgroundRrpeat: 'no-repeat',
};

const GetFresh_fruits = () => {
  return (
    <section className="container mb-14">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* Blank div */}
        <div></div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-center md:text-left lg:max-w[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold"
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              molestiae unde aut! Eos velit quibusdam, quaerat adipisci
              repudiandae voluptas magnam libero, impedit, voluptatibus nisi
              eveniet nihil quisquam doloremque vel facilis?
            </motion.p>

            {/* button Section */}

            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className=" flex justify-center md:justify-start"
            >
              <button className="primary_btn flex items-center gap-2">
                <span className="text-2xl">
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetFresh_fruits;
