import { useEffect, memo, useState } from 'react';
import './Register.css';
import vectorRegisterDesktop from "../../assets/desktop/svg/vectorRegister.svg";
import vectorRegisterMobile from "../../assets/mobile/svg/vectorRegisterMob.svg";
import Logo from "../../assets/desktop/web/Logo.webp";
import CardRegister from "../../components/registerPageComponents/CardRegister/CardRegister";

export const Register = memo(() => {
  const [vectorSrc, setVectorSrc] = useState<string>(
    window.innerWidth < 500 ? vectorRegisterMobile : vectorRegisterDesktop
  );

  useEffect(() => {
    const handleResize = () => {
      setVectorSrc(window.innerWidth < 500 ? vectorRegisterMobile : vectorRegisterDesktop);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className='page'>
      <img id="Logo" src={Logo} alt="Logo" />
      <img
        id="Register"
        src={vectorSrc}
        srcSet={`${vectorRegisterMobile} 500w, ${vectorRegisterDesktop} 1200w`}
        sizes="(max-width: 500px) 100vw, 50vw"
        alt="Imagen de registro"
        loading="lazy"
      />
      <div className="Card">
        <CardRegister />
      </div>
      <div id='backgroundRegister'></div>
    </main>
  );
});
