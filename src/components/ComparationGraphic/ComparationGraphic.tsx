import './ComparationGraphic.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'
import IE from '../../assets/svg/I&E.svg'


export const ComparationGraphic = () => {
  return (
    <>
     
     <div className='comparation'>
          <img className="MoveButton" src={MoveButton} alt="MoveButton" />

          <p>Así manejas tu dinero </p>
        <div className='select-container'>
          <select>
              <option>Diariamente</option>
              <option>Semanalmente</option>
          </select>
          <img className="I&E" src={IE} alt="MoveButton" />
          </div>
      </div>
    </>
  );
}

