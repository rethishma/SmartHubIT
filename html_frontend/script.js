function login() {
  const flat = document.getElementById("flat").value;
  const password = document.getElementById("password").value;

  if (flat === "101" && password === "flat123") {
    alert("Login Success ✅");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials ❌");
  }
}
