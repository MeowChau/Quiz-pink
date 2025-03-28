import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa'; // Ensure react-icons is installed

function Header() {
  const navbarStyle = {
    background: 'linear-gradient(135deg, #ff69b4, #ff85c0)',
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const linksStyle = {
    display: 'flex',
    gap: '25px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const linkHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        <FaQuestionCircle /> QuizApp
      </Link>
      <div style={linksStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style = { ...linkStyle, ...linkHoverStyle })}
          onMouseOut={(e) => (e.target.style = linkStyle)}
        >
          Home
        </Link>
        <Link
          to="/login"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style = { ...linkStyle, ...linkHoverStyle })}
          onMouseOut={(e) => (e.target.style = linkStyle)}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style = { ...linkStyle, ...linkHoverStyle })}
          onMouseOut={(e) => (e.target.style = linkStyle)}
        >
          Register
        </Link>
        <Link
          to="/history"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style = { ...linkStyle, ...linkHoverStyle })}
          onMouseOut={(e) => (e.target.style = linkStyle)}
        >
          Quiz History
        </Link>
      </div>
    </nav>
  );
}

export default Header;
