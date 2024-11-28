import './LogIn.css'
import CardLogIn from "../../components/loginPageComponents/CardLogIn/CardLogIn";
import vectorLogIn from "../../assets/desktop/svg/vectorLogIn.svg"
import Logo from "../../assets/desktop/svg/Logo.svg"
import { createPruebaUser } from '../../services/Firebase/FirestoreUsers';

export const LogIn = () => {
  // createPruebaUser('zTOoG8Hr8fUsbxZfQb4GrZlRJu22', 'Usuario Prueba 1', 'juancho04reyes@gmail.com')

  return <>
    <div className='page' id='logInPageContainer'>
      <div id='logoAndImageContainer'>
        <div id='logoAndTextContainer'>
          <img id="LogoImage" src={Logo} alt="" />
          <p>Capy</p>
        </div>
        <img id="LogInImage" src={vectorLogIn} alt="" />
      </div>
      <CardLogIn />

      <div id='backgroundLogIn' className='backgroundPage'>

      </div>
    </div>
  </>
}