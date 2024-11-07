import './TotalBalance.css';

//Import images
import MoveButton from '../../../assets/desktop/svg/MoveButton.svg'

export const TotalBalance = () => {

  return (
    <>
      <div className='balance'>
        <img className="MoveButton" src={MoveButton} alt="MoveButton" />

        <h3>Total Balance</h3>
        <h1>300,000</h1>
        <h3>This month you have added $21000</h3>

      </div>

    </>
  );
}
