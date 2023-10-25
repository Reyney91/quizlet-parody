import { useState } from "react";

import "./App.css";

// (variantIndex == question.correct) && setIsAnswer(true);

// style={isAnswer?{backgroundColor:'green'}:{backgroundColor:'red'}}
// setStep(()=>step+1)

interface IQuestion {
  title: string;
  variants: string[];
  correct: string;
}
const questions: IQuestion[] = [
  {
    title: "Что такое реакт?",
    variants: [
      "библиотека",
      "расширение javascript",
      "средсво уборки полов =)",
    ],
    correct: "0",
  },
  {
    title: "Сколько синих полос на флаге США??",
    variants: ["6", "7", "13", "0"],
    correct: "3",
  },
];

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const handleClickVariant = (elem: any) => {
    if (!(elem instanceof HTMLElement)) return;

    elem.id == question.correct
      ? (elem.style.backgroundColor = "green")
      : (elem.style.backgroundColor = "red");
  };

  return (
    <>
      {step < questions.length ? (
        <div className="questionContainer">
          <h2>{question.title}</h2>
          <ul>
            {question.variants.map((text, index) => (
              <li
                key={text}
                id={`${index}`}
                onClick={(elem) => handleClickVariant(elem.target)}
              >
                {text}
              </li>
            ))}
          </ul>
          <div className="buttonsContainer">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)}>Prev</button>
            )}
            <button onClick={() => setStep(step + 1)}>Next</button>
          </div>
        </div>
      ) : (
        <>
          <div>Done</div>
          <button onClick={() => setStep(0)}>reset</button>
        </>
      )}
    </>
  );
}

export default App;
