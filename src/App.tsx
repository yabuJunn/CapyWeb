import './App.css';

//Import Components

import { Balance } from './components/TotalBalance/Balance';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import Capy from './components/Capy/Capy';
import CardsSpace from './components/CardsSpace/CardsSpace';
import Nav from './components/Nav/Nav';
import Comparation from './components/ComparationGraphic/ComparationGraphic';
import Savings from './components/Savings/Savings';
import Level from './components/Level/Level';
import Missions from './components/Missions/Missions';

//Import Pages

import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';

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
