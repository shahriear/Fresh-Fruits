import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './components/Hero/Hero';
import OurManu from './components/Manu/OurManu';
import Brand_info from './components/Brand_Info/Brand_info';
import OnlineFruit_Stotre from './components/Online_Store/OnlineFruit_Stotre';
import GetFresh_fruits from './components/Get_Fresh_Fruits/GetFresh_fruits';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
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
