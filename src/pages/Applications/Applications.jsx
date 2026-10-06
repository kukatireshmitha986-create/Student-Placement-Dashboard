import { useState } from "react";
import "./Applications.css";

function Applications() {
  const [applications, setApplications] = useState(() =>
    JSON.parse(localStorage.getItem("appliedJobs") || "[]")
  );

  const updateStatus = (id, status) => {
    const updatedApplications = applications.map((application) =>
      application.id === id
        ? { ...application, status }
        : application
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(updatedApplications)
    );
  };

  const getStatusClass = (status) => {
    if (status === "Selected") {
      return "status-selected";
    }

    if (status === "Interview Scheduled") {
      return "status-interview";
    }

    if (status === "Rejected") {
      return "status-rejected";
    }

    return "status-review";
  };

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) =>
      !application.status ||
      application.status === "Under Review"
  ).length;

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  ).length;

  const selected = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  return (
    <div className="page-container">

      <div className="applications-header">

        <div>
          <span className="applications-overline">
            APPLICATION MANAGEMENT
          </span>

          <h1 className="page-title">
            My Applications
          </h1>

          <p className="page-subtitle">
            Track your placement applications,
            interview progress and selection status.
          </p>
        </div>

        <div className="application-count">
          <strong>{totalApplications}</strong>
          <span>Total Applications</span>
        </div>

      </div>

      <div className="application-summary">

        <div className="summary-card">
          <div className="summary-icon">
            APP
          </div>

          <div>
            <span>Total Applications</span>
            <strong>{totalApplications}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon review">
            REV
          </div>

          <div>
            <span>Under Review</span>
            <strong>{underReview}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon interview">
            INT
          </div>

          <div>
            <span>Interviews</span>
            <strong>{interviews}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon selected">
            SEL
          </div>

          <div>
            <span>Selected</span>
            <strong>{selected}</strong>
          </div>
        </div>

      </div>

      {applications.length === 0 ? (

        <div className="empty-applications">

          <div className="empty-icon">
            APPLICATIONS
          </div>

          <h2>
            No Applications Yet
          </h2>

          <p>
            You have not applied for any jobs yet.
            Visit Job Openings to explore available positions.
          </p>

        </div>

      ) : (

        <div className="applications-card">

          <div className="applications-card-header">
            <div>
              <h2>Application Tracking</h2>

              <p>
                Review and update the current status
                of your placement applications.
              </p>
            </div>

            <span>
              {applications.length} Records
            </span>
          </div>

          <div className="applications-table">

            <div className="applications-table-header">
              <span>COMPANY</span>
              <span>POSITION</span>
              <span>PACKAGE</span>
              <span>LOCATION</span>
              <span>APPLIED DATE</span>
              <span>STATUS</span>
            </div>

            {applications.map((application) => (

              <div
                className="application-row"
                key={application.id}
              >

                <div className="company-info">

                  <div className="company-logo">
                    {application.company.charAt(0)}
                  </div>

                  <div>
                    <strong>
                      {application.company}
                    </strong>

                    <small>
                      Placement Drive
                    </small>
                  </div>

                </div>

                <div className="position-info">
                  {application.role}
                </div>

                <div className="table-value">
                  {application.package}
                </div>

                <div className="table-value">
                  {application.location}
                </div>

                <div className="table-value">
                  {application.appliedDate || "Recently"}
                </div>

                <div className="status-column">

                  <select
                    value={
                      application.status ||
                      "Under Review"
                    }
                    onChange={(event) =>
                      updateStatus(
                        application.id,
                        event.target.value
                      )
                    }
                    className={getStatusClass(
                      application.status
                    )}
                  >
                    <option value="Under Review">
                      Under Review
                    </option>

                    <option value="Interview Scheduled">
                      Interview Scheduled
                    </option>

                    <option value="Selected">
                      Selected
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>
                  </select>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}

export default Applications;