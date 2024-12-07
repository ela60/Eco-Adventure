import React, { useEffect } from 'react';
import Footer from './Footer';
import Banner from './Banner';
import AdventureSection from './AdventureSection';
import ChallengeAos from './ChallengeAos';
import EcoTipsSection from './Section/EcoTipsSection';
import PackLightDetails from './Section/PackLightDetails';
import LatestNews from './LatestNews';

const Home = () => {
  useEffect(() => {
    document.title = 'Home - Eco-Adventure Experiences'; 
  }, []);

  return (
    <div>
      <LatestNews />
      <Banner />
      <AdventureSection />
      <ChallengeAos />
      <EcoTipsSection />
      <PackLightDetails />
      <Footer />
    </div>
  );
};

export default Home;
