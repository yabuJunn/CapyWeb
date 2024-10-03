import './Expenses.css';

//Imagenes importadas
import MoveButton from '../../../assets/svg/MoveButton.svg'

export const Expenses = () => {
  return (
    <>

      <div className='expenses'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />

        <h2>Total Expenses</h2>
        <h1>$50,000</h1>

      </div>

    </>
  );
}

