import './App.css';
//import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';

//Import Components


//Import Pages



function App({ dashboardTitle, name }) {
  return (
    <>
      <div id="background"></div>
      <div>
        <h1>{dashboardTitle}</h1>
        <h2>{name}</h2>
        <Register/>
        
      </div>
    </>
  );
}

export default App;
