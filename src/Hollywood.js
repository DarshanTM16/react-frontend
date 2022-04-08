import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Bollywood = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/dwp1x/wp9699992.jpg " 
         title="Hollywood" data={data[2]}
         />
        </>
    )
}

export default Bollywood;