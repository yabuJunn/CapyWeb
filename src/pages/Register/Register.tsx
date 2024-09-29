import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import './Register.css';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      navigate("/dashboard"); //PARA REDIRIGIR
    } catch (err) {
      setError("Error al registrarse: " + err.message);
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
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />

      <h3>Confirma contraseña</h3>
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div>
        <input 
          type="checkbox" 
          checked={acceptTerms} 
          onChange={() => setAcceptTerms(!acceptTerms)} 
        />
        <label>Acepto los términos y condiciones</label>
      </div>

      <h3>No recuerdas tu contraseña</h3>
      <button onClick={handleRegister}>Aceptar</button>
    </div>
  );
}

export default Register;
