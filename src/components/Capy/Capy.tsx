import "./capy.css";

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'
import CapyCard from '../../assets/svg/CapyCard.svg'


export const Capy = () =>{
  return (
    <div className='card'>
      <img className="CapyCard" src={CapyCard} alt="CapyCard" />
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
    </div>
  );
}

