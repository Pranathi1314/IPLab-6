// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file


const Header = () => {
  return (
    <header>
      <div>
         <img src="https://vesit.ves.ac.in/navlogo.PNG" className="logo"></img>
      </div>
      <div className="college-name" style={{textAlign:'left'}}>Vivekanand Education Society's Institute of Technology</div>
      <nav>
        <ul>
            <li><a href="#">Admission&nbsp;</a></li>
            <li><a href="#">&nbsp; AICTE&nbsp;</a></li>
            <li><a href="#">&nbsp;Autonomy&nbsp;</a></li>
            <li><a href="#">&nbsp;NIRF&nbsp;</a></li>
            <li><a href="#">&nbsp;NAAC&nbsp;</a></li>
            <li><a href="#">&nbsp;Contact us&nbsp;</a></li>
        </ul>
       </nav>
    </header>
  );
};

export default Header;
