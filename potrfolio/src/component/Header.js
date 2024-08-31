import React from 'react';
import '../Header.css';

// Header Component แบบ function
//Home ก็คือ Header
const Header = () => {
  return(
  <div className="header-container">
    <header className="header-content">
      <img className='profile-image' 
        src="/Img/IMG7693.jpg" 
        alt="Profile"
        style={{ width: '350px' }}
      />
      <h1>About me</h1>
      <h2>Hello!</h2> 
      <p className='left-sidebar'>NAME:Supanas Sangtu</p>
      <p className='left-sidebar'> I am currently a fourth-year student in Computer Engineering at the Faculty of Engineering, Naresuan University. I have completed three internships and am currently studying and interested in database systems and website development. At present, I am working on my Senior Project titled "Program Learning Outcome Achievement Database System Version 2."</p>
      </header>
    <div className="right-sidebar">
      <h1 className="header-content ">Education</h1>
      <p className='left-sidebar'>2015 - 2020 Sciences and Mathematics Program Bangmunnakphoomiwitthayakhom School.</p>
      <p className='left-sidebar'>2021 - Present Bachelor of Engineering Program in  Computer Engineering Naresuan University.</p>
      <h1 className="header-content ">Languages Test</h1>
      <p className='left-sidebar'>ECPT - 25</p>
    </div>
    
  </div>
  );
};

export default Header;
