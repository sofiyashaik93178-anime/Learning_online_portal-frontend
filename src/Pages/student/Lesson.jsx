import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Lesson.css";

const Lesson = () => {
  const { id } = useParams();

  const [completed, setCompleted] = useState(false);

  const lesson = {
    id: id,
    courseTitle: "Java Programming",
    moduleTitle: "Module 1: Java Basics",
    lessonNumber: 4,
    title: "Control Statements in Java",

    description:
      "Learn how control statements are used to control the flow of execution in a Java program.",

    content: `
Control statements allow a program to make decisions and repeat
certain operations based on conditions.

The main types of control statements in Java are:

1. Conditional statements
2. Looping statements
3. Jump statements

Conditional statements include if, if-else and switch.

Looping statements include for, while and do-while.

Jump statements include break and continue.
`,

    duration: "30 minutes",
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div className="lesson-page">

      {/* Header */}

      <header className="lesson-header">

        <Link
          to="/student/courses"
          className="lesson-logo"
        >
          LearnHub
        </Link>

        <Link
          to={`/student/course/1`}
          className="back-course"
        >
          ← Back to Course
        </Link>

      </header>

      {/* Main Layout */}

      <div className="lesson-layout">

        {/* Sidebar */}

        <aside className="lesson-sidebar">

          <h3>Java Programming</h3>

          <p className="module-name">
            Module 1: Java Basics
          </p>

          <div className="lesson-list">

            <Link
              to="/student/lesson/1"
              className="lesson-nav completed"
            >
              <span>✓</span>
              Introduction to Java
            </Link>

            <Link
              to="/student/lesson/2"
              className="lesson-nav completed"
            >
              <span>✓</span>
              Variables and Data Types
            </Link>

            <Link
              to="/student/lesson/3"
              className="lesson-nav completed"
            >
              <span>✓</span>
              Operators in Java
            </Link>

            <Link
              to="/student/lesson/4"
              className="lesson-nav active"
            >
              <span>▶</span>
              Control Statements
            </Link>

            <div className="lesson-nav locked">
              <span>🔒</span>
              Next Lesson
            </div>

          </div>

        </aside>

        {/* Content */}

        <main className="lesson-content">

          {/* Breadcrumb */}

          <div className="breadcrumb">
            Java Programming / Module 1 / Lesson {lesson.lessonNumber}
          </div>

          {/* Title */}

          <div className="lesson-title-section">

            <span className="lesson-label">
              Lesson {lesson.lessonNumber}
            </span>

            <h1>{lesson.title}</h1>

            <p>
              {lesson.description}
            </p>

            <div className="lesson-meta">
              ⏱ {lesson.duration}
            </div>

          </div>

          {/* Video / Material */}

          <section className="lesson-video">

            <div className="video-placeholder">

              <div className="play-button">
                ▶
              </div>

              <h3>Lesson Video</h3>

              <p>
                Video learning material will appear here.
              </p>

            </div>

          </section>

          {/* Lesson Content */}

          <section className="lesson-material">

            <h2>Lesson Content</h2>

            <p>
              {lesson.content}
            </p>

            <h3>Example</h3>

            <div className="code-block">

              <pre>
{`public class Main {

    public static void main(String[] args) {

        int age = 20;

        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }

    }
}`}
              </pre>

            </div>

          </section>

          {/* Complete */}

          <section className="complete-section">

            {completed ? (

              <div className="completed-message">

                <span>✓</span>

                <div>
                  <h3>Lesson Completed!</h3>
                  <p>
                    Your progress has been updated.
                  </p>
                </div>

              </div>

            ) : (

              <button
                className="complete-btn"
                onClick={handleComplete}
              >
                ✓ Mark Lesson as Complete
              </button>

            )}

          </section>

          {/* Navigation */}

          <div className="lesson-navigation">

            <Link
              to="/student/lesson/3"
              className="previous-btn"
            >
              ← Previous Lesson
            </Link>

            {completed ? (

              <Link
                to="/student/lesson/5"
                className="next-btn"
              >
                Next Lesson →
              </Link>

            ) : (

              <button
                className="next-disabled"
                disabled
              >
                Complete Lesson First →
              </button>

            )}

          </div>

        </main>

      </div>

    </div>
  );
};

export default Lesson;