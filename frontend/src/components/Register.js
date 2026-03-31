import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [flat, setFlat] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      flat,
      password,
    });
    alert("Registered!");
  };

  return (
    <div>
      <h2>Register Flat</h2>
      <input placeholder="Flat No" onChange={(e) => setFlat(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
