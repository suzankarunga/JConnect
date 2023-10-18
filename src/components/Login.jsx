import React, { useState } from "react";

// import "./Login.css";
import Navbar from "./Navbar";

 function Login2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation using regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address. ");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and contain at least one letter and one number."
      );
      return;
    }

    // Check if user exists in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // User is authenticated, redirect to home page
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/Dashboard";
    } else {
      // Authentication failed
      setError("Invalid email or password. Make sure it is correct");
    }
  };
  return (
    <>
      <Navbar />
      <div className="container" style={{ backgroundColor: "pink" }}>
        <h2 className="login-text">Log In Here</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        {error && <div>{error}</div>}

        <p>
          Not a member? <a href="/Register">Register Here</a>
        </p>
      </div>
    </>
  );
} 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation using regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address. ");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and contain at least one letter and one number."
      );
      return;
    }

    // Check if user exists in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // User is authenticated, redirect to home page
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/Dashboard";
    } else {
      // Authentication failed
      setError("Invalid email or password. Make sure it is correct");
    }}
    
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form  onSubmit={handleSubmit}>
        <h2>Login Here</h2>

        <label for="username" style={{paddingTop:30}}>Username</label>
        <input type="text" placeholder="Email or Phone" 
        id="username" 
        onSubmit={handleSubmit}  
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>

        <label for="password" style={{paddingTop:30}}>Password</label>
        <input type="password" placeholder="Password" id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" type="submit" value="Submit">Log In</button>

        {error && <div className="flexCenter" style={{paddingTop:20, fontSize:12, textAlign:"center"}}>{error}</div>}

        <div class="flexCenter flexColumn social top10" style={{gap:20}}>
        <p> Not a member? </p>
          <div onClick={()=>window.location.replace("/Register")}>Register Here</div>
        </div>
    </form>
    </>
  );
}

export default Login;
