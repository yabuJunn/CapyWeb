import './LogIn.css'
import CardLogIn from "../../components/loginPageComponents/CardLogIn/CardLogIn";
import vectorLogIn from "../../assets/desktop/svg/vectorLogIn.svg"
import Logo from "../../assets/desktop/svg/Logo.svg"

export const LogIn = () => {
  return (
    <div className='page'>
      <img id="Logo" src={Logo} alt="" />
      <img id="LogIn" src={vectorLogIn} alt="" />
      <div className="Card">
        <CardLogIn />
      </div>

      <div id='backgroundLogIn'>

      </div>
    </div>
  );
}