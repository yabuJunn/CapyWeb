import './income.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'
import ArrowUp from '../../assets/svg/ArrowUp.svg'

export const Income = () =>{
  return (
    <>
    
        <div className='income'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />
        <img className="Dollar" src={ArrowUp} alt="ArrowUp" />

          <h2>Ingresos</h2> 
          <h1>100,000</h1> 
        </div>

 
    </>
  );
}

