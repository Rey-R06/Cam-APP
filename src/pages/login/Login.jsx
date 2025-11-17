import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return;

    localStorage.setItem("user", username);
    navigate("/chat");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Cam-Talk</h2>

        <input
          type="text"
          placeholder="Ingresa la clave..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
