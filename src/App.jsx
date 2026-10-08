
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import StudentDashboard from "./Pages/student/StudentDashboard";
import MyCourses from "./Pages/student/MyCourses";
import CourseDetails from "./Pages/student/CourseDetails";
import Lesson from "./Pages/student/Lesson";
import Quiz from "./Pages/student/Quiz";
import Progress from "./Pages/student/Progress";
import Practice from "./Pages/student/Practice";
import Certificates from "./Pages/student/Certificates";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Pages */}
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student/courses"
          element={<MyCourses />}
        />

        <Route
          path="/student/course/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/student/lesson/:id"
          element={<Lesson />}
        />

        <Route
          path="/student/quiz/:id"
          element={<Quiz />}
        />

        <Route
          path="/student/progress"
          element={<Progress />}
        />

        <Route
          path="/student/practice"
          element={<Practice />}
        />

        <Route
          path="/student/certificates"
          element={<Certificates />}
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <h3 className="text-center mt-5">
              404 - Page not found
            </h3>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
