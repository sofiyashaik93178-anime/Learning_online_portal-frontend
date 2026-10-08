import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const { id } = useParams();

  const questions = [
    {
      id: 1,
      question: "Which keyword is used to create a class in Java?",
      options: ["function", "class", "object", "create"],
      answer: "class",
    },
    {
      id: 2,
      question: "Which method is the starting point of a Java program?",
      options: ["start()", "run()", "main()", "execute()"],
      answer: "main()",
    },
    {
      id: 3,
      question: "Which data type is used to store whole numbers?",
      options: ["float", "boolean", "int", "char"],
      answer: "int",
    },
    {
      id: 4,
      question: "Which symbol is used for a single-line comment in Java?",
      options: ["<!-- -->", "//", "##", "**"],
      answer: "//",
    },
    {
      id: 5,
      question: "Which keyword is used to inherit a class?",
      options: ["implements", "extends", "inherits", "superclass"],
      answer: "extends",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    setAnswers({
      ...answers,
      [question.id]: answer,
    });
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;

      setCurrentQuestion(nextQuestion);

      setSelectedAnswer(
        answers[questions[nextQuestion].id] || ""
      );
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let finalScore = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        finalScore++;
      }
    });

    setScore(finalScore);
    setSubmitted(true);
  };

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  if (submitted) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    const passed = percentage >= 60;

    return (
      <div className="quiz-result-page">

        <div className="quiz-result-card">

          <div className="result-icon">
            {passed ? "🎉" : "📚"}
          </div>

          <h1>
            {passed
              ? "Congratulations!"
              : "Keep Practicing!"}
          </h1>

          <p className="result-message">
            {passed
              ? "You have successfully completed the quiz."
              : "You did not reach the required score. Try again!"}
          </p>

          <div className="score-circle">

            <strong>{percentage}%</strong>

            <span>
              {score} / {questions.length}
            </span>

          </div>

          <p className="pass-status">
            {passed
              ? "✓ Quiz Passed"
              : "✗ Quiz Not Passed"}
          </p>

          <div className="result-buttons">

            {!passed && (
              <button
                className="retry-btn"
                onClick={retryQuiz}
              >
                🔄 Retry Quiz
              </button>
            )}

            {passed && (
              <Link
                to={`/student/course/1`}
                className="continue-btn"
              >
                Continue Learning →
              </Link>
            )}

            <Link
              to="/student/dashboard"
              className="dashboard-btn"
            >
              Dashboard
            </Link>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="quiz-page">

      {/* Header */}

      <header className="quiz-header">

        <Link
          to="/student/dashboard"
          className="quiz-logo"
        >
          LearnHub
        </Link>

        <Link
          to="/student/course/1"
          className="back-course"
        >
          ← Back to Course
        </Link>

      </header>

      {/* Quiz Container */}

      <main className="quiz-container">

        {/* Quiz Header */}

        <div className="quiz-title">

          <div>

            <span className="quiz-label">
              Java Programming
            </span>

            <h1>Java Basics Quiz</h1>

            <p>
              Test your understanding of the lessons.
            </p>

          </div>

          <div className="quiz-info">
            <span>
              Question {currentQuestion + 1}
              {" "}
              of
              {" "}
              {questions.length}
            </span>
          </div>

        </div>

        {/* Progress */}

        <div className="quiz-progress">

          <div
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          ></div>

        </div>

        {/* Question */}

        <div className="question-card">

          <div className="question-number">
            Question {currentQuestion + 1}
          </div>

          <h2>{question.question}</h2>

          <div className="options-container">

            {question.options.map((option) => (

              <button
                key={option}
                className={`answer-option ${
                  selectedAnswer === option
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  handleAnswer(option)
                }
              >

                <span className="option-letter">
                  {String.fromCharCode(
                    65 +
                      question.options.indexOf(
                        option
                      )
                  )}
                </span>

                <span>{option}</span>

                {selectedAnswer === option && (
                  <span className="selected-check">
                    ✓
                  </span>
                )}

              </button>

            ))}

          </div>

        </div>

        {/* Navigation */}

        <div className="quiz-navigation">

          <button
            className="previous-question"
            disabled={currentQuestion === 0}
            onClick={() => {

              const previous =
                currentQuestion - 1;

              setCurrentQuestion(previous);

              setSelectedAnswer(
                answers[
                  questions[previous].id
                ] || ""
              );

            }}
          >
            ← Previous
          </button>

          <button
            className="next-question"
            onClick={handleNext}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Submit Quiz"
              : "Next Question →"}
          </button>

        </div>

      </main>

    </div>
  );
};

export default Quiz;