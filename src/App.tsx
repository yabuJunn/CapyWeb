import './App.css';

//Import Components


//Import Pages

import LogIn from './pages/LogIn/LogIn';

function App({ dashboardTitle, name }) {
  return (
    <>
      <div id="background"></div>
      <div>
        <h1>{dashboardTitle}</h1>
        <h2>{name}</h2>
        <LogIn />
        
      </div>
    </>
  );
}

export default App;
