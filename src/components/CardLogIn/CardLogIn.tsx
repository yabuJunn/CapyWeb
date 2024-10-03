import './CardLogIn.css';

import { useState } from "react";
import { doGoogleSignIn, doSignInWithEmailAndPassword } from "../../services/Firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/Firebase/FirestoreUsers";

import logoGoogle from '../../assets/svg/logo/logoGoogle.svg'

function CardLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginEmail = async () => {
    setError("");

    try {
      const userCredential = await doSignInWithEmailAndPassword(email, password);
      console.log("Usuario logueado:", userCredential.user);

      const userData = await getUser(userCredential.user.uid)
      console.log(userData)

      sessionStorage.setItem('userData', JSON.stringify({ auth: userCredential, data: userData }))

      navigate("/dashboard"); //PARA REDIRIGIR

    } catch (err) {
      console.log(err);
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
      <button onClick={handleLoginEmail}>Aceptar</button>
      <div id="signUpGoogleContainer">
        <p>Ó</p>
        <div id="googleIconContainer" onClick={handleGoogleLogin}>
          <img src={logoGoogle} alt="" />
          <p>Sign In with Google</p>
        </div>
      </div>

      <h3 id="Cuenta">¿No tienes una cuenta? <a onClick={() => { navigate('/register') }}>Registrarme ahora</a></h3>
    </div>
  );
}

export default CardLogIn;
