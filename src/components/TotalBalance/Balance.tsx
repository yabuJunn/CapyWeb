import './balance.css';

//Import images
import MoveButton from '../../assets/svg/MoveButton.svg'
import DollarIcon from '../../assets/svg/Dollar.svg'

// interface BalanceProps {
//   total:
//   message:
// }

export const Balance = () => {

  return (
    <>
      <div className='balance'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />
        <img className="Dollar" src={DollarIcon} alt="Dollar" />

        <h3>Balance Total </h3>
        <h1>300,000</h1>
        <h3>Este mes has agregado -message-</h3>

      </div>

    </>
  );
}
