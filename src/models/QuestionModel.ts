export interface Question {
    id: string;
    topicId: string;
    question: string;
    answers: string[];
    correctAnswer: number;
  }
  
  export interface UserAnswer {
    questionId: string;
    answer: number;
  }
  