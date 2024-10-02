// LogIn.js
import React, { useState } from "react";
import { doSignInWithEmailAndPassword, doGoogleSignIn } from "../../services/Firebase/auth";
import './LogIn.css';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Inicio de sesión con email/contraseña
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const userCredential = await doSignInWithEmailAndPassword(email, password);
      console.log("Usuario logueado:", userCredential.user);
    } catch (err) {
      setError(err.message); 
    }
  };

  //Inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await doGoogleSignIn();
      console.log("Usuario logueado con Google:", result.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="LogIn">
      <h1>Log In</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Correo electrónico</h3> 
      <input 
        type="email"  
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
      />

      <h3>Contraseña</h3> 
      <input 
        type="password"  
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={handleLogin}>Iniciar sesión con Email</button>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  );
}

export default LogIn;
