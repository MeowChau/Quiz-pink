import React, { useEffect, useState } from 'react';

function QuizHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const formattedHistory = storedHistory.map((entry, index) => {
      const correctAnswers = entry.answers.filter((answer) => answer.isCorrect).length;
      const accuracy = ((correctAnswers / entry.answers.length) * 100).toFixed(2);
      return {
        attempt: index + 1,
        time: new Date(entry.timestamp).toLocaleString(),
        correct: correctAnswers,
        accuracy,
      };
    });
    setHistory(formattedHistory);
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

  if (history.length === 0) {
    return <p style={{ textAlign: 'center' }}>No quiz history available.</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>Quiz History</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Attempt</th>
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Correct Answers</th>
            <th style={thStyle}>Accuracy (%)</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.attempt}>
              <td style={tdStyle}>{entry.attempt}</td>
              <td style={tdStyle}>{entry.time}</td>
              <td style={tdStyle}>{entry.correct}</td>
              <td style={tdStyle}>{entry.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizHistory;
