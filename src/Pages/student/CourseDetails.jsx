import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();

  const [openModule, setOpenModule] = useState(1);

  const course = {
    id: id,
    title: "Java Programming",
    instructor: "John Smith",
    category: "Programming",
    description:
      "Learn Java programming from the basics to object-oriented programming and advanced concepts.",
    progress: 75,
    completedLessons: 15,
    totalLessons: 20,
    modules: [
      {
        id: 1,
        title: "Module 1: Java Basics",
        lessons: [
          {
            id: 1,
            title: "Introduction to Java",
            duration: "15 min",
            completed: true,
          },
          {
            id: 2,
            title: "Variables and Data Types",
            duration: "20 min",
            completed: true,
          },
          {
            id: 3,
            title: "Operators in Java",
            duration: "25 min",
            completed: true,
          },
          {
            id: 4,
            title: "Control Statements",
            duration: "30 min",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Module 2: Object-Oriented Programming",
        lessons: [
          {
            id: 5,
            title: "Classes and Objects",
            duration: "25 min",
            completed: true,
          },
          {
            id: 6,
            title: "Inheritance",
            duration: "30 min",
            completed: false,
          },
          {
            id: 7,
            title: "Polymorphism",
            duration: "25 min",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Module 3: Advanced Java",
        lessons: [
          {
            id: 8,
            title: "Exception Handling",
            duration: "25 min",
            completed: false,
          },
          {
            id: 9,
            title: "Collections",
            duration: "35 min",
            completed: false,
          },
          {
            id: 10,
            title: "Multithreading",
            duration: "30 min",
            completed: false,
          },
        ],
      },
    ],
  };

  const toggleModule = (moduleId) => {
    setOpenModule(
      openModule === moduleId ? null : moduleId
    );
  };

  return (
    <div className="course-details-page">

      {/* Header */}
      <header className="course-details-header">

        <Link
          to="/student/courses"
          className="back-btn"
        >
          ← My Courses
        </Link>

        <Link
          to="/student/dashboard"
          className="dashboard-link"
        >
          Dashboard
        </Link>

      </header>

      {/* Course Hero */}
      <section className="course-hero">

        <div className="course-hero-content">

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p className="course-description">
            {course.description}
          </p>

          <p className="course-instructor">
            Instructor: <strong>{course.instructor}</strong>
          </p>

        </div>

        <div className="course-progress-card">

          <div className="progress-circle">
            <span>{course.progress}%</span>
          </div>

          <h3>Your Progress</h3>

          <p>
            {course.completedLessons} of{" "}
            {course.totalLessons} lessons completed
          </p>

          <Link
            to="/student/lesson/4"
            className="start-learning-btn"
          >
            Continue Learning →
          </Link>

        </div>

      </section>

      {/* Main Content */}
      <main className="course-details-main">

        {/* Learning Path */}
        <section className="learning-section">

          <div className="section-title">

            <div>
              <h2>Learning Path</h2>
              <p>
                Complete each lesson to progress through the course.
              </p>
            </div>

            <span>
              {course.completedLessons}/{course.totalLessons} completed
            </span>

          </div>

          {/* Modules */}

          <div className="modules-container">

            {course.modules.map((module) => (

              <div
                className="module-card"
                key={module.id}
              >

                {/* Module Header */}

                <button
                  className="module-header"
                  onClick={() =>
                    toggleModule(module.id)
                  }
                >

                  <div className="module-title">

                    <span className="module-number">
                      {module.id}
                    </span>

                    <div>
                      <h3>{module.title}</h3>

                      <p>
                        {module.lessons.length} lessons
                      </p>
                    </div>

                  </div>

                  <span className="module-arrow">
                    {openModule === module.id
                      ? "▲"
                      : "▼"}
                  </span>

                </button>

                {/* Lessons */}

                {openModule === module.id && (

                  <div className="lessons-list">

                    {module.lessons.map((lesson) => (

                      <div
                        className={`lesson-item ${
                          lesson.completed
                            ? "lesson-completed"
                            : ""
                        }`}
                        key={lesson.id}
                      >

                        <div className="lesson-info">

                          <div className="lesson-icon">

                            {lesson.completed
                              ? "✓"
                              : "▶"}

                          </div>

                          <div>
                            <h4>
                              {lesson.title}
                            </h4>

                            <span>
                              {lesson.duration}
                            </span>
                          </div>

                        </div>

                        {lesson.completed ? (

                          <Link
                            to={`/student/lesson/${lesson.id}`}
                            className="lesson-btn completed-btn"
                          >
                            Review
                          </Link>

                        ) : (

                          <Link
                            to={`/student/lesson/${lesson.id}`}
                            className="lesson-btn"
                          >
                            Start
                          </Link>

                        )}

                      </div>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

        </section>

        {/* Right Side */}
        <aside className="course-sidebar">

          <div className="sidebar-card">

            <h3>Course Progress</h3>

            <div className="large-progress">

              <div
                style={{
                  width: `${course.progress}%`,
                }}
              ></div>

            </div>

            <strong>
              {course.progress}% Complete
            </strong>

            <p>
              Keep learning to complete this course.
            </p>

          </div>

          <div className="sidebar-card">

            <h3>Course Information</h3>

            <div className="info-row">
              <span>📚 Lessons</span>
              <strong>{course.totalLessons}</strong>
            </div>

            <div className="info-row">
              <span>📦 Modules</span>
              <strong>{course.modules.length}</strong>
            </div>

            <div className="info-row">
              <span>📝 Quizzes</span>
              <strong>3</strong>
            </div>

            <div className="info-row">
              <span>🎓 Certificate</span>
              <strong>Yes</strong>
            </div>

          </div>

        </aside>

      </main>

    </div>
  );
};

export default CourseDetails;