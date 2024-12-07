import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import 'animate.css'; 
import Section1 from './Section/Section1';
import WinterAdventurePage from './WinterAdventurePage';

const ChallengeAos = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true,     
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up" className="animate__animated animate__fadeIn">
       <WinterAdventurePage/>
      </h1>
     
      <div className="cards">
        <div data-aos="flip-left" className="card">
          <h2 className="animate__animated animate__fadeInLeft"><Section1/></h2>
        </div>
        {/* <div data-aos="flip-right" className="card">
          <h2 className="animate__animated animate__fadeInRight">Card 2</h2>
        </div> */}
      </div>
    </div>
  );
};

export default ChallengeAos;
