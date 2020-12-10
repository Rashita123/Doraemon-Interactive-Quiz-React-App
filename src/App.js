import React, { useState } from "react";
import "./styles.css";

var questions = [
  {
    quest: "What is the color of Dorami, Doraemon's sister?",
    options: ["A. Yellow", "B. Red", "C. Blue"],
    ans: 0,
    response:
      "Dorami is the cute sister robot of Doraemon who lives with Sewashi (Nobita's great grandson in the 22nd century). She occasionally helps Nobita and is shown as a more advanced robot than Doraemon."
  },

  {
    quest: "What is the name of bully Gian's sister?",
    options: ["A. Jaiko", "B. Shizuka", "C. Dorami"],
    ans: 0,
    response:
      "Jaiko is the fat ugly sister of Gian whom Gian loves very much. She loves to create mangas and enter them in contests. Her pen name is Christine Goda. She loves her pet dog very much, even though Gian sometimes gets annoyed with this fact."
  },

  {
    quest: "Who is Gian's sidekick?",
    options: ["A. Nobita", "B. Suneo", "C. Dorami"],
    ans: 1,
    response:
      "Suneo is shown to be a wealthy kid who remains with Gian only to not be bullied by him. He actually likes Nobita and admits it often, much to the chagrin of Gian."
  },
  {
    quest: "Nobita fears more?",
    options: ["A.  Mom", "B. Jian", "C. Confusing Afff!"],
    ans: 1,
    response: "Confusing enough, but close observation says this! 😁"
  }
];

export default function App() {
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState("");
  function responseSelect(optionNo) {
    setOptions(optionNo);
  }

  function checkResponse(correctResponse) {
    if (correctResponse === options) {
      setScore(score + 1);
      setCorrect("Correct");
    } else {
      setCorrect("Oops! Wrong");
    }
  }

  return (
    <div className="App">
      <h1>Welcome to the Doraemon Quiz</h1>
      {questions.map((dict, index) => {
        return (
          <div>
            {dict.quest}
            <button onClick={() => responseSelect(0)}>{dict.options[0]}</button>
            <button onClick={() => responseSelect(1)}>{dict.options[1]}</button>
            <button onClick={() => responseSelect(3)}>{dict.options[2]}</button>
            <button onClick={() => checkResponse(dict.ans)}>Submit</button>
            <h3>{correct}</h3>

            <h3>Current Score: {score}</h3>
          </div>
        );
      })}
    </div>
  );
}
