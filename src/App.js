// App.js
import React from 'react';
import './App.css'; // Add global styles if needed
import Header from './components/Header';
import Navbar from './components/Navbar';
import SideSection from './components/SideSection';
import MovingHeadline from './components/MovingHeadline';
import Footer from './components/Footer';
import Image from './components/Image';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="content">
        <div className="side-section-container">
          <SideSection />
        </div>
        <div className="image-container">
          <Image />
        </div>
        <main>
          {/* Your main content goes here */}
        </main>
      </div>
      <MovingHeadline />
      <Footer></Footer>
    </div>
  );
};

export default App;
