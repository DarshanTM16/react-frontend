import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Technology = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp3147485.jpg" 
         title="Technology" data={data[4]}
         />
        </>
    )
};

export default Technology;