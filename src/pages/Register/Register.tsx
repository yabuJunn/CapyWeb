// Register.js
import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword, doGoogleSignIn } from "../../services/Firebase/auth"; 
import './Register.css';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  //Registro con email y contra

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError(""); 
    
    try {
      const userCredential = await doCreateUserWithEmailAndPassword(email, password);
      console.log("Usuario registrado:", userCredential.user);
    } 
    catch (err) {
      setError(err.message);  
    }
  };

  //Registro con Google
  const handleGoogleRegister = async () => {
    try {
      const result = await doGoogleSignIn();
      console.log("Usuario registrado con Google:", result.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Register">
      <h1>Registro</h1>
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Correo</h3>
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

      <h3>Confirma Contraseña</h3>
      <input 
        type="password" 
        placeholder="Confirmar Contraseña" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Registrarse</button>
      <button onClick={handleGoogleRegister}>Registrarse con Google</button>

    </div>
  );
}

export default Register;
