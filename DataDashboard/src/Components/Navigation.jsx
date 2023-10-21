import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navStyle = {
        display: 'flex',      
        listStyle: 'none',    
        padding: 0,           
      };
    
      const listItemStyle = {
        margin: '0 10px',     
      };

  return (
    <nav>
      <ul style={navStyle}>
        <li style={listItemStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/about">About Us</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;