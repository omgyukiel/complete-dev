import React from 'react';
import './App.css';

function App() {
    const getElement = (weather: string): jSX.ELement => {
      const element = <h1>The weather is {weather}</h1>
      return element;
    };
    return getElement("sunny");
}

export default App;
