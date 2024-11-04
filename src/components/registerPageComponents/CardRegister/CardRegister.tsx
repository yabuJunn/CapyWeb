import React, { useState, useCallback, memo } from "react";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../../../services/Firebase/Firebase";
import './CardRegister.css';
import logoGoogle from '../../../assets/desktop/svg/logo/logoGoogle.svg';
import { createUser } from "../../../services/Firebase/FirestoreUsers";
import { useNavigate } from "react-router-dom";
import { doGoogleSignIn } from "../../../services/Firebase/auth";

const CardRegister: React.FC = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = useCallback(async () => {
    if (!acceptTerms) {
      setError("You must accept the terms and conditions.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userData = await createUser(userCredential.user.uid, username, email);
      sessionStorage.setItem('userData', JSON.stringify({ auth: userCredential, data: userData }));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("An error occurred while registering the user.");
    }
  }, [email, password, confirmPassword, acceptTerms, username, navigate]);

  const handleGoogleRegister = useCallback(async () => {
    try {
      const result = await doGoogleSignIn();
      const userData = await createUser(result.user.uid, username, email);
      sessionStorage.setItem('userData', JSON.stringify({ auth: result.user, data: userData }));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al iniciar sesión con Google.");
    }
  }, [username, email, navigate]);

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
        <input
          id="box1"
          type="checkbox"
          checked={acceptTerms}
          onChange={() => setAcceptTerms(!acceptTerms)}
        />
        <h3 id="Check">
          I accept the <a href="/terms" aria-label="Terms and Conditions">terms</a> and <a href="/conditions" aria-label="Conditions">conditions</a>
        </h3>
      </div>

      <button onClick={handleRegister}>Sign Up</button>
      <div id="signUpGoogleContainer">
        <p>Or</p>
        <div id="googleIconContainer" onClick={handleGoogleRegister}>
          <img src={logoGoogle} alt="Logo de Google" loading="lazy" width={24} height={24} />
          <p>Sign Up with Google</p>
        </div>
      </div>
      <h3 id="CrearCuenta">
        Already have an account?{" "}
        <a onClick={() => { navigate('/login') }}>Sign In</a>
      </h3>
    </div>
  );
});

export default CardRegister;
