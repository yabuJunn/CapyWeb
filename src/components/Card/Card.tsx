import './Card.css';

export const Card = () =>{
  return (
    <div className='cardContainer'>
      <div className='top-row'>
        <h2 className='amount'>100,000</h2> 
        <h3 className='cardLogo'>Logo</h3>
      </div>
      <h2 className='subtitle'>NUMBER</h2>
      <h2 className='cardNumber'>516 ***</h2>
    </div>
  );
}