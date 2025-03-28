const questions = [
  // HTML Questions
  {
    id: 'q1',
    topicId: 'html',
    question: 'What does HTML stand for?',
    answers: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Tool Markup Language',
    ],
    correctAnswer: 0,
  },
  {
    id: 'q2',
    topicId: 'html',
    question: 'Which HTML tag is used to define an internal style sheet?',
    answers: ['<style>', '<script>', '<css>', '<link>'],
    correctAnswer: 0,
  },
  {
    id: 'q3',
    topicId: 'html',
    question: 'Which HTML attribute is used to define inline styles?',
    answers: ['style', 'class', 'id', 'styles'],
    correctAnswer: 0,
  },
  {
    id: 'q4',
    topicId: 'html',
    question: 'What is the correct HTML element for inserting a line break?',
    answers: ['<break>', '<lb>', '<br>', '<line>'],
    correctAnswer: 2,
  },
  {
    id: 'q5',
    topicId: 'html',
    question: 'Which HTML tag is used to define a table?',
    answers: ['<table>', '<tab>', '<tr>', '<td>'],
    correctAnswer: 0,
  },
  {
    id: 'q6',
    topicId: 'html',
    question: 'Which HTML element is used to specify a footer for a document?',
    answers: ['<footer>', '<bottom>', '<foot>', '<end>'],
    correctAnswer: 0,
  },
  {
    id: 'q7',
    topicId: 'html',
    question: 'What is the correct HTML for creating a hyperlink?',
    answers: [
      '<a href="url">Link</a>',
      '<link href="url">Link</link>',
      '<a>Link</a>',
      '<url>Link</url>',
    ],
    correctAnswer: 0,
  },
  {
    id: 'q8',
    topicId: 'html',
    question: 'Which HTML element is used to define important text?',
    answers: ['<strong>', '<important>', '<b>', '<i>'],
    correctAnswer: 0,
  },
  {
    id: 'q9',
    topicId: 'html',
    question: 'Which HTML element is used to define emphasized text?',
    answers: ['<em>', '<italic>', '<i>', '<strong>'],
    correctAnswer: 0,
  },
  {
    id: 'q10',
    topicId: 'html',
    question: 'Which character is used to indicate an end tag in HTML?',
    answers: ['/', '<', '>', '!'],
    correctAnswer: 0,
  },

  // CSS Questions
  {
    id: 'q11',
    topicId: 'css',
    question: 'What does CSS stand for?',
    answers: [
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswer: 1,
  },
  {
    id: 'q12',
    topicId: 'css',
    question: 'Which property is used to change the background color?',
    answers: ['background-color', 'color', 'bgcolor', 'background'],
    correctAnswer: 0,
  },
  {
    id: 'q13',
    topicId: 'css',
    question: 'Which CSS property controls the text size?',
    answers: ['font-size', 'text-size', 'font-style', 'text-style'],
    correctAnswer: 0,
  },
  {
    id: 'q14',
    topicId: 'css',
    question: 'How do you make a list not display bullet points?',
    answers: [
      'list-style: none;',
      'list: none;',
      'text-decoration: none;',
      'bullet: none;',
    ],
    correctAnswer: 0,
  },
  {
    id: 'q15',
    topicId: 'css',
    question: 'Which property is used to change the font of an element?',
    answers: ['font-family', 'font-style', 'font-weight', 'font'],
    correctAnswer: 0,
  },
  {
    id: 'q16',
    topicId: 'css',
    question: 'How do you make text bold in CSS?',
    answers: [
      'font-weight: bold;',
      'font-style: bold;',
      'text-weight: bold;',
      'text-style: bold;',
    ],
    correctAnswer: 0,
  },
  {
    id: 'q17',
    topicId: 'css',
    question: 'Which property is used to align text to the center?',
    answers: ['text-align: center;', 'align: center;', 'center: text;', 'text: center;'],
    correctAnswer: 0,
  },
  {
    id: 'q18',
    topicId: 'css',
    question: 'How do you add a border in CSS?',
    answers: [
      'border: 1px solid black;',
      'border-width: 1px;',
      'border-style: solid;',
      'border-color: black;',
    ],
    correctAnswer: 0,
  },
  {
    id: 'q19',
    topicId: 'css',
    question: 'Which property is used to add space inside an element?',
    answers: ['padding', 'margin', 'spacing', 'border'],
    correctAnswer: 0,
  },
  {
    id: 'q20',
    topicId: 'css',
    question: 'Which property is used to add space outside an element?',
    answers: ['margin', 'padding', 'spacing', 'border'],
    correctAnswer: 0,
  },

  // Add similar sets of 10 questions for `js` and `react` topics...
];

export default questions;
