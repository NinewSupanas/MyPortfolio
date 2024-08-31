// Home.js
import React from 'react';

const Activity = () => {
  return (
    <div>
      <h1 className="header-content" >Activity</h1>
      <p className='left-sidebar'>
      New Regional Startups-P1: <a href="https://web.facebook.com/share/p/BdZUk3UhcnGzxkW6/" target="_blank" rel="noopener noreferrer">New Regional Startups-P1</a>
      </p>
       {/*  New Regional Startups-P1 */}
      
       <img className='Leave-image' 
        src="/Img/IMG_9504.JPG" 
        alt="Startups"
        style={{ width: '200px' }}
      />
      <p className='left-sidebar'>
      NU Hackathon 2024 : <a href="https://web.facebook.com/share/p/JK2M74rWtShsZUzR/" target="_blank" rel="noopener noreferrer">NU Hackathon 2024</a>
      </p>
       {/* Hackathon */}
       <img className='Leave-image' 
        src="Img/IMG_8954.JPG" 
        alt="Hackathon"
        style={{ width: '500px' }}
      />
    </div>
  );
};

export default Activity;
