import './nav.css';

import LogoCapy from '../../assets/svg/Logo.svg'

import IncomeEpensesIcon from '../../assets/svg/IncomeExpenses.svg'
import DashboardIcon from '../../assets/svg/Dashboard.svg'
import SavingsIcon from '../../assets/svg/Savings.svg'
import RewardsIcon from '../../assets/svg/Rewards.svg'
import SettingsIcon from '../../assets/svg/Settings.svg'

import UserIcon from '../../assets/svg/User.svg'
import LogOut from '../../assets/svg/LogOut.svg'
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
