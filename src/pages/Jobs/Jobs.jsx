import { useState } from "react";
import "./Jobs.css";

const jobs = [
  {
    id: 1,
    company: "TCS",
    role: "Software Developer",
    location: "Chennai",
    package: "6.5 LPA",
    type: "Full Time",
    deadline: "10 October 2026",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Data Analyst",
    location: "Bangalore",
    package: "7.2 LPA",
    type: "Full Time",
    deadline: "12 October 2026",
  },
  {
    id: 3,
    company: "Wipro",
    role: "Graduate Engineer Trainee",
    location: "Hyderabad",
    package: "5.8 LPA",
    type: "Full Time",
    deadline: "08 October 2026",
  },
  {
    id: 4,
    company: "Accenture",
    role: "Associate Software Engineer",
    location: "Pune",
    package: "7.5 LPA",
    type: "Full Time",
    deadline: "15 October 2026",
  },
  {
    id: 5,
    company: "Capgemini",
    role: "Technology Analyst",
    location: "Mumbai",
    package: "6.8 LPA",
    type: "Full Time",
    deadline: "20 October 2026",
  },
  {
    id: 6,
    company: "Zoho",
    role: "Junior Developer",
    location: "Chennai",
    package: "8 LPA",
    type: "Full Time",
    deadline: "25 October 2026",
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const [appliedJobs, setAppliedJobs] = useState(() =>
    JSON.parse(localStorage.getItem("appliedJobs") || "[]")
  );

  const applyForJob = (job) => {
    const alreadyApplied = appliedJobs.some(
      (item) => item.id === job.id
    );

    if (alreadyApplied) {
      return;
    }

    const updatedApplications = [
      ...appliedJobs,
      {
        ...job,
        status: "Under Review",
        appliedDate: new Date().toLocaleDateString(),
      },
    ];

    setAppliedJobs(updatedApplications);

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(updatedApplications)
    );

    alert(
      `Application submitted successfully for ${job.role} at ${job.company}.`
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      job.company.toLowerCase().includes(searchText) ||
      job.role.toLowerCase().includes(searchText);

    const matchesLocation =
      location === "" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="page-container">

      <div className="jobs-heading">
        <div>
          <span className="section-overline">
            CAREER OPPORTUNITIES
          </span>

          <h1 className="page-title">
            Job Openings
          </h1>

          <p className="page-subtitle">
            Explore placement opportunities from leading companies
            and find the right role for your career.
          </p>
        </div>

        <div className="jobs-count">
          <strong>{filteredJobs.length}</strong>
          <span>Jobs Available</span>
        </div>
      </div>

      <div className="job-filters">

        <div className="search-box">
          <span className="search-label">
            SEARCH
          </span>

          <input
            type="text"
            placeholder="Search company or job role..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <select
          value={location}
          onChange={(event) =>
            setLocation(event.target.value)
          }
        >
          <option value="">
            All Locations
          </option>

          <option value="Chennai">
            Chennai
          </option>

          <option value="Bangalore">
            Bangalore
          </option>

          <option value="Hyderabad">
            Hyderabad
          </option>

          <option value="Pune">
            Pune
          </option>

          <option value="Mumbai">
            Mumbai
          </option>
        </select>

        <button
          className="clear-filter"
          onClick={() => {
            setSearch("");
            setLocation("");
          }}
        >
          Clear Filters
        </button>

      </div>

      <div className="jobs-grid">

        {filteredJobs.map((job) => {

          const applied = appliedJobs.some(
            (item) => item.id === job.id
          );

          return (
            <div
              className="job-card"
              key={job.id}
            >

              <div className="job-card-header">

                <div className="job-company-icon">
                  {job.company.charAt(0)}
                </div>

                <div className="job-company-info">

                  <h3>
                    {job.role}
                  </h3>

                  <strong>
                    {job.company}
                  </strong>

                </div>

              </div>

              <div className="job-details">

                <div className="job-detail">
                  <span>LOCATION</span>
                  <strong>{job.location}</strong>
                </div>

                <div className="job-detail">
                  <span>PACKAGE</span>
                  <strong>{job.package}</strong>
                </div>

                <div className="job-detail">
                  <span>TYPE</span>
                  <strong>{job.type}</strong>
                </div>

              </div>

              <div className="job-deadline">

                <div>
                  <span>
                    APPLICATION DEADLINE
                  </span>

                  <strong>
                    {job.deadline}
                  </strong>
                </div>

                <div className="deadline-status">
                  OPEN
                </div>

              </div>

              <button
                className={
                  applied
                    ? "applied-button"
                    : "apply-button"
                }
                disabled={applied}
                onClick={() =>
                  applyForJob(job)
                }
              >
                {applied
                  ? "Application Submitted"
                  : "Apply Now"}
              </button>

            </div>
          );
        })}

      </div>

      {filteredJobs.length === 0 && (
        <div className="empty-box">

          <div className="empty-box-label">
            NO RESULTS
          </div>

          <h3>
            No Jobs Found
          </h3>

          <p>
            Try changing your search keyword
            or selecting a different location.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setLocation("");
            }}
          >
            Reset Search
          </button>

        </div>
      )}

    </div>
  );
}

export default Jobs;