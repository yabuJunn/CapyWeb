import "./Capy.css";

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'


export const Capy = () =>{
  return (
    <div className='capyContainer'>
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
    </div>
  );
}