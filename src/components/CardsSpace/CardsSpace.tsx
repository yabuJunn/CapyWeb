import './cardsSpace.css';
import Card from "../Card/Card.js";
import AddCard from "../AddCard/AddCard.js";

function CardsSpace({ headerTitle }) {
  return (
    <>
      <div className='cardSpace'>
        <img className="MoveButton" src="../src/assets/MoveButton.svg" alt="MoveButton" />
        <h2>Tus tarjetas</h2> 
        <Card /> 
        <AddCard /> 
      </div>
    </>
  );
}

export default CardsSpace;
