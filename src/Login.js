import React, { useState,useContext } from "react";
import axios from "axios";
import { globalContext } from "./App";
import "./App.css";
import { useNavigate,NavLink} from "react-router-dom";
function App() {
    const nav=useNavigate()
const {setName}=useContext(globalContext)
  const [user, setUser] = useState({ email: "", password: "" });
//   const [name, setName] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    try{

      const data=await axios.post("http://localhost:3001/user/login", user)
      setName(data.data.user);
    }
    catch (err){
      console.log(err)
    }

    nav('/')
    setUser({ email: "", password: "" });
  };
  console.log(user);
  return (
    <>
      <div className="login_ctr">
        <form onSubmit={handleSubmit}>
          <h3>Login here</h3>
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
          <p>Don't have account ? <NavLink to="/register">Regsiter here</NavLink></p>
        </form>
      </div>
    </>
  );
}

export default App;
