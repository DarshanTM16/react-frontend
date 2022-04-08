import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import data from './data.json';


const Home = () => {
    return(
        <>
         <Navbar />
         <Hero data={data} />
         <Footer data={data} />
        </>
    )
}

export default Home;