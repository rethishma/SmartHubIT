import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ControlRoom from "./components/ControlRoom";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return user.role === "control" ? (
    <ControlRoom />
  ) : (
    <Dashboard flat={user.flat} />
  );
}

export default App;
