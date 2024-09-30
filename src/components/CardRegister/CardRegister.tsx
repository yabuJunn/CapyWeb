import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase/Firebase";

import './CardRegister.css';  

function CardRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError(""); 
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", userCredential.user);
    } 
    catch (err) {
      setError(err.message);  
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <h3>Usuario</h3>
      <input 
        type="text" 
        placeholder="Usuario" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <h3>Confirma contraseña</h3>
      <input 
        type="password" 
        placeholder="Confirmar Contraseña" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div id="terminos">
        <input 
          type="checkbox" 
          checked={acceptTerms} 
          onChange={() => setAcceptTerms(!acceptTerms)} 
        />
        <h3 id="Check">Acepto los <a href="">Términos</a> y <a href="">Condiciones</a></h3>
      </div>

      <h3 id="CrearCuenta">Ya tienes cuenta? <a href="">Iniciar Sesión</a></h3>
      <button onClick={handleRegister}>Aceptar</button>
    </div>
  );
}

export default CardRegister;
