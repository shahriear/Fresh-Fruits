import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/Animation';

const OnlineFruit_Stotre = () => {
  return (
    <section className="container py-20 ">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 ">
          {/* Store Information */}
          <div className="flex flex-col justify-center">
            <div className="space-y-7 text-center md:text-left lg:max-w[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Online <br /> Fruit Store
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className=""
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus molestiae unde aut! Eos velit quibusdam, quaerat
                adipisci repudiandae voluptas magnam libero, impedit,
                voluptatibus nisi eveniet nihil quisquam doloremque vel facilis?
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className=""
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis et delectus totam nulla tempore explicabo.repudiandae
                voluptas magnam libero, impedit, voluptatibus nisi
              </motion.p>
              {/* button Section */}

              <motion.div
                variants={FadeUp(1.5)}
                initial="hidden"
                animate="visible"
                className=" flex justify-center md:justify-start"
              >
                <button className="primary_btn ">Download the App</button>
              </motion.div>
            </div>
          </div>
          {/* Store Image */}
          <div className="flex justify-center md:justify-end items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src="/fruit-plate2.png"
              alt="fruit-plate img"
              className="drop_shadow w-[250px] md:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineFruit_Stotre;
