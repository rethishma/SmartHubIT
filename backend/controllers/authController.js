const db = require("../config/database");

exports.login = (req, res) => {
  const { flat, password, type } = req.body;

  if (type === "control") {
    if (password === "ControlRoom@2025") {
      return res.json({ success: true, role: "control" });
    }
    return res.status(401).json({ message: "Invalid password" });
  }

  const query = "SELECT * FROM users WHERE flat=? AND password=?";
  db.query(query, [flat, password], (err, result) => {
    if (result.length > 0) {
      res.json({ success: true, role: "flat", flat });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
};

exports.register = (req, res) => {
  const { flat, password } = req.body;

  const query = "INSERT INTO users (flat, password) VALUES (?,?)";
  db.query(query, [flat, password], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Registered successfully" });
  });
};
