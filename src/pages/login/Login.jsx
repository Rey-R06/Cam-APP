import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔒 Claves para acceder
    const CLAVE_GRUPAL = "grupal123";
    const CLAVE_PRIVADA = "privado123";

    if (clave === CLAVE_GRUPAL) {
      navigate("/chat-grupal");
    } else if (clave === CLAVE_PRIVADA) {
      navigate("/chat-privado");
    } else {
      alert("Clave incorrecta");
    }
  };


  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Cam-Talk</h2>

        <input
          type="text"
          placeholder="Ingresa la clave..."
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
