import './nav.css';

function Nav() {
  return (
    <>
       <div className='nav'> 
        <div className='capy'>
       <img className="Logo" src="../src/assets/Logo.svg" alt="Logo" />
       </div>

       <div className='principal'>
       <img className="IncomeExpenses" src="../src/assets/IncomeExpenses.svg" alt="IncomeExpenses" />
       <img className="Dashboard" src="../src/assets/Dashboard.svg" alt="Dashboard" />
       <img className="Savings" src="../src/assets/Savings.svg" alt="Savings" />
       <img className="Rewards" src="../src/assets/Rewards.svg" alt="Rewards" />
       <img className="Settings" src="../src/assets/Settings.svg" alt="Settings" />
       </div>

       <div className='last'>
       <img className="User" src="../src/assets/User.svg" alt="User" />
       <img className="LogOut" src="../src/assets/LogOut.svg" alt="LogOut" />
       </div>




       

        
        
      </div>
    </>
  );
}

export default Nav;
