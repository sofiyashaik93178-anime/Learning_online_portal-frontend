import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourses from "./pages/student/MyCourses";
import CourseDetails from "./pages/student/CourseDetails";
import Lesson from "./pages/student/Lesson";
import Quiz from "./pages/student/Quiz";
import Progress from "./pages/student/Progress";
import Practice from "./pages/student/Practice";
import Certificates from "./pages/student/Certificates";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={<h3 className="text-center mt-5">404 - Page not found</h3>}
        />
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
  path="/student/progress"
  element={<Progress />}
/>


<Route
  path="/student/practice"
  element={<Practice />}
/>
<Route path="/student/certificates" element={<Certificates />} />

</Routes>
  
    </div>
  );
}

export default App;