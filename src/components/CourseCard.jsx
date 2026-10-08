import { useState } from 'react';

function CourseCard(props) {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="card p-3 h-100">
      <h5>{props.title}</h5>
      <p>{props.description}</p>

      {enrolled ? (
        <button className="btn btn-success" disabled>Enrolled ✓</button>
      ) : (
        <button className="btn btn-primary" onClick={() => setEnrolled(true)}>
          Enroll
        </button>
      )}
    </div>
  );
}

export default CourseCard;