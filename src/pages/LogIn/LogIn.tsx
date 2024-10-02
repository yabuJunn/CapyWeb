// LogIn.js
import { useState } from "react";
import { doSignInWithEmailAndPassword, doGoogleSignIn } from "../../services/Firebase/auth";
import { useNavigate } from "react-router-dom";
import './LogIn.css';
import { getUser } from "../../services/Firebase/FirestoreUsers";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Inicio de sesión con email/contraseña
  const handleLogin = async () => {

    try {
      const userCredential = await doSignInWithEmailAndPassword(email, password);
      const userData = await getUser(userCredential.user.uid)

      sessionStorage.setItem('userData', JSON.stringify({ auth: userCredential, data: userData }))

      navigate("/dashboard"); //PARA REDIRIGIR
    } catch (err) {
      setError("Error al iniciar sesión: " + err);
    }
  };

  //Inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await doGoogleSignIn();
      console.log("Usuario logueado con Google:", result.user);
      const userData = await getUser(result.user.uid)

      sessionStorage.setItem('userData', JSON.stringify({ auth: result.user, data: userData }))

      navigate("/dashboard"); //PARA REDIRIGIR
    } catch (err) {
      console.log(err)
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

      <h3>No recuerdas tu contraseña</h3>
      <button onClick={handleLogin}>Aceptar</button>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>

      <h3>¿No tienes una cuenta?
        <button onClick={() => navigate("/register")}>Registrarme ahora</button>
      </h3>
    </div>
  );
}

export default LogIn;
