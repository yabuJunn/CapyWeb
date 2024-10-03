import './Balance.css';

//Import images
import MoveButton from '../../assets/svg/MoveButton.svg'

// interface BalanceProps {
//   total:
//   message:
// }

export const Balance = () => {

  return (
    <>
      <div className='balance'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />

        <h3>Balance Total </h3>
        <h1>300,000</h1>
        <h3>Este mes has agregado $21000</h3>

      </div>

    </>
  );
}
