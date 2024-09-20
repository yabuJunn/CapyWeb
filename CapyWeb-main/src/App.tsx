import './App.css';
import Balance from "./TotalBalance/Balance.jsx";
import Income from "./Income/Income";
import Expenses from "./Expenses/Expenses";
import Capy from "./Capy/Capy.jsx";
import CardsSpace from "./CardsSpace/CardsSpace";
import Nav from "./Nav/Nav";
import Comparation from "./ComparationGraphic/ComparationGraphic";
import Savings from "./Savings/Savings";
import Level from "./Level/Level"
import Missions from "./Missions/Missions"
import LogIn from "./LogIn/LogIn"
import Register from "./Register/Register"


function App({ dashboardTitle, name }) {
  return (
    <>
      <div id="background"></div> 
      <div>
        <h1>{dashboardTitle}</h1>
        <h2>{name}</h2>
        <LogIn />
        <Register />
        <Balance />
        <Income />
        <Expenses />
        <Capy />
        <CardsSpace />
        <Comparation />
        <Nav />
        <Savings />
        <Level />
        <Missions />
      </div>
    </>
  );
}

export default App;
