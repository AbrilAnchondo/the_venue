import React from 'react';
import './resources/styles.css';
import Header from './components/header_and_footer/Header';
import Featured from './components/featured';
import Venue from './components/venue';

function App() {
  return (
    <div className="App" style={{height: '15000px', background: 'white'}}>
     <Header />
     <Featured />
     <Venue />
    </div>
  );
}

export default App;
