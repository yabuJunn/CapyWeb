import './expenses.css';

function Expenses({ title, expenses }) {
  return (
    <>
     
        <div className='expenses'>
        <img className="MoveButton" src="../src/assets/MoveButton.svg" alt="MoveButton" />
        <img className="ArrowDown" src="../src/assets/ArrowDown.svg" alt="ArrowDown" />
        <h2>Expenses</h2> 
        <h1>50,000</h1> 

        </div>

    </>
  );
}

export default Expenses;
