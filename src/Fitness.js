import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Fitness = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/dwp1x/wp9998381.jpg" 
         title="Fitness" data={data[3]}
         />
      </>
    )};
    export default Fitness;

   
   
   
