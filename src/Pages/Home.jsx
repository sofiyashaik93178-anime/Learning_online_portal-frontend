import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="home-hero-content">

          <span className="home-badge">
            🚀 Smart Learning Platform
          </span>

          <h1>
            Learn Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Learn programming, databases and modern development
            skills through structured courses, practice activities,
            quizzes and progress tracking.
          </p>

          <div className="home-hero-buttons">

            <Link
              to="/register"
              className="home-primary-btn"
            >
              Start Learning →
            </Link>

            <a
              href="#courses"
              className="home-secondary-btn"
            >
              Explore Courses
            </a>

          </div>

          <div className="home-trust">

            <div>
              <strong>10+</strong>
              <span>Learning Topics</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Learning Access</span>
            </div>

          </div>

        </div>

        {/* Hero Learning Card */}

        <div className="home-hero-visual">

          <div className="learning-dashboard-card">

            <div className="learning-card-header">
              <div>
                <span>My Learning</span>
                <h3>Continue Learning 📚</h3>
              </div>

              <div className="learning-card-icon">
                🎓
              </div>
            </div>

            {/* Java */}

            <div className="learning-item">

              <div className="learning-item-icon java-icon">
                ☕
              </div>

              <div className="learning-item-content">
                <h4>Java Fundamentals</h4>

                <div className="learning-bar">
                  <span style={{ width: "72%" }}></span>
                </div>

                <small>72% completed</small>
              </div>

            </div>

            {/* React */}

            <div className="learning-item">

              <div className="learning-item-icon react-icon">
                ⚛
              </div>

              <div className="learning-item-content">
                <h4>React for Beginners</h4>

                <div className="learning-bar">
                  <span style={{ width: "58%" }}></span>
                </div>

                <small>58% completed</small>
              </div>

            </div>

            {/* MySQL */}

            <div className="learning-item">

              <div className="learning-item-icon mysql-icon">
                🗄️
              </div>

              <div className="learning-item-content">
                <h4>MySQL Database</h4>

                <div className="learning-bar">
                  <span style={{ width: "43%" }}></span>
                </div>

                <small>43% completed</small>
              </div>

            </div>

            <div className="learning-footer">
              <span>🔥 Keep learning!</span>
              <strong>12 day streak</strong>
            </div>

          </div>

          {/* Floating card */}

          <div className="home-floating-card floating-top">

            <span className="floating-icon">🏆</span>

            <div>
              <strong>Certificate Earned</strong>
              <small>Java Fundamentals</small>
            </div>

          </div>

          <div className="home-floating-card floating-bottom">

            <span className="floating-icon">🎯</span>

            <div>
              <strong>Quiz Score</strong>
              <small>92% Excellent!</small>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="home-features">

        <div className="home-section-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Everything you need to
            <br />
            learn better
          </h2>

          <p>
            Our platform helps students learn, practice and
            track their progress in one place.
          </p>

        </div>


        <div className="home-feature-grid">

          <div className="home-feature-card">

            <div className="feature-icon purple">
              📚
            </div>

            <h3>Structured Courses</h3>

            <p>
              Learn step-by-step through organized modules,
              lessons and learning materials.
            </p>

          </div>


          <div className="home-feature-card">

            <div className="feature-icon blue">
              🎯
            </div>

            <h3>Track Your Progress</h3>

            <p>
              Easily see your completed lessons, course
              progress and learning history.
            </p>

          </div>


          <div className="home-feature-card">

            <div className="feature-icon green">
              📝
            </div>

            <h3>Quiz & Practice</h3>

            <p>
              Test your knowledge with quizzes and improve
              your skills through retry activities.
            </p>

          </div>


          <div className="home-feature-card">

            <div className="feature-icon orange">
              🏆
            </div>

            <h3>Earn Certificates</h3>

            <p>
              Complete your courses and earn certificates
              that recognize your learning achievement.
            </p>

          </div>


          <div className="home-feature-card">

            <div className="feature-icon pink">
              📈
            </div>

            <h3>Learning History</h3>

            <p>
              Keep track of your previous learning activities,
              quiz attempts and completed lessons.
            </p>

          </div>


          <div className="home-feature-card">

            <div className="feature-icon indigo">
              💡
            </div>

            <h3>Learn at Your Pace</h3>

            <p>
              Continue your learning whenever you are ready
              and focus on the topics you need.
            </p>

          </div>

        </div>

      </section>


      {/* ================= COURSES ================= */}

      <section
        className="home-courses"
        id="courses"
      >

        <div className="home-section-heading">

          <span>POPULAR COURSES</span>

          <h2>
            Start learning today
          </h2>

          <p>
            Choose a course and start building your technical
            skills step by step.
          </p>

        </div>


        <div className="home-course-grid">

          {/* Java */}

          <div className="home-course-card">

            <div className="course-image java-course">
              ☕
            </div>

            <div className="course-content">

              <span className="course-tag">
                PROGRAMMING
              </span>

              <h3>Java Basics</h3>

              <p>
                Learn Java programming from scratch and
                understand the fundamentals of OOP.
              </p>

              <div className="course-info">
                <span>📚 12 Lessons</span>
                <span>⭐ Beginner</span>
              </div>

              <Link
                to="/register"
                className="course-btn"
              >
                Start Learning →
              </Link>

            </div>

          </div>


          {/* React */}

          <div className="home-course-card">

            <div className="course-image react-course">
              ⚛
            </div>

            <div className="course-content">

              <span className="course-tag blue-tag">
                WEB DEVELOPMENT
              </span>

              <h3>React for Beginners</h3>

              <p>
                Learn how to build modern and interactive
                web applications using React.
              </p>

              <div className="course-info">
                <span>📚 10 Lessons</span>
                <span>⭐ Beginner</span>
              </div>

              <Link
                to="/register"
                className="course-btn"
              >
                Start Learning →
              </Link>

            </div>

          </div>


          {/* MySQL */}

          <div className="home-course-card">

            <div className="course-image mysql-course">
              🗄️
            </div>

            <div className="course-content">

              <span className="course-tag green-tag">
                DATABASE
              </span>

              <h3>MySQL Database</h3>

              <p>
                Learn SQL, database design, queries and
                relational database concepts.
              </p>

              <div className="course-info">
                <span>📚 14 Lessons</span>
                <span>⭐ Beginner</span>
              </div>

              <Link
                to="/register"
                className="course-btn"
              >
                Start Learning →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="home-how">

        <div className="home-section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Your learning journey
          </h2>

          <p>
            Start learning in four simple steps.
          </p>

        </div>


        <div className="home-steps">

          <div className="home-step">

            <div className="step-number">
              01
            </div>

            <h3>Create Account</h3>

            <p>
              Register as a student and create your learning profile.
            </p>

          </div>


          <div className="home-step">

            <div className="step-number">
              02
            </div>

            <h3>Choose a Course</h3>

            <p>
              Browse available courses and enroll in the topics you like.
            </p>

          </div>


          <div className="home-step">

            <div className="step-number">
              03
            </div>

            <h3>Learn & Practice</h3>

            <p>
              Complete lessons, take quizzes and practice difficult topics.
            </p>

          </div>


          <div className="home-step">

            <div className="step-number">
              04
            </div>

            <h3>Earn Certificate</h3>

            <p>
              Complete your course and earn your learning certificate.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div className="home-cta-box">

          <div>

            <span>READY TO START?</span>

            <h2>
              Start your learning journey today 🚀
            </h2>

            <p>
              Learn new skills, track your progress and
              achieve your learning goals.
            </p>

          </div>

          <Link
            to="/register"
            className="home-cta-btn"
          >
            Create Free Account →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-grid">

          <div className="footer-about">

            <h2>
              Online <span>Learning Portal</span>
            </h2>

            <p>
              A smart learning and progress management platform
              designed to help students learn, practice and grow.
            </p>

          </div>


          <div className="footer-column">

            <h3>Platform</h3>

            <Link to="/">
              Home
            </Link>

            <a href="#courses">
              Courses
            </a>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </div>


          <div className="footer-column">

            <h3>Learning</h3>

            <a href="#courses">
              Java
            </a>

            <a href="#courses">
              React
            </a>

            <a href="#courses">
              MySQL
            </a>

          </div>


          <div className="footer-column">

            <h3>Support</h3>

            <a href="#features">
              Features
            </a>

            <a href="#how">
              How It Works
            </a>

            <a href="#courses">
              Courses
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Online Learning Portal
          </span>

          <span>
            Learn • Practice • Grow
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;