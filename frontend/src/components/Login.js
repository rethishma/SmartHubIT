import React, { useState } from "react";
import axios from "axios";

function Login({ setUser }) {
  const [flat, setFlat] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("flat");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        flat,
        password,
        type,
      });
      setUser(res.data);
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="login">
      <h2>IoT Disaster Management</h2>

      <button onClick={() => setType("flat")}>Flat Owner</button>
      <button onClick={() => setType("control")}>Control Room</button>

      {type === "flat" && (
        <input
          placeholder="Flat Number"
          onChange={(e) => setFlat(e.target.value)}
        />
      )}

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
