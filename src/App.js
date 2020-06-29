import React from 'react';
import './resources/styles.css';
import Header from './components/header_and_footer/Header';
import Featured from './components/featured';
import Venue from './components/venue';
import Highlights from './components/highlights';

function App() {
  return (
    <div style={{height: '15000px', background: 'white'}}>
     <Header />
     <Featured />
     <Venue />
     <Highlights />
    </div>
  );
}

export default App;
