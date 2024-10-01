import './income.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'

export const Income = () =>{
  return (
    <>
    
        <div className='income'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />

          <h2>Ingresos</h2> 
          <h1>100,000</h1> 
        </div>

 
    </>
  );
}

