import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Travel = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/dwp1x/wp9388475.jpg" 
         title="Travel" data={data[5]}
         />
        </>
    )
};

export default Travel;