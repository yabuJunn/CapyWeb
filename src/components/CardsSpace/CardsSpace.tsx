import './CardsSpace.css';
import AddCard from "../AddCard/AddCard";
import { DebitCard } from '../DebitCard/DebitCard';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'
import logoNu from '../../assets/svg/logo/logoNuWhite.svg'
import logoVisa from '../../assets/svg/logo/logoVisaWhite.svg'
import logoFalabella from '../../assets/svg/logo/logoFalabellaWhite.svg'
import logoNequi from '../../assets/svg/logo/logoNequiPurple.svg'

export const CardsSpace = () => {
  return (
    <>
      <div className='cardSpace'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />
        <h2>Your cards</h2>
        <DebitCard amount={'30000'} cardNumber={'2398'} backgroundColor={'#2D18BF'} logo={logoNu} textColor={'#F9F9F9'} />
        <DebitCard amount={'12000'} cardNumber={'1864'} backgroundColor={'#F2622E'} logo={logoVisa} textColor={'#F9F9F9'} />
        <DebitCard amount={'86500'} cardNumber={'2351'} backgroundColor={'#A8F25D'} logo={logoFalabella} textColor={'#391881'} />
        <DebitCard amount={'37482'} cardNumber={'1864'} backgroundColor={'#F9F9F9'} logo={logoNequi} textColor={'#391881'} />
        <AddCard />
      </div>
    </>
  );
}

