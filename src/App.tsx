import './App.css';
import LogIn from './pages/LogIn/LogIn';

//Import Components


//Import Pages



function App({ dashboardTitle, name }) {
  return (
    <>
      <div id="background"></div>
      <div>
        <h1>{dashboardTitle}</h1>
        <h2>{name}</h2>
        <LogIn/>
        
      </div>
    </>
  );
}

export default App;
