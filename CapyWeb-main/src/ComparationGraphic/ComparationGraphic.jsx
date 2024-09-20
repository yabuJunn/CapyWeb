import './comparationGraphic.css';

function Comparation() {
  return (
    <>
     
     <div className='comparation'>
    <img className="MoveButton" src="../src/assets/MoveButton.svg" alt="MoveButton" />
    <p>Así manejas tu dinero </p>
    <div className='select-container'>
        <select>
            <option>Ingresos</option>
            <option>Gastos</option>
        </select>
        <img className="I&E" src="../src/assets/I&E.svg" alt="I&E" />
    </div>
</div>



    </>
  );
}

export default Comparation;
