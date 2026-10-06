import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

function Profile() {
  const { user, updateUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    department: "",
    email: "",
    phone: "",
    graduationYear: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        rollNumber: user.rollNumber || "",
        department: user.department || "",
        email: user.email || "",
        phone: user.phone || "",
        graduationYear: user.graduationYear || "2027",
        skills: user.skills || "",
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setMessage("");
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!form.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required.";
    }

    if (!form.department.trim()) {
      newErrors.department = "Department is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (
      form.phone &&
      !/^[0-9]{10}$/.test(form.phone)
    ) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    if (!form.graduationYear) {
      newErrors.graduationYear =
        "Graduation year is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("");
      return;
    }

    updateUser({
      ...user,
      ...form,
    });

    setErrors({});
    setMessage("Profile updated successfully.");
  };

  return (
    <div className="page-container">

      <div className="profile-header">

        <div>
          <span className="profile-overline">
            STUDENT ACCOUNT
          </span>

          <h1 className="page-title">
            Student Profile
          </h1>

          <p className="page-subtitle">
            Manage your personal, academic and career
            information used throughout the placement portal.
          </p>
        </div>

        <div className="profile-status">
          <span className="status-indicator"></span>
          Profile Active
        </div>

      </div>

      <div className="profile-layout">

        <aside className="profile-overview">

          <div className="profile-avatar">
            {form.name?.charAt(0)?.toUpperCase() || "S"}
          </div>

          <h2>
            {form.name || "Student"}
          </h2>

          <p className="profile-department">
            {form.department || "Department not specified"}
          </p>

          <div className="profile-divider"></div>

          <div className="profile-overview-item">
            <span>ROLL NUMBER</span>
            <strong>
              {form.rollNumber || "Not provided"}
            </strong>
          </div>

          <div className="profile-overview-item">
            <span>EMAIL ADDRESS</span>
            <strong>
              {form.email || "Not provided"}
            </strong>
          </div>

          <div className="profile-overview-item">
            <span>GRADUATION YEAR</span>
            <strong>
              {form.graduationYear || "Not provided"}
            </strong>
          </div>

          <div className="profile-completion">

            <div className="completion-header">
              <span>Profile Completion</span>
              <strong>
                {[
                  form.name,
                  form.rollNumber,
                  form.department,
                  form.email,
                  form.phone,
                  form.graduationYear,
                  form.skills,
                ].filter(Boolean).length * 14 > 100
                  ? 100
                  : [
                      form.name,
                      form.rollNumber,
                      form.department,
                      form.email,
                      form.phone,
                      form.graduationYear,
                      form.skills,
                    ].filter(Boolean).length * 14}
                %
              </strong>
            </div>

            <div className="completion-bar">
              <div
                style={{
                  width: `${
                    [
                      form.name,
                      form.rollNumber,
                      form.department,
                      form.email,
                      form.phone,
                      form.graduationYear,
                      form.skills,
                    ].filter(Boolean).length * 14 > 100
                      ? 100
                      : [
                          form.name,
                          form.rollNumber,
                          form.department,
                          form.email,
                          form.phone,
                          form.graduationYear,
                          form.skills,
                        ].filter(Boolean).length * 14
                  }%`,
                }}
              ></div>
            </div>

            <small>
              Complete your profile to improve placement readiness.
            </small>

          </div>

        </aside>

        <section className="profile-form-card">

          <div className="profile-section-heading">

            <div>
              <span>PROFILE INFORMATION</span>

              <h2>
                Personal & Academic Details
              </h2>

              <p>
                Keep your information accurate and up to date.
              </p>
            </div>

            <div className="profile-form-label">
              REQUIRED FIELDS
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="profile-form-grid">

              <div className="profile-form-group">

                <label>
                  Full Name
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                {errors.name && (
                  <small className="profile-error">
                    {errors.name}
                  </small>
                )}

              </div>

              <div className="profile-form-group">

                <label>
                  Roll Number
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="rollNumber"
                  value={form.rollNumber}
                  onChange={handleChange}
                  placeholder="Enter your roll number"
                />

                {errors.rollNumber && (
                  <small className="profile-error">
                    {errors.rollNumber}
                  </small>
                )}

              </div>

              <div className="profile-form-group">

                <label>
                  Department
                  <span>*</span>
                </label>

                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Department
                  </option>

                  <option>
                    AI & Data Science
                  </option>

                  <option>
                    Computer Science Engineering
                  </option>

                  <option>
                    Information Technology
                  </option>

                  <option>
                    Electronics and Communication Engineering
                  </option>

                  <option>
                    Electrical and Electronics Engineering
                  </option>
                </select>

                {errors.department && (
                  <small className="profile-error">
                    {errors.department}
                  </small>
                )}

              </div>

              <div className="profile-form-group">

                <label>
                  Email Address
                  <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />

                {errors.email && (
                  <small className="profile-error">
                    {errors.email}
                  </small>
                )}

              </div>

              <div className="profile-form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit phone number"
                  maxLength="10"
                />

                {errors.phone && (
                  <small className="profile-error">
                    {errors.phone}
                  </small>
                )}

              </div>

              <div className="profile-form-group">

                <label>
                  Graduation Year
                  <span>*</span>
                </label>

                <select
                  name="graduationYear"
                  value={form.graduationYear}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Year
                  </option>

                  <option value="2026">
                    2026
                  </option>

                  <option value="2027">
                    2027
                  </option>

                  <option value="2028">
                    2028
                  </option>

                  <option value="2029">
                    2029
                  </option>
                </select>

                {errors.graduationYear && (
                  <small className="profile-error">
                    {errors.graduationYear}
                  </small>
                )}

              </div>

            </div>

            <div className="profile-form-group full-width">

              <label>
                Technical Skills
              </label>

              <textarea
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="Example: Python, SQL, React, Machine Learning, Excel"
                rows="5"
              ></textarea>

              <small className="field-hint">
                Add the technologies and skills you want
                recruiters to see.
              </small>

            </div>

            {message && (
              <div className="profile-success">
                <strong>Success</strong>
                <span>{message}</span>
              </div>
            )}

            <div className="profile-form-footer">

              <p>
                Your information is stored locally in this
                demo application.
              </p>

              <button
                type="submit"
                className="profile-save-button"
              >
                Save Profile Changes
              </button>

            </div>

          </form>

        </section>

      </div>

    </div>
  );
}

export default Profile;