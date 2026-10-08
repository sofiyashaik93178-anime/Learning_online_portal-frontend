import React from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const courses = [
    {
      id: 1,
      title: "Java Programming",
      instructor: "John Smith",
      progress: 75,
      lessons: 20,
      completed: 15,
    },
    {
      id: 2,
      title: "React.js Development",
      instructor: "Sarah Johnson",
      progress: 45,
      lessons: 20,
      completed: 9,
    },
    {
      id: 3,
      title: "Python Programming",
      instructor: "David Williams",
      progress: 90,
      lessons: 20,
      completed: 18,
    },
  ];

  return (
    <div className="student-dashboard">

      {/* Sidebar */}
      <aside className="student-sidebar">
        <div className="sidebar-logo">
          <h2>LearnHub</h2>
        </div>

        <nav>
          <Link to="/student/dashboard" className="sidebar-link active">
            🏠 Dashboard
          </Link>

          <Link to="/student/courses" className="sidebar-link">
            📚 My Courses
          </Link>

          <Link to="/student/progress" className="sidebar-link">
            📊 Progress
          </Link>

          <Link to="/student/quizzes" className="sidebar-link">
            📝 Quiz Results
          </Link>

          <Link to="/student/practice" className="sidebar-link">
            🔄 Practice & Retry
          </Link>

          <Link to="/student/history" className="sidebar-link">
            📜 Learning History
          </Link>

          <Link to="/student/certificates" className="sidebar-link">
            🎓 Certificates
          </Link>
        </nav>

        <button className="logout-btn">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="student-main">

        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Welcome back, Student! 👋</h1>
            <p>Continue your learning journey.</p>
          </div>

          <div className="profile-circle">
            S
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-container">

          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div>
              <h3>3</h3>
              <p>Enrolled Courses</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div>
              <h3>42</h3>
              <p>Completed Lessons</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div>
              <h3>8</h3>
              <p>Quizzes Completed</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div>
              <h3>1</h3>
              <p>Certificates</p>
            </div>
          </div>

        </section>

        {/* Continue Learning */}
        <section className="dashboard-section">

          <div className="section-header">
            <h2>Continue Learning</h2>
            <Link to="/student/courses">View All</Link>
          </div>

          <div className="course-grid">

            {courses.map((course) => (
              <div className="course-card" key={course.id}>

                <div className="course-image">
                  📖
                </div>

                <div className="course-content">

                  <h3>{course.title}</h3>

                  <p className="instructor">
                    Instructor: {course.instructor}
                  </p>

                  <div className="progress-info">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  <p className="lesson-count">
                    {course.completed} / {course.lessons} lessons completed
                  </p>

                  <Link
                    to={`/student/course/${course.id}`}
                    className="continue-btn"
                  >
                    Continue Learning →
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Bottom Sections */}
        <section className="bottom-grid">

          {/* Recent Quiz */}
          <div className="dashboard-box">

            <div className="box-header">
              <h2>Recent Quiz Results</h2>
              <Link to="/student/quizzes">View All</Link>
            </div>

            <div className="quiz-item">
              <div>
                <h4>Java Basics Quiz</h4>
                <p>Completed yesterday</p>
              </div>

              <span className="score success">
                85%
              </span>
            </div>

            <div className="quiz-item">
              <div>
                <h4>React Fundamentals</h4>
                <p>Completed 3 days ago</p>
              </div>

              <span className="score success">
                90%
              </span>
            </div>

            <div className="quiz-item">
              <div>
                <h4>Python Basics</h4>
                <p>Completed 5 days ago</p>
              </div>

              <span className="score warning">
                65%
              </span>
            </div>

          </div>

          {/* Certificates */}
          <div className="dashboard-box">

            <div className="box-header">
              <h2>Certificates</h2>
              <Link to="/student/certificates">
                View All
              </Link>
            </div>

            <div className="certificate-card">

              <div className="certificate-icon">
                🎓
              </div>

              <div>
                <h3>Python Programming</h3>
                <p>Completed on September 28, 2026</p>
                <span>
                  Certificate ID: OLP-2026-001
                </span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default StudentDashboard;