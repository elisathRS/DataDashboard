import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navStyle = {
        display: 'flex',      // Para mostrar los elementos en línea
        listStyle: 'none',    // Para quitar los puntos de la lista
        padding: 0,           // Elimina el espacio interno
      };
    
      const listItemStyle = {
        margin: '0 10px',     // Margen entre elementos
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