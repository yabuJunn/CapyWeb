import React, { useEffect, memo, useState, useCallback } from 'react';
import './Register.css'
import vectorRegisterDesktop from "../../assets/desktop/svg/vectorRegister.svg";
import vectorRegisterMobile from "../../assets/mobile/svg/vectorRegisterMob.svg";
import Logo from "../../assets/desktop/web/Logo.webp";
import CardRegister from "../../components/registerPageComponents/CardRegister/CardRegister";

export const Register: React.FC = memo(() => {
  const [vectorSrc, setVectorSrc] = useState<string>(
    window.innerWidth < 500 ? vectorRegisterMobile : vectorRegisterDesktop
  );

  const handleResize = useCallback(() => {
    setVectorSrc(window.innerWidth < 500 ? vectorRegisterMobile : vectorRegisterDesktop);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  //useEffect para desactivar el scroll
  useEffect(() => {
    // Desactivar scroll cuando el componente esté montado
    document.body.classList.add('no-scroll');

    return () => {
      // Restaurar el scroll cuando el componente se desmonte
      document.body.classList.remove('no-scroll');
    };
  }, []);


  return (
    <main className='page' id='registePageContainer'>
      <img id="Logo" src={Logo} alt="Logo de la aplicación" />
      <img id="Register" src={vectorSrc} alt="Imagen de registro" loading="lazy" />

      <CardRegister />

      <div id='backgroundRegister'></div>
    </main>
  );
});
