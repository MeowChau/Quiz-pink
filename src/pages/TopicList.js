import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import topicsData from '../data/topics';

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const storedTopics = JSON.parse(localStorage.getItem('topics')) || topicsData;
      setTopics(storedTopics);

      if (!localStorage.getItem('topics')) {
        localStorage.setItem('topics', JSON.stringify(topicsData));
      }
    } catch (err) {
      setError('Failed to load topics.');
    }
  }, []);

  const containerStyle = {
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    background: 'linear-gradient(135deg, #ff6f61, #ff9a9e)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '8px 15px',
    fontSize: '14px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    color: 'white',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(135deg, #fad0c4, #ff9a9e)',
  };

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>Danh sách chủ đề ôn luyện</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Id</th>
            <th style={thStyle}>Tên chủ đề</th>
            <th style={thStyle}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={topic.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{topic.name}</td>
              <td style={tdStyle}>
                <Link to={`/quiz/${topic.id}`}>
                  <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style = { ...buttonStyle, ...buttonHoverStyle })}
                    onMouseOut={(e) => (e.target.style = buttonStyle)}
                  >
                    Làm bài
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopicList;
