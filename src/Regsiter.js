import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { NavLink} from "react-router-dom";
function App() {
  const [user, setUser] = useState({ firstName: "", email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/user/register", user).then((res) => {
      setUser({ email: "", password: "" });
    });
  };
  console.log(user);
  return (
    <>
      <div className="login_ctr">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            value={user.firstName}
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter email"
            value={user.email}
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
          />
          <button>Submit</button>
          <p>Already have account ? <NavLink to="/login">Login here</NavLink></p>
        </form>
      </div>
    </>
  );
}

export default App;
