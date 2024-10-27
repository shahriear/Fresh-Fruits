import { div } from 'framer-motion/client';
import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/Animation';

const MenusData = [
  {
    id: 1,
    title: 'Fresh Apples',
    link: '/',
    price: '$3.00',
    img: '/apple.png',
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Fresh Orange',
    link: '/',
    price: '$2.00',
    img: '/orange.png',
    delay: 0.3,
  },
  {
    id: 3,
    title: 'Fresh Avocado',
    link: '/',
    price: '$4.00',
    img: '/avocado.png',
    delay: 0.6,
  },
  {
    id: 4,
    title: 'Fresh Cherries',
    link: '/',
    price: '$5.00',
    img: '/cherry.png',
    delay: 1.2,
  },
];

const OurManu = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold pb-10"
        >
          OUR MENU
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map(menu => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={'visible'}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify- items-center gap-3"
            >
              <img
                src={menu.img}
                alt="img"
                className="w-[60px] scale-125 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg text-secondary font-semibold">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurManu;
