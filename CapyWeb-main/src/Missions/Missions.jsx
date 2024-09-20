import './missions.css';

function Missions({ missionsTitle, missions, img }) {
  return (
    <>
      <div className='missions'> 
        <img className="MoveButton" src="../src/assets/MoveButton.svg" alt="MoveButton" />
        <h2>Misiones Titulo</h2> 
        <div className="info-container">
          <h3>Misiones</h3> 
          <h2>IMG de</h2> 
        </div>
      </div>
    </>
  );
}

export default Missions;
