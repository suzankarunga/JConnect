import React, { useState } from "react";
import Navbar from "./Navbar";
// import './Register.css'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Member");
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    // Form validation using regular expressions
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }

    // Store user data in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = { name, email, password, role };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to confirm page
    window.location.href = "/confirm";
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <h2>Register Here!</h2>
        <label>
          Role
          <select
            className="input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Client">Client</option>
            <option value="Law Firm">Law Firm</option>
            <option value="Mentorship Lead">Mentorship Lead</option>
            <option value="Probono Lawyer">Probono Lawyer</option>
            <option value="Outreach Lead">Outreach Lead</option>
            <option value="Technical team">Technical team</option>
            <option value="Manager">Manager</option>
          </select>
        </label>
        <br />
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input className="btn" type="submit" value="Submit" />
        {error && (
          <div
            className="flexCenter"
            style={{ paddingTop: 20, fontSize: 12, textAlign: "center" }}
          >
            {error}
          </div>
        )}

        <div class="flexCenter flexColumn social top10" style={{ gap: 20 }}>
          <p>Already a member?</p>
          <div>
            <a href="/login">Log in Here</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
