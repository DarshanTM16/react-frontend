
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bollywood from './Bollywood';
import Travel from './Travel';
import Hollywood from './Hollywood';
import Technology from './Technology';
import Fitness from './Fitness';

const App = () => {
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bollywood" element={<Bollywood />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/Hollywood" element={<Hollywood />}></Route>
        <Route path="/fitness" element={<Fitness />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
      </Routes>
     </BrowserRouter>
    </>
    
  )
}


export default App;