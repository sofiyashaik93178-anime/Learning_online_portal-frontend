import React from "react";
import { Link } from "react-router-dom";
import "./MyCourses.css";

const MyCourses = () => {

  const courses = [
    {
      id: 1,
      title: "Java Programming",
      instructor: "John Smith",
      category: "Programming",
      progress: 75,
      completedLessons: 15,
      totalLessons: 20,
      status: "In Progress",
    },
    {
      id: 2,
      title: "React.js Development",
      instructor: "Sarah Johnson",
      category: "Web Development",
      progress: 45,
      completedLessons: 9,
      totalLessons: 20,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Python Programming",
      instructor: "David Williams",
      category: "Programming",
      progress: 90,
      completedLessons: 18,
      totalLessons: 20,
      status: "Almost Complete",
    },
  ];

  return (
    <div className="my-courses-page">

      {/* Header */}
      <div className="courses-header">

        <div>
          <h1>My Courses</h1>
          <p>
            Continue learning and track your course progress.
          </p>
        </div>

        <Link
          to="/student/dashboard"
          className="back-dashboard-btn"
        >
          ← Dashboard
        </Link>

      </div>

      {/* Course Statistics */}
      <div className="course-statistics">

        <div className="course-stat-card">
          <h2>3</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="course-stat-card">
          <h2>1</h2>
          <p>Completed Courses</p>
        </div>

        <div className="course-stat-card">
          <h2>65%</h2>
          <p>Average Progress</p>
        </div>

      </div>

      {/* Courses */}
      <div className="courses-container">

        {courses.map((course) => (

          <div
            className="my-course-card"
            key={course.id}
          >

            {/* Course Image */}
            <div className="my-course-image">
              📚
            </div>

            {/* Course Details */}
            <div className="my-course-content">

              <span className="course-category">
                {course.category}
              </span>

              <h2>{course.title}</h2>

              <p className="course-instructor">
                Instructor: {course.instructor}
              </p>

              {/* Progress */}
              <div className="course-progress-header">

                <span>Course Progress</span>

                <strong>
                  {course.progress}%
                </strong>

              </div>

              <div className="course-progress-bar">

                <div
                  className="course-progress-fill"
                  style={{
                    width: `${course.progress}%`
                  }}
                ></div>

              </div>

              <p className="lesson-progress">
                {course.completedLessons} of{" "}
                {course.totalLessons} lessons completed
              </p>

              {/* Status */}
              <div className="course-bottom">

                <span
                  className={`course-status ${
                    course.progress === 100
                      ? "completed"
                      : "in-progress"
                  }`}
                >
                  {course.status}
                </span>

                <Link
                  to={`/student/course/${course.id}`}
                  className="continue-course-btn"
                >
                  Continue →
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default MyCourses;