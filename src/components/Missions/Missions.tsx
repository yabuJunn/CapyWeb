import './Missions.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'

export const Missions = () => {
  return (
    <>
      <div className='missions'> 
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
      <div className="info-container">
          <h3>Misiones</h3> 
      </div>
      </div>
    </>
  );
}

