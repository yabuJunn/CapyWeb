import './Register.css'

import vectorRegister from "../../assets/svg/vectorRegister.svg";
import Logo from "../../assets/svg/Logo.svg"
import CardRegister from "../../components/CardRegister/CardRegister";

export const Register = () => {
  return (
    <div className='page'>
      <img id="Logo" src={Logo} alt="" />
      <img id="Register" src={vectorRegister} alt="" />
      <div className="Card">
        <CardRegister />
      </div>

      <div id='background'>

      </div>
    </div>

  );
}

export default Register;