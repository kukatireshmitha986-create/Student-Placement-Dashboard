import { useEffect, useState } from "react";
import "./Notifications.css";

function Notifications() {
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

  const notifications = [];

  applications.forEach((application) => {
    notifications.push({
      id: `${application.id}-application`,
      title: `Application Submitted - ${application.company}`,
      message: `Your application for ${application.role} has been submitted successfully.`,
      time: application.appliedDate || "Recently",
      type: "Application",
      code: "APP",
    });

    if (application.status === "Interview Scheduled") {
      notifications.push({
        id: `${application.id}-interview`,
        title: `Interview Scheduled - ${application.company}`,
        message: `Your interview for ${application.role} has been scheduled. Check the Interview Schedule page for complete details.`,
        time: "Updated recently",
        type: "Interview",
        code: "INT",
      });
    }

    if (application.status === "Selected") {
      notifications.push({
        id: `${application.id}-selection`,
        title: `Selection Update - ${application.company}`,
        message: `Your application for ${application.role} has been marked as selected.`,
        time: "Updated recently",
        type: "Selection",
        code: "SEL",
      });
    }

    if (application.status === "Rejected") {
      notifications.push({
        id: `${application.id}-rejected`,
        title: `Application Update - ${application.company}`,
        message: `Your application for ${application.role} was not selected for the next stage.`,
        time: "Updated recently",
        type: "Application",
        code: "UPD",
      });
    }
  });

  notifications.push({
    id: "placement-announcement",
    title: "Placement Cell Announcement",
    message:
      "Keep your profile updated and regularly check placement opportunities available through the student portal.",
    time: "Today",
    type: "Announcement",
    code: "NOT",
  });

  notifications.push({
    id: "company-update",
    title: "New Placement Opportunities",
    message:
      "Check the Job Openings page regularly for newly available positions from participating companies.",
    time: "Today",
    type: "Company Update",
    code: "NEW",
  });

  const interviewCount = notifications.filter(
    (notification) => notification.type === "Interview"
  ).length;

  const selectionCount = notifications.filter(
    (notification) => notification.type === "Selection"
  ).length;

  return (
    <div className="page-container">

      <div className="notifications-header">

        <div>
          <span className="notifications-overline">
            COMMUNICATION CENTER
          </span>

          <h1 className="page-title">
            Notifications
          </h1>

          <p className="page-subtitle">
            Stay updated with applications, interviews,
            company announcements and placement activities.
          </p>
        </div>

        <div className="notification-count">
          <strong>{notifications.length}</strong>
          <span>Total Notifications</span>
        </div>

      </div>

      <div className="notification-summary">

        <div className="notification-summary-card">

          <div className="notification-summary-icon">
            ALL
          </div>

          <div>
            <span>Total Updates</span>
            <strong>{notifications.length}</strong>
          </div>

        </div>

        <div className="notification-summary-card">

          <div className="notification-summary-icon interview">
            INT
          </div>

          <div>
            <span>Interview Alerts</span>
            <strong>{interviewCount}</strong>
          </div>

        </div>

        <div className="notification-summary-card">

          <div className="notification-summary-icon selected">
            SEL
          </div>

          <div>
            <span>Selection Updates</span>
            <strong>{selectionCount}</strong>
          </div>

        </div>

        <div className="notification-summary-card">

          <div className="notification-summary-icon notice">
            NOT
          </div>

          <div>
            <span>Announcements</span>
            <strong>
              {
                notifications.filter(
                  (notification) =>
                    notification.type === "Announcement" ||
                    notification.type === "Company Update"
                ).length
              }
            </strong>
          </div>

        </div>

      </div>

      <section className="notifications-section">

        <div className="notifications-section-header">

          <div>
            <h2>
              Recent Notifications
            </h2>

            <p>
              Latest updates related to your placement journey.
            </p>
          </div>

          <span>
            {notifications.length} Updates
          </span>

        </div>

        <div className="notification-list">

          {notifications.map((notification) => (

            <article
              className="notification-item"
              key={notification.id}
            >

              <div
                className={`notification-icon ${notification.type
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {notification.code}
              </div>

              <div className="notification-content">

                <div className="notification-title-row">

                  <strong>
                    {notification.title}
                  </strong>

                  <span className="notification-type">
                    {notification.type}
                  </span>

                </div>

                <p>
                  {notification.message}
                </p>

                <div className="notification-meta">
                  {notification.time}
                </div>

              </div>

              <span className="notification-status">
                NEW
              </span>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Notifications;