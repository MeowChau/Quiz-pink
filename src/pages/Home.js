import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const containerStyle = {
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '32px',
    color: '#ff6f61',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    marginBottom: '15px',
    textAlign: 'justify',
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '16px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    color: 'white',
    transition: 'background 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(135deg, #fad0c4, #ff9a9e)',
    transform: 'scale(1.05)',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome to QuizApp</h2>
      <p style={paragraphStyle}>
        QuizApp is your go-to platform for testing your knowledge on various topics like HTML, CSS, JavaScript, and ReactJS.
        Sign up or log in to start your journey of learning and self-assessment.
      </p>
      <p style={paragraphStyle}>
        Explore topics, take quizzes, and track your progress. Let's make learning fun and interactive!
      </p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/register">
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style = { ...buttonStyle, ...buttonHoverStyle })}
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
