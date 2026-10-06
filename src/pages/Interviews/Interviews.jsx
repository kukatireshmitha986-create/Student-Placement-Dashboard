import { useEffect, useState } from "react";
import "./Interviews.css";

const interviewDetails = {
  TCS: {
    date: "10 October 2026",
    time: "10:00 AM",
    mode: "Online",
  },
  Infosys: {
    date: "14 October 2026",
    time: "2:00 PM",
    mode: "Campus",
  },
  Wipro: {
    date: "18 October 2026",
    time: "11:00 AM",
    mode: "Online",
  },
  Accenture: {
    date: "22 October 2026",
    time: "10:30 AM",
    mode: "Online",
  },
  Capgemini: {
    date: "25 October 2026",
    time: "2:00 PM",
    mode: "Campus",
  },
  Zoho: {
    date: "28 October 2026",
    time: "11:30 AM",
    mode: "Online",
  },
};

function Interviews() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const loadInterviews = () => {
      const applications = JSON.parse(
        localStorage.getItem("appliedJobs") || "[]"
      );

      const scheduledInterviews = applications
        .filter(
          (application) =>
            application.status === "Interview Scheduled"
        )
        .map((application) => {
          const details =
            interviewDetails[application.company] || {
              date: "To Be Announced",
              time: "To Be Announced",
              mode: "To Be Announced",
            };

          return {
            ...application,
            ...details,
          };
        });

      setInterviews(scheduledInterviews);
    };

    loadInterviews();

    window.addEventListener(
      "storage",
      loadInterviews
    );

    return () => {
      window.removeEventListener(
        "storage",
        loadInterviews
      );
    };
  }, []);

  const onlineInterviews = interviews.filter(
    (interview) =>
      interview.mode === "Online"
  ).length;

  const campusInterviews = interviews.filter(
    (interview) =>
      interview.mode === "Campus"
  ).length;

  return (
    <div className="page-container">

      <div className="interviews-header">

        <div>
          <span className="interviews-overline">
            INTERVIEW MANAGEMENT
          </span>

          <h1 className="page-title">
            Interview Schedule
          </h1>

          <p className="page-subtitle">
            View your upcoming placement interviews,
            schedules and interview details.
          </p>
        </div>

        <div className="interview-total">
          <strong>{interviews.length}</strong>
          <span>Scheduled Interviews</span>
        </div>

      </div>

      <div className="interview-summary">

        <div className="interview-summary-card">
          <div className="summary-code">
            INT
          </div>

          <div>
            <span>Total Interviews</span>
            <strong>{interviews.length}</strong>
          </div>
        </div>

        <div className="interview-summary-card">
          <div className="summary-code online">
            ONL
          </div>

          <div>
            <span>Online Interviews</span>
            <strong>{onlineInterviews}</strong>
          </div>
        </div>

        <div className="interview-summary-card">
          <div className="summary-code campus">
            CAM
          </div>

          <div>
            <span>Campus Interviews</span>
            <strong>{campusInterviews}</strong>
          </div>
        </div>

        <div className="interview-summary-card">
          <div className="summary-code status">
            RDY
          </div>

          <div>
            <span>Interview Status</span>
            <strong>
              {interviews.length > 0
                ? "Ready"
                : "Pending"}
            </strong>
          </div>
        </div>

      </div>

      {interviews.length === 0 ? (

        <div className="empty-interviews">

          <div className="empty-interview-icon">
            INTERVIEW SCHEDULE
          </div>

          <h2>
            No Interviews Scheduled
          </h2>

          <p>
            When an application is moved to
            Interview Scheduled, the interview
            details will automatically appear here.
          </p>

        </div>

      ) : (

        <section className="interviews-section">

          <div className="interviews-section-header">

            <div>
              <h2>
                Upcoming Interviews
              </h2>

              <p>
                Your scheduled placement interviews
              </p>
            </div>

            <span>
              {interviews.length} Upcoming
            </span>

          </div>

          <div className="interviews-grid">

            {interviews.map((item) => (

              <article
                className="interview-card"
                key={item.id}
              >

                <div className="interview-card-top">

                  <div className="interview-company">

                    <div className="interview-company-logo">
                      {item.company.charAt(0)}
                    </div>

                    <div>
                      <h3>
                        {item.company}
                      </h3>

                      <span>
                        {item.role}
                      </span>
                    </div>

                  </div>

                  <span className="scheduled-badge">
                    SCHEDULED
                  </span>

                </div>

                <div className="interview-divider"></div>

                <div className="interview-details">

                  <div className="interview-detail">

                    <span>DATE</span>

                    <strong>
                      {item.date}
                    </strong>

                  </div>

                  <div className="interview-detail">

                    <span>TIME</span>

                    <strong>
                      {item.time}
                    </strong>

                  </div>

                  <div className="interview-detail">

                    <span>MODE</span>

                    <strong>
                      {item.mode}
                    </strong>

                  </div>

                  <div className="interview-detail">

                    <span>LOCATION</span>

                    <strong>
                      {item.location}
                    </strong>

                  </div>

                </div>

                <div className="interview-footer">

                  <div>
                    <span>
                      INTERVIEW STATUS
                    </span>

                    <strong>
                      Confirmed
                    </strong>
                  </div>

                  <div className="ready-badge">
                    READY
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

      )}

    </div>
  );
}

export default Interviews;