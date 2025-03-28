import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import questionsData from '../data/questions';

function QuizResult() {
  const { quizId } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const quizResult = storedHistory[quizId];
    if (quizResult) {
      const questions = JSON.parse(localStorage.getItem('questions')) || questionsData;
      const detailedResults = quizResult.answers.map((answer) => {
        const question = questions.find((q) => q.id === answer.questionId);
        return {
          question: question.question,
          correctAnswer: question.answers[question.correctAnswer],
          userAnswer: question.answers[answer.answer],
          isCorrect: question.correctAnswer === answer.answer,
        };
      });
      setResult({
        topicId: quizResult.topicId,
        detailedResults,
        correct: detailedResults.filter((r) => r.isCorrect).length,
        total: detailedResults.length,
      });
    }
  }, [quizId]);

  if (!result) {
    return <p style={{ textAlign: 'center' }}>No results found for this quiz.</p>;
  }

  const summaryStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '20px',
    background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const questionStyle = {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const correctStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  const incorrectStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <div className="container">
      <div style={summaryStyle}>
        <h2>Kết quả chủ đề: {result.topicId}</h2>
        <p>
          <strong>Đúng:</strong> {result.correct} | <strong>Sai:</strong> {result.total - result.correct} |{' '}
          <strong>Tổng số câu:</strong> {result.total} |{' '}
          <strong>Tỷ lệ đúng:</strong> {((result.correct / result.total) * 100).toFixed(2)}%
        </p>
      </div>
      <ul>
        {result.detailedResults.map((item, index) => (
          <li key={index} style={questionStyle}>
            <p>
              <strong>Câu {index + 1}:</strong> {item.question}
            </p>
            <p>
              <strong>Đáp án của bạn:</strong>{' '}
              <span style={item.isCorrect ? correctStyle : incorrectStyle}>{item.userAnswer}</span>
            </p>
            <p>
              <strong>Đáp án đúng:</strong> <span style={correctStyle}>{item.correctAnswer}</span>
            </p>
            <p style={item.isCorrect ? correctStyle : incorrectStyle}>
              {item.isCorrect ? 'Đúng' : 'Sai'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizResult;
