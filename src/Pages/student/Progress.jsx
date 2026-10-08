import React from "react";
import { Link } from "react-router-dom";
import "./Progress.css";

const Progress = () => {
  const courses = [
    {
      id: 1,
      title: "Java Programming",
      progress: 75,
      completed: 15,
      total: 20,
      quizzes: 3,
      averageScore: 85,
    },
    {
      id: 2,
      title: "React.js Development",
      progress: 45,
      completed: 9,
      total: 20,
      quizzes: 2,
      averageScore: 78,
    },
    {
      id: 3,
      title: "Python Programming",
      progress: 90,
      completed: 18,
      total: 20,
      quizzes: 4,
      averageScore: 92,
    },
  ];

  return (
    <div className="progress-page">

      {/* Header */}

      <header className="progress-header">

        <div>
          <h1>My Progress</h1>
          <p>
            Track your learning progress and performance.
          </p>
        </div>

        <Link
          to="/student/dashboard"
          className="progress-dashboard-btn"
        >
          ← Dashboard
        </Link>

      </header>

      {/* Overall Statistics */}

      <section className="overall-stats">

        <div className="overall-card">
          <div className="overall-icon">📚</div>
          <div>
            <h2>3</h2>
            <p>Enrolled Courses</p>
          </div>
        </div>

        <div className="overall-card">
          <div className="overall-icon">✅</div>
          <div>
            <h2>42</h2>
            <p>Lessons Completed</p>
          </div>
        </div>

        <div className="overall-card">
          <div className="overall-icon">📝</div>
          <div>
            <h2>9</h2>
            <p>Quizzes Completed</p>
          </div>
        </div>

        <div className="overall-card">
          <div className="overall-icon">⭐</div>
          <div>
            <h2>85%</h2>
            <p>Average Quiz Score</p>
          </div>
        </div>

      </section>

      {/* Overall Progress */}

      <section className="overall-progress-card">

        <div className="progress-card-header">
          <div>
            <h2>Overall Learning Progress</h2>
            <p>
              Your average progress across all enrolled courses.
            </p>
          </div>

          <strong>70%</strong>
        </div>

        <div className="overall-progress-bar">
          <div style={{ width: "70%" }}></div>
        </div>

        <div className="progress-summary">
          <span>42 lessons completed</span>
          <span>18 lessons remaining</span>
        </div>

      </section>

      {/* Course Progress */}

      <section className="course-progress-section">

        <div className="section-heading">
          <h2>Course Progress</h2>
          <p>
            Detailed progress for each enrolled course.
          </p>
        </div>

        <div className="course-progress-list">

          {courses.map((course) => (

            <div
              className="course-progress-item"
              key={course.id}
            >

              <div className="course-progress-top">

                <div>
                  <h3>{course.title}</h3>

                  <p>
                    {course.completed} of {course.total} lessons completed
                  </p>
                </div>

                <strong>
                  {course.progress}%
                </strong>

              </div>

              <div className="course-progress-bar">

                <div
                  style={{
                    width: `${course.progress}%`,
                  }}
                ></div>

              </div>

              <div className="course-progress-details">

                <span>
                  📚 {course.completed} Lessons
                </span>

                <span>
                  📝 {course.quizzes} Quizzes
                </span>

                <span>
                  ⭐ {course.averageScore}% Avg. Score
                </span>

                <Link
                  to={`/student/course/${course.id}`}
                >
                  View Course →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Recent Activity */}

      <section className="activity-section">

        <div className="section-heading">
          <h2>Recent Learning Activity</h2>
          <p>
            Your latest learning activities.
          </p>
        </div>

        <div className="activity-card">

          <div className="activity-item">

            <div className="activity-icon completed-icon">
              ✓
            </div>

            <div>
              <h4>Completed "Operators in Java"</h4>
              <p>Java Programming • 2 hours ago</p>
            </div>

          </div>

          <div className="activity-item">

            <div className="activity-icon quiz-icon">
              📝
            </div>

            <div>
              <h4>Completed Java Basics Quiz</h4>
              <p>Score: 85% • Yesterday</p>
            </div>

          </div>

          <div className="activity-item">

            <div className="activity-icon lesson-icon">
              ▶
            </div>

            <div>
              <h4>Started React Components</h4>
              <p>React.js Development • 2 days ago</p>
            </div>

          </div>

          <div className="activity-item">

            <div className="activity-icon certificate-icon">
              🎓
            </div>

            <div>
              <h4>Earned Python Programming Certificate</h4>
              <p>Python Programming • 5 days ago</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Progress;