import './Level.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'

export const Level = () => {
  return (
    <>
      <div className='level'> 
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
      <p>Nivel de ahorrador</p>
      </div>
    </>
  );
}

