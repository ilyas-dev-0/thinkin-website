import React, { useEffect, useState } from 'react';
import './Home.css'
import HeroSection from './HomePage/hero';
import AboutUs from './About';
import Testimonials from './HomePage/Testimonials';
import CarouselSection from '../components/CarouselSection'
import TeamSection from './HomePage/Team';
import Team1 from './HomePage/Team1';
import Testimonials1 from './HomePage/Testimonials1';
import Footer from '../components/Footer';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <div>
      <div className='emptyblock'></div>
        <section>
        <CarouselSection />
        <AboutUs />
        <Testimonials1 />
        <Team1 />
        <Footer />


        </section>
        </div>
);
}
export default Home;
