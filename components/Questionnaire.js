// components/Questionnaire.js
import React, { useState, useEffect } from "react";

const Questionnaire = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [suggestedTopology, setSuggestedTopology] = useState("");

  const handleAnswer = (questionId, answer, points) => {
    setAnswers({ ...answers, [questionId]: answer });
    setTotalPoints(totalPoints + points);
  };

  useEffect(() => {
    if (totalPoints < 27) {
      setSuggestedTopology("Star Topology");
    } else if (totalPoints < 39) {
      setSuggestedTopology("Mesh Topology");
    } else if (totalPoints < 51) {
      setSuggestedTopology("Ring Topology");
    } else {
      setSuggestedTopology("Bus Topology");
    }
  }, [totalPoints]);

  return (
    <div className="max-w-lg mx-auto py-6 px-4">
      <ol className="list-decimal">
        {questions.map((question) => (
          <li key={question.id} className="mb-6">
            <h2 className="text-lg font-semibold">{question.text}</h2>
            <ul className="mt-4 mb-10">
              {question.options.map((option) => (
                <li key={option.id} className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={answers[question.id] === option.id}
                      onChange={() =>
                        handleAnswer(question.id, option.id, option.points)
                      }
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{option.text}</span>
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
        onClick={() => alert(`Suggested Topology: ${suggestedTopology}`)}
      >
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
