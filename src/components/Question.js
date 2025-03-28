import React from 'react';

function Question({ question, onAnswer }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{question.question}</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {question.answers.map((answer, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <button
              onClick={() => onAnswer(index)}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                backgroundColor: '#f0f0f0',
              }}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
