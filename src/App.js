import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countdown from './Components/Countdown';
import Congrats from './Components/Congrats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
