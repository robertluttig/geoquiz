import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import API from '../../utils/API';

function Quiz() {
    const [questionState, setQuestionState] = useState({
        started: false,
        questions: [{
          id: 1,
          question: "",
          choices: [],
          imageUrl: "",
          answer: 0,
          stuAnswer: ""
        }],
        currentQuestion: 0,
        feedback: ""
      });
    

}

export default Quiz;