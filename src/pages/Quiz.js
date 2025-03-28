import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question';
import questionsData from '../data/questions';

function Quiz() {
  const { topicId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || questionsData;
    const filteredQuestions = storedQuestions.filter((q) => q.topicId === topicId);
    setQuestions(filteredQuestions);

    if (!localStorage.getItem('questions')) {
      localStorage.setItem('questions', JSON.stringify(questionsData));
    }
  }, [topicId]);

  const handleAnswer = (answerIndex) => {
    setUserAnswers([...userAnswers, { questionId: questions[currentQuestionIndex].id, answer: answerIndex }]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    const correctAnswers = questions.filter((q, index) => q.correctAnswer === userAnswers[index]?.answer).length;
    setScore({ correct: correctAnswers, total: questions.length });

    // Save quiz results to localStorage
    const storedAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const newEntry = {
      topicId,
      answers: userAnswers.map((answer, index) => ({
        questionId: questions[index].id,
        answer: answer.answer,
        isCorrect: questions[index].correctAnswer === answer.answer,
      })),
      timestamp: Date.now(), // Add timestamp for history
    };
    localStorage.setItem('userAnswers', JSON.stringify([...storedAnswers, newEntry]));
  };

  if (score) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Quiz Results</h2>
        <p>Correct: {score.correct}</p>
        <p>Total: {score.total}</p>
        <p>Accuracy: {(score.correct / score.total) * 100}%</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return <p>No questions available for this topic.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Quiz: {topicId}</h2>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <Question question={currentQuestion} onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;
