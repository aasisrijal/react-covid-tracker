import React from 'react';

import './App.css';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

function App() {
  return (
    <div>
           
        <h2>
          This is covid-19 tracker.
        </h2>
        <Cards />
        <Chart />
        <CountryPicker />
      
     
    </div>
  );
}

export default App;
