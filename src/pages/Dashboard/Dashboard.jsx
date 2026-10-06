import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuth();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const loadApplications = () => {
      const savedApplications = JSON.parse(
        localStorage.getItem("appliedJobs") || "[]"
      );

      setApplications(savedApplications);
    };

    loadApplications();

    window.addEventListener("storage", loadApplications);

    return () => {
      window.removeEventListener("storage", loadApplications);
    };
  }, []);

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) =>
      !application.status ||
      application.status === "Under Review"
  ).length;

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  );

  const selected = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  const stats = [
    ["JOB", "Jobs Applied", totalApplications],
    ["REV", "Under Review", underReview],
    ["INT", "Interviews", interviews.length],
    ["SEL", "Selected", selected],
  ];

  return (
    <div className="page-container">

      <section className="welcome-banner">
        <div className="welcome-content">
          <span>STUDENT PLACEMENT DASHBOARD</span>

          <h2>
            Welcome back, {user?.name || "Student"}!
          </h2>

          <p>
            Track applications, interviews, placement opportunities
            and your career progress from one place.
          </p>
        </div>

        <div className="welcome-label">
          PLACEMENT
        </div>
      </section>

      <div className="stats-grid">
        {stats.map(([icon, title, value]) => (
          <div className="stat-box" key={title}>
            <div className="stat-icon">
              {icon}
            </div>

            <div>
              <span>{title}</span>
              <h3>{value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-two-column">

        <section className="content-card">
          <div className="section-heading">
            <div>
              <h2>Upcoming Interviews</h2>

              <p className="muted">
                Your scheduled placement interviews
              </p>
            </div>

            <span className="section-count">
              {interviews.length}
            </span>
          </div>

          {interviews.length === 0 ? (
            <div className="dashboard-empty">
              <strong>No interviews scheduled</strong>

              <p>
                Applications marked as Interview Scheduled
                will appear here.
              </p>
            </div>
          ) : (
            interviews.map((application) => (
              <div
                className="dashboard-list-item"
                key={application.id}
              >
                <div className="company-circle">
                  {application.company.charAt(0)}
                </div>

                <div className="interview-summary">
                  <strong>
                    {application.company}
                  </strong>

                  <span>
                    {application.role}
                  </span>

                  <small>
                    {application.location} - {application.package}
                  </small>
                </div>

                <span className="success-badge">
                  Scheduled
                </span>
              </div>
            ))
          )}
        </section>

        <section className="content-card">

          <div className="section-heading">
            <div>
              <h2>Application Status</h2>

              <p className="muted">
                Current application overview
              </p>
            </div>
          </div>

          <div className="status-line">
            <span>Under Review</span>
            <strong>{underReview}</strong>
          </div>

          <div className="progress">
            <div
              style={{
                width:
                  totalApplications > 0
                    ? `${(underReview / totalApplications) * 100}%`
                    : "0%",
              }}
            ></div>
          </div>

          <div className="status-line">
            <span>Interviews</span>
            <strong>{interviews.length}</strong>
          </div>

          <div className="progress">
            <div
              style={{
                width:
                  totalApplications > 0
                    ? `${(interviews.length / totalApplications) * 100}%`
                    : "0%",
              }}
            ></div>
          </div>

          <div className="status-line">
            <span>Selected</span>
            <strong>{selected}</strong>
          </div>

          <div className="progress">
            <div
              style={{
                width:
                  totalApplications > 0
                    ? `${(selected / totalApplications) * 100}%`
                    : "0%",
              }}
            ></div>
          </div>

        </section>
      </div>

      <section className="content-card">

        <div className="section-heading">
          <div>
            <h2>Upcoming Application Deadlines</h2>

            <p className="muted">
              Important company application deadlines
            </p>
          </div>

          <span className="deadline-label">
            OCTOBER 2026
          </span>
        </div>

        <div className="deadline-grid">

          <div className="deadline">
            <div className="deadline-date">
              <strong>08</strong>
              <span>OCT</span>
            </div>

            <div className="deadline-info">
              <b>Wipro</b>

              <p>
                Graduate Engineer Trainee
              </p>
            </div>

            <span className="days-left">
              2 Days Left
            </span>
          </div>

          <div className="deadline">
            <div className="deadline-date">
              <strong>15</strong>
              <span>OCT</span>
            </div>

            <div className="deadline-info">
              <b>Accenture</b>

              <p>
                Associate Software Engineer
              </p>
            </div>

            <span className="days-left">
              9 Days Left
            </span>
          </div>

          <div className="deadline">
            <div className="deadline-date">
              <strong>20</strong>
              <span>OCT</span>
            </div>

            <div className="deadline-info">
              <b>Capgemini</b>

              <p>
                Technology Analyst
              </p>
            </div>

            <span className="days-left">
              14 Days Left
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;