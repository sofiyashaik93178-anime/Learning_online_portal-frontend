import CourseCard from '../components/CourseCard';

function Home() {
  const courses = [
    { id: 1, title: 'Java Basics', description: 'Learn Java from scratch' },
    { id: 2, title: 'React for Beginners', description: 'Build web pages with React' },
    { id: 3, title: 'MySQL Database', description: 'Learn SQL and database design' },
  ];

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Available Courses</h3>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-3" key={course.id}>
            <CourseCard title={course.title} description={course.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;