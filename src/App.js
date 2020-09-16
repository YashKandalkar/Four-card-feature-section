import React from 'react';
import './App.css';
import FourCardHolder from './components/FourCardHolder/FourCardHolder';
import FourCardTopInfo from './components/FourCardTopInfo/FourCardTopInfo';

function App() {
  return (
    <div className="App">
      <FourCardTopInfo />
      <FourCardHolder />
    </div>
  );
}

export default App;
