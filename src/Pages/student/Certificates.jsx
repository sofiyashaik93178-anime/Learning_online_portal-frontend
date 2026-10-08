import React from "react";
import "./Certificates.css";

const certificates = [
  {
    id: 1,
    course: "Java Full Stack Development",
    certificateId: "OLP-JAVA-001",
    issueDate: "08 October 2026",
    instructor: "Online Learning Portal",
  },
  {
    id: 2,
    course: "React JS Fundamentals",
    certificateId: "OLP-REACT-002",
    issueDate: "25 September 2026",
    instructor: "Online Learning Portal",
  },
];

function Certificates() {
  return (
    <div className="certificates-page">
      <div className="certificates-header">
        <div>
          <h1>My Certificates 🏆</h1>
          <p>View and manage your completed course certificates.</p>
        </div>

        <div className="certificate-count">
          <span>{certificates.length}</span>
          <small>Certificates Earned</small>
        </div>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            
            <div className="certificate-icon">
              🏆
            </div>

            <div className="certificate-content">
              <h2>{certificate.course}</h2>

              <p className="certificate-success">
                ✓ Course Completed
              </p>

              <div className="certificate-info">
                <div>
                  <span>Certificate ID</span>
                  <strong>{certificate.certificateId}</strong>
                </div>

                <div>
                  <span>Issue Date</span>
                  <strong>{certificate.issueDate}</strong>
                </div>

                <div>
                  <span>Issued By</span>
                  <strong>{certificate.instructor}</strong>
                </div>
              </div>

              <div className="certificate-actions">
                <button className="view-btn">
                  View Certificate
                </button>

                <button className="download-btn">
                  Download
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {certificates.length === 0 && (
        <div className="no-certificates">
          <h2>No Certificates Yet 📚</h2>
          <p>
            Complete a course to earn your certificate.
          </p>
        </div>
      )}
    </div>
  );
}

export default Certificates;