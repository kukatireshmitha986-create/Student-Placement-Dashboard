import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

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
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!form.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required.";
    }

    if (!form.department) {
      newErrors.department = "Select your department.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    register({
      name: form.name,
      rollNumber: form.rollNumber,
      department: form.department,
      email: form.email,
      password: form.password,
      graduationYear: "2027",
      phone: "",
      skills: "",
    });

    navigate("/dashboard");
  };

  return (
    <div className="registration-page">

      <div className="registration-card">

        <div className="registration-header">

          <div className="registration-icon">
            CP
          </div>

          <span className="registration-overline">
            STUDENT PLACEMENT SYSTEM
          </span>

          <h1>
            Create Account
          </h1>

          <p>
            Register to access the placement management portal
          </p>

        </div>

        <form
          className="registration-form"
          onSubmit={handleSubmit}
        >

          <div className="registration-grid">

            <div className="registration-field">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              {errors.name && (
                <small>
                  {errors.name}
                </small>
              )}

            </div>

            <div className="registration-field">

              <label>
                Roll Number
              </label>

              <input
                type="text"
                name="rollNumber"
                value={form.rollNumber}
                onChange={handleChange}
                placeholder="Enter roll number"
              />

              {errors.rollNumber && (
                <small>
                  {errors.rollNumber}
                </small>
              )}

            </div>

            <div className="registration-field">

              <label>
                Department
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
                <small>
                  {errors.department}
                </small>
              )}

            </div>

            <div className="registration-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />

              {errors.email && (
                <small>
                  {errors.email}
                </small>
              )}

            </div>

            <div className="registration-field">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
              />

              {errors.password && (
                <small>
                  {errors.password}
                </small>
              )}

            </div>

            <div className="registration-field">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />

              {errors.confirmPassword && (
                <small>
                  {errors.confirmPassword}
                </small>
              )}

            </div>

          </div>

          <button
            type="submit"
            className="registration-button"
          >
            Create Account
          </button>

        </form>

        <div className="registration-footer">

          <span>
            Already have an account?
          </span>

          <Link to="/login">
            Sign In
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Registration;