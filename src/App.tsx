import './App.css';

import { Balance } from './components/TotalBalance/Balance';

// import Income from "./components/Income/Income.jsx";
// import Expenses from "./components/Expenses/Expenses.jsx";
// import Capy from "./components/Capy/Capy.jsx";
// import CardsSpace from "./components/CardsSpace/CardsSpace.jsx";
// import Nav from "./components/Nav/Nav.jsx";
// import Comparation from "./components/ComparationGraphic/ComparationGraphic.jsx";
// import Savings from "./components/Savings/Savings.jsx";
// import Level from "./components/Level/Level.jsx"
// import Missions from "./components/Missions/Missions.jsx"
// import LogIn from "./components/LogIn/LogIn.jsx"
// import Register from "./pages/Register/Register.jsx"


function App({ dashboardTitle, name }) {
  return (
    <>
      <div id="background"></div> 
      <div>
        <h1>{dashboardTitle}</h1>
        <h2>{name}</h2>
        {/* <LogIn />
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
        <Missions /> */}
      </div>
    </>
  );
}

export default App;
