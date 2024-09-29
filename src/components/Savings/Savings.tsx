import './savings.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'

export const Savings = () => {
  return (
    <>
      <div className='savings'> 
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
      <p>Savings</p>
      </div>
    </>
  );
}

