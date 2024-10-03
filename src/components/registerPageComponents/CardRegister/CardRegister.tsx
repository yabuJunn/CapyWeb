import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/Firebase/Firebase";

import './CardRegister.css';

import logoGoogle from '../../../assets/svg/logo/logoGoogle.svg'


import { createUser } from "../../../services/Firebase/FirestoreUsers";
import { useNavigate } from "react-router-dom";
import { doGoogleSignIn } from "../../../services/Firebase/auth";

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
      <h1>Sign Up</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Name</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <h3>Email</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Password</h3>
      <input
        type="password"
        placeholder="Create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <h3>Confirm password</h3>
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div id="terminos">
        <input id="box"
          type="checkbox"
          checked={acceptTerms}
          onChange={() => setAcceptTerms(!acceptTerms)}
        />
        <h3 id="Check">I accept the <a href="">terms</a> and <a href="">conditions</a></h3>
      </div>

      <button onClick={handleRegister}>Sign Up</button>
      <div id="signUpGoogleContainer">
        <p>Or</p>
        <div id="googleIconContainer" onClick={handleGoogleRegister}>
          <img src={logoGoogle} alt="" />
          <p>Sign Up with Google</p>
        </div>
      </div>
      <h3 id="CrearCuenta">Already have an account? <a onClick={() => { navigate('/login') }}>Sign In</a></h3>
    </div>
  );
}

export default CardRegister;
