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
import Level from './components/SaverLevel/SaverLevel';
import Missions from './components/Missions/Missions';

//Import Pages

import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Dashboard></Dashboard> 
    </>
  );
}

export default App;
