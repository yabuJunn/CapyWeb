import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "../../services/Firebase/auth";
import { useNavigate } from "react-router-dom";
import './LogIn.css';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/dashboard"); //PARA REDIRIGIR
    } catch (err) {
      setError("Error al iniciar sesión: " + err.message);
    }
  };

  return (
    <div className='LogIn'>
      <h1>LogIn</h1>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <h3>Correo electronico</h3>
      <input 
        type='email' 
        placeholder='Correo' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <h3>Contraseña</h3>
      <input 
        type='password' 
        placeholder='Contraseña' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <h3>No recuerdas tu contraseña</h3>
      <button onClick={handleLogin}>Aceptar</button>

      <h3>¿No tienes una cuenta? 
        <button onClick={() => navigate("/register")}>Registrarme ahora</button>
      </h3>
    </div>
  );
}

export default LogIn;
