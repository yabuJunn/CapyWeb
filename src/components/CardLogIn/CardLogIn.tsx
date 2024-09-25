import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "../../services/Firebase/auth"; 
import './CardLogIn.css';

function CardLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  return (
    <div className='LogIn'>
      <h1>Iniciar sesión</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Correo electrónico</h3> 
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

      <a>No recuerdas tu contraseña</a> 
      <button onClick={handleLogin}>Aceptar</button> 

      <h3>¿No tienes una cuenta? <a>Registrarme ahora</a></h3> 
    </div>
  );
}

export default CardLogIn;
