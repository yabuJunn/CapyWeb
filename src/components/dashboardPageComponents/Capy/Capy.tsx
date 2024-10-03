import "./Capy.css";

//Imagenes importadas
import MoveButton from '../../../assets/svg/MoveButton.svg'
import capyCard from '../../../assets/svg/CapyCard.svg'


export const Capy = () => {
  return (
    <div className='capyContainer' style={{ backgroundImage: `url(${capyCard})` }}>
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
    </div>
  );
}