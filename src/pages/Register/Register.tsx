import { useEffect, memo } from 'react';
import './Register.css';
import vectorRegister from "../../assets/desktop/svg/vectorRegister.svg";
import Logo from "../../assets/desktop/web/Logo.webp";
import CardRegister from "../../components/registerPageComponents/CardRegister/CardRegister";

export const Register = memo(() => {
  useEffect(() => {
    const img = new Image();
    img.src = Logo;
  }, []);

  return (
    <div className='page'>
      <img id="Logo" src={Logo} alt="Logo de la aplicación" />
      <img id="Register" src={vectorRegister} alt="Imagen de registro" loading="lazy"  />
      <div className="Card">
        <CardRegister />
      </div>
      <div id='background'></div>
    </div>
  );
});
