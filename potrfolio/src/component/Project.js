import '../Header.css';
import React from 'react';

const Project = () => {
  return (
    <div>
      <h1 className="header-content" >Project</h1>
      <p className='left-sidebar'>Senior Project : My Senior Project titled "Program Learning Outcome Achievement Database System Version 2." </p>
      <p className='left-sidebar'>
      GitHub: <a href="https://github.com/NinewSupanas" target="_blank" rel="noopener noreferrer">https://github.com/NinewSupanas</a>
      </p>
      <h2 className='left-sidebar'>Leave management system for the staff.</h2>
      {/* รูป3 ฐานข้อมูลการลาของบุคลากร */}
      
      <img className='Leave-image' 
        src="/Img/IMG_2434.jpg" 
        alt="Leave management1"
        style={{ width: '800px' }}
      />
      <p className='left-sidebar'>Home</p>
      {/* รูป2 ฐานข้อมูลการลาของบุคลากร */}
      <img className='Leave-image' 
        src="/Img/IMG_2435.jpg" 
        alt="Leave management2"
        style={{ width: '800px' }}
      />
      <p className='left-sidebar'>Database </p>
      {/* รูป3 ฐานข้อมูลการลาของบุคลากร */}
      <img className='Leave-image' 
        src="/Img/IMG_2436.jpg" 
        alt="Leave management3"
        style={{ width: '800px' }}
      />
      <p className='left-sidebar'>Leave Data</p>
    </div>
  );
};

export default Project;
