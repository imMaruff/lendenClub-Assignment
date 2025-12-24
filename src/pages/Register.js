import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})}/>
      <input placeholder="Aadhaar" onChange={e => setForm({...form, aadhaar: e.target.value})}/>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
