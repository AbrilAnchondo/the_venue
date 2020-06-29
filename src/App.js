import React from 'react';
import './resources/styles.css';
import Header from './components/header_and_footer/Header';
import Footer from './components/header_and_footer/Footer';
import Featured from './components/featured';
import Venue from './components/venue';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';


function App() {
  return (
    <div style={{background: 'white'}}>
     <Header />
     <Featured />
     <Venue />
     <Highlights />
     <Pricing />
     <Location />
     <Footer />
    </div>
  );
}

export default App;
