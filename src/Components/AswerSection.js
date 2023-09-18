// import React from "react";
// import { useReducer } from "react";
// import QuestionSection from "./QuestionSection";

// const initial = {
//   currentQuestionIndex: 0,
//   score: 0,
// };
// function reducer(state, action) {
//   if (action.type === "NEXT_QUESTION") {
//     return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
//   }
//   if (action.type === "CURRECT_ANSWER") {
//     return {
//       ...state,
//       score: state.score + 1,
//     };
//   }
// }
// export default function AswerSection() {
//   const [state, dispatch] = useReducer(reducer, initial);
//   const currentQuestion = QuestionSection[state.currentQuestionIndex];
//   function handleAnswerClick(selectedOption) {
//     if (selectedOption === currentQuestion.correctAnswer) {
//       dispatch({ type: "CURRECT_ANSWER" });
//     }
//     dispatch({ type: "NEXT_QUESTION" });
//   }
//   return (
//     <div>
//       {currentQuestion ? (
//         <div>
//           <h2>{currentQuestion.question}</h2>
//           <ul>
//             {currentQuestion.options.map((option, index) => (
//               <li key={index} onClick={() => handleAnswerClick(option)}>
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>
//           <h2>Quiz Completed</h2>
//           <p>Your Score {state.score}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// Quiz.js
import React, { useReducer } from "react";

import { quizData } from "./quizData";

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

const AswerSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentQuestion = quizData[state.currentQuestionIndex];

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === currentQuestion.correctAnswer) {
      dispatch({ type: "CORRECT_ANSWER" });
    }
    dispatch({ type: "NEXT_QUESTION" });
  };

  return (
    <div>
      {currentQuestion ? (
        <div>
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed</h2>
          <p>Your Score: {state.score}</p>
        </div>
      )}
    </div>
  );
};

export default AswerSection;
