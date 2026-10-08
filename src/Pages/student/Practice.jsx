import React from "react";
import { Link } from "react-router-dom";
import "./Practice.css";

const Practice = () => {
  const practiceQuizzes = [
    {
      id: 1,
      title: "Java Basics Quiz",
      course: "Java Programming",
      score: 45,
      requiredScore: 60,
      questions: 10,
      attempts: 2,
      difficulty: "Beginner",
    },
    {
      id: 2,
      title: "React Fundamentals Quiz",
      course: "React.js Development",
      score: 55,
      requiredScore: 60,
      questions: 10,
      attempts: 1,
      difficulty: "Intermediate",
    },
  ];

  return (
    <div className="practice-page">

      {/* Header */}

      <header className="practice-header">

        <div>
          <h1>Practice & Retry</h1>
          <p>
            Improve your scores by practicing quizzes again.
          </p>
        </div>

        <Link
          to="/student/dashboard"
          className="practice-dashboard-btn"
        >
          ← Dashboard
        </Link>

      </header>

      {/* Info */}

      <div className="practice-info">

        <div className="practice-info-icon">
          🔄
        </div>

        <div>
          <h3>Keep Learning!</h3>
          <p>
            These quizzes need more practice before you can
            continue to the next learning section.
          </p>
        </div>

      </div>

      {/* Practice Quizzes */}

      <section className="practice-section">

        <div className="section-heading">
          <h2>Quizzes to Practice</h2>
          <p>
            Retake these quizzes and improve your performance.
          </p>
        </div>

        <div className="practice-list">

          {practiceQuizzes.map((quiz) => (

            <div
              className="practice-card"
              key={quiz.id}
            >

              {/* Quiz Icon */}

              <div className="practice-quiz-icon">
                📝
              </div>

              {/* Quiz Details */}

              <div className="practice-content">

                <div className="practice-title-row">

                  <div>
                    <span className="practice-course">
                      {quiz.course}
                    </span>

                    <h2>{quiz.title}</h2>
                  </div>

                  <span className="practice-status">
                    Needs Practice
                  </span>

                </div>

                <div className="practice-details">

                  <span>
                    ❓ {quiz.questions} Questions
                  </span>

                  <span>
                    📊 Required: {quiz.requiredScore}%
                  </span>

                  <span>
                    🔄 Attempts: {quiz.attempts}
                  </span>

                  <span>
                    📚 {quiz.difficulty}
                  </span>

                </div>

                {/* Score */}

                <div className="score-section">

                  <div className="score-header">
                    <span>Last Score</span>
                    <strong>
                      {quiz.score}%
                    </strong>
                  </div>

                  <div className="score-bar">

                    <div
                      style={{
                        width: `${quiz.score}%`,
                      }}
                    ></div>

                  </div>

                  <p>
                    You need{" "}
                    <strong>
                      {quiz.requiredScore - quiz.score}%
                    </strong>{" "}
                    more to pass.
                  </p>

                </div>

                {/* Button */}

                <Link
                  to={`/student/quiz/${quiz.id}`}
                  className="retry-quiz-btn"
                >
                  🔄 Retry Quiz
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Practice Tips */}

      <section className="practice-tips">

        <h2>💡 Practice Tips</h2>

        <div className="tips-grid">

          <div className="tip-card">
            <span>📖</span>
            <h3>Review Lessons</h3>
            <p>
              Review the related lessons before attempting
              the quiz again.
            </p>
          </div>

          <div className="tip-card">
            <span>✍️</span>
            <h3>Take Notes</h3>
            <p>
              Write down important concepts that you found
              difficult.
            </p>
          </div>

          <div className="tip-card">
            <span>🔄</span>
            <h3>Try Again</h3>
            <p>
              Practice regularly and retry the quiz to
              improve your score.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Practice;