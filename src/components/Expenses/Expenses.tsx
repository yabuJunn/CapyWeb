import './expenses.css';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'
import ArrowDown from '../../assets/svg/ArrowDown.svg'

export const Expenses = () => {
  return (
    <>
     
        <div className='expenses'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />
        <img className="Dollar" src={ArrowDown} alt="ArrowDown" />
        <h2>Expenses</h2> 
        <h1>50,000</h1> 

        </div>

    </>
  );
}

