import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase/Firebase";

import './CardRegister.css';

import logoGoogle from '../../assets/svg/logo/logoGoogle.svg'

import { createUser } from "../../services/Firebase/FirestoreUsers";
import { useNavigate } from "react-router-dom";
import { doGoogleSignIn } from "../../services/Firebase/auth";

function CardRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userData = await createUser(userCredential.user.uid, username, email)

      sessionStorage.setItem('userData', JSON.stringify({ auth: userCredential, data: userData }))
      navigate("/dashboard"); //PARA REDIRIGIR
    }
    catch (err) {
      console.log(err);
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
        <input id="box"
          type="checkbox"
          checked={acceptTerms}
          onChange={() => setAcceptTerms(!acceptTerms)}
        />
        <h3 id="Check">Acepto los <a href="">Términos</a> y <a href="">Condiciones</a></h3>
      </div>

      <button onClick={handleRegister}>Aceptar</button>
      <div id="signUpGoogleContainer">
        <p>Ó</p>
        <div id="googleIconContainer" onClick={handleGoogleRegister}>
          <img src={logoGoogle} alt="" />
          <p>Sign Up with Google</p>
        </div>
      </div>
      <h3 id="CrearCuenta">Ya tienes cuenta? <a onClick={() => { navigate('/login') }}>Iniciar Sesión</a></h3>
    </div>
  );
}

export default CardRegister;
