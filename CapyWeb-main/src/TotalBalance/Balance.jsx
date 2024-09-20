import './balance.css';

function Balance({ total, message }) {
 
  return (
    <>
      <div className='balance'>
      <img className="MoveButton" src="../src/assets/MoveButton.svg" alt="MoveButton" />
      <img className="Dollar" src="../src/assets/Dollar.svg" alt="Dollar" />

        <h3>Balance Total </h3>
          <h1>300,000</h1> 
          <h3>Este mes has agregado{message}</h3> 

      </div>
     
    </>
  );
}

export default Balance;
