import React from 'react';

import Hero from './components/Hero/Hero';
import OurManu from './components/Manu/OurManu';
import Brand_info from './components/Brand_Info/Brand_info';
import OnlineFruit_Stotre from './components/Online_Store/OnlineFruit_Stotre';

import Footer from './components/footer/Footer';
import GetFresh_fruits from './components/Get_Fresh_Food/GetFresh_fruits';
import Navbarr from './components/Top-Navbar/Navbarr';

const App = () => {
  return (
    <>
      <Navbarr />
      <Hero />
      <OurManu />
      <Brand_info />
      <OnlineFruit_Stotre />
      <GetFresh_fruits />
      <Footer />
    </>
  );
};

export default App;
