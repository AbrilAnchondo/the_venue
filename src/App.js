import React from 'react';
import './resources/styles.css';
import Header from './components/header_and_footer/Header';
import Featured from './components/featured';

function App() {
  return (
    <div className="App" style={{height: '15000px', background: 'black'}}>
     <Header />
     <Featured />
    </div>
  );
}

export default App;
