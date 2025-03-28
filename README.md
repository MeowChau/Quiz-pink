# QuizApp

QuizApp is a React-based web application that allows users to test their knowledge on various topics like HTML, CSS, JavaScript, and ReactJS. Users can register, log in, take quizzes, and view their quiz history.

## Features

- **User Authentication**: Register and log in to access the app.
- **Quiz Topics**: Choose from multiple topics to take quizzes.
- **Quiz Results**: View detailed results after completing a quiz.
- **Quiz History**: Track your quiz attempts with a history table.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.js         # Header component with navigation links
│   ├── Question.js       # Component to display quiz questions
├── data/
│   ├── questions.js      # Quiz questions data
│   ├── topics.js         # Quiz topics data
├── pages/
│   ├── Home.js           # Home page with introduction
│   ├── Login.js          # Login page
│   ├── Register.js       # Registration page
│   ├── TopicList.js      # List of quiz topics
│   ├── Quiz.js           # Quiz page
│   ├── QuizHistory.js    # Quiz history page
│   ├── QuizResult.js     # Quiz result page
├── App.js                # Main app component
├── App.css               # Global styles
```

## Features in Detail

### 1. **User Authentication**

- Users can register with their email, password, and full name.
- Login functionality validates credentials stored in `localStorage`.

### 2. **Quiz Topics**

- Topics include HTML, CSS, JavaScript, and ReactJS.
- Topics are dynamically loaded from `topics.js`.

### 3. **Quiz Results**

- After completing a quiz, users can view:
  - Number of correct answers.
  - Total questions.
  - Accuracy percentage.

### 4. **Quiz History**

- Displays a table with:
  - Attempt number.
  - Time of the attempt.
  - Number of correct answers.
  - Accuracy percentage.
- Data is stored in `localStorage` and updated after each quiz.

### 5. **Responsive Design**

- The app is fully responsive and works on both desktop and mobile devices.

## Technologies Used

- **React**: Frontend framework.
- **React Router**: For navigation and routing.
- **React Icons**: For icons in the header.
- **CSS**: For styling the application.

## How to Use

1. **Register**:
   - Go to the "Register" page and create an account.
2. **Login**:
   - Log in with your registered email and password.
3. **Take a Quiz**:
   - Select a topic from the "Topics" page and start the quiz.
4. **View Results**:
   - After completing the quiz, view your results.
5. **Track History**:
   - Go to the "Quiz History" page to view your past quiz attempts.

## Future Enhancements

- Add more topics and questions.
- Implement a backend for user authentication and data storage.
- Add a timer for quizzes.
- Allow users to reset their quiz history.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by submitting issues or pull requests!
