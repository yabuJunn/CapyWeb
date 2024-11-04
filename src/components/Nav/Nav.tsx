import './nav.css';

import LogoCapy from '../../assets/desktop/svg/Logo.svg'

import IncomeEpensesIcon from '../../assets/desktop/svg/IncomeExpenses.svg'
import DashboardIcon from '../../assets/desktop/svg/Dashboard.svg'
import SavingsIcon from '../../assets/desktop/svg/Savings.svg'
import RewardsIcon from '../../assets/desktop/svg/Rewards.svg'
import SettingsIcon from '../../assets/desktop/svg/Settings.svg'

import UserIcon from '../../assets/desktop/svg/User.svg'
import LogOut from '../../assets/desktop/svg/LogOut.svg'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate()

  const handleLogOut = () => {
    sessionStorage.removeItem('userData')
    navigate('/login')
  }

  return (
    <>
      <div className='nav'>
        <div className='capy'>
          <img className="Logo" src={LogoCapy} alt="Logo" />
        </div>

        <div className='principal'>
          <img className="IncomeExpenses" src={IncomeEpensesIcon} alt="IncomeExpenses" />
          <img className="Dashboard" src={DashboardIcon} alt="Dashboard" />
          <img className="Savings" src={SavingsIcon} alt="Savings" />
          <img className="Rewards" src={RewardsIcon} alt="Rewards" />
          <img className="Settings" src={SettingsIcon} alt="Settings" />
        </div>

        <div className='last'>
          <img className="User" src={UserIcon} alt="User" />
          <img className="LogOut" src={LogOut} alt="LogOut" onClick={() => { handleLogOut() }} />
        </div>

      </div>
    </>
  );
}

export default Nav;
