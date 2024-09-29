import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "../../services/Firebase/auth"; 
import './LogIn.css';

function LogIn() {
  return (
    <>

      <div className='LogIn'>
        <h1>LogIn</h1>
        <h3>Correo electronico</h3>
        <input type='email' placeholder='Correo' />
        <h3>Contraseña</h3>
        <input type='password' placeholder='Contraseña' />
        <h3>No recuerdas tu contraseña</h3>
        <button>Aceptar</button>
        <h3>¿No tienes una cuenta? <button>Registrarme ahora</button></h3>
      </div>

    </>
  );
}

export default LogIn;
