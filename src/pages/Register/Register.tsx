import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import { createUser } from "../../services/Firebase/FirestoreUsers";
import { doCreateUserWithEmailAndPassword, doGoogleSignIn } from "../../services/Firebase/auth";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Registro con email y contra

  const handleRegister = async () => {

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
      const userCredential = await doCreateUserWithEmailAndPassword(email, password);
      const userData = await createUser(userCredential.user.uid, username, email)

      sessionStorage.setItem('userData', JSON.stringify({ auth: userCredential, data: userData }))
      navigate("/dashboard"); //PARA REDIRIGIR
    }
    catch (err) {
      console.log(err)
    }
  };

  //Registro con Google
  const handleGoogleRegister = async () => {
    try {
      const result = await doGoogleSignIn();
      const userData = await createUser(result.user.uid, username, email)

      sessionStorage.setItem('userData', JSON.stringify({ auth: result.user, data: userData }))
      navigate("/dashboard"); //PARA REDIRIGIR
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Nombre</h3>
      <input
        type="text"
        placeholder="Nombre"
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
      <button onClick={handleGoogleRegister}>Registrarse con Google</button>
    </div>
  );
}