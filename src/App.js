import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; // Import the new Header component
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import TopicList from './pages/TopicList';
import Quiz from './pages/Quiz';
import QuizHistory from './pages/QuizHistory';
import QuizResult from './pages/QuizResult';

function ProtectedRoute({ children }) {
  const isLoggedIn = document.cookie.includes('token=');
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Use the Header component */}
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/topics"
              element={
                <ProtectedRoute>
                  <TopicList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz/:topicId"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <QuizHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/result/:quizId"
              element={
                <ProtectedRoute>
                  <QuizResult />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <footer className="footer">
          <p>© 2025 QuizApp. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
