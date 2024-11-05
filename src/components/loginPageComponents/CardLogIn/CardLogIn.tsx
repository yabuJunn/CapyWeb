import './CardLogIn.css';

import { useState } from "react";
import { doGoogleSignIn, doSignInWithEmailAndPassword } from "../../../services/Firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../services/Firebase/FirestoreUsers";

import logoGoogle from '../../../assets/desktop/svg/logo/logoGoogle.svg'

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
      <h1>Sign In</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Email</h3>
      <input
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Password</h3>
      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <a>I don't remember my password</a>
      <button id='ButtonLogin' onClick={handleLoginEmail}>Accept</button>
      <div id="signUpGoogleContainer">
        <p>Or</p>
        <div id="googleIconContainer" onClick={handleGoogleLogin}>
          <img src={logoGoogle} alt="" />
          <p>Sign In with Google</p>
        </div>
      </div>

      <h3 id="Cuenta">Don't have an account? <a onClick={() => { navigate('/register') }}>Register now</a></h3>
    </div>
  );
}

export default CardLogIn;