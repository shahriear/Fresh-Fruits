import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaBars } from 'react-icons/fa6';
import ResponsiveManu from '../Navbar/ResponsiveManu';

const NavBarManu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Products',
    link: '#',
  },
  {
    id: 3,
    title: 'About',
    link: '#',
  },
  {
    id: 4,
    title: 'Shope',
    link: '#',
  },
  {
    id: 5,
    title: 'Contact',
    link: '#',
  },
];
const Navbarr = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between py-4 md:pt-4">
          {/* Logo section */}
          <div className="flex gap-2 font-bold text-2xl items-center">
            <p className="text-primary text-">FRUIT</p>
            <p className="text-secondary">STORE</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* manu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavBarManu.map(manu => (
                <li key={manu.id}>
                  <a
                    href={manu.link}
                    className="hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {manu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* mobile view manu responsive */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <FaBars className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Menu section */}
      <ResponsiveManu open={open} />
    </>
  );
};

export default Navbarr;
