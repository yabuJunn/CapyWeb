import './cardsSpace.css';
import AddCard from "../AddCard/AddCard";
import { Card } from '../Card/Card';

//Imagenes importadas
import MoveButton from '../../assets/svg/MoveButton.svg'

export const CardsSpace = () =>{
  return (
    <>
      <div className='cardSpace'>
      <img className="MoveButton" src={MoveButton} alt="MoveButton" />
        <h2>Tus tarjetas</h2> 
        <Card /> 
        <Card /> 
        <AddCard /> 
      </div>
    </>
  );
}

