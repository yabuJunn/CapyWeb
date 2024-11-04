import './Nav.css';

import { useLocation, useNavigate } from 'react-router-dom';

import LogoCapy from '../../assets/svg/Logo.svg'

//Nav icons white
import dashboardIconWhite from '../../assets/svg/icons/navIcons/DashboardNavIconWhite.svg'
import expensesAndIncomeIconWhite from '../../assets/svg/icons/navIcons/ExpensesAndIncomeNavIconWhite.svg'
import savingsIconWhite from '../../assets/svg/icons/navIcons/SavingsNavIconWhite.svg'
import rewardsIconWhite from '../../assets/svg/icons/navIcons/RewardsNavIconWhite.svg'
import configurationIconWhite from '../../assets/svg/icons/navIcons/ConfigurationNavIconWhite.svg'
import profileIconWhite from '../../assets/svg/icons/navIcons/ProfileNavIconWhite.svg'
import logOutIconWhite from '../../assets/svg/icons/navIcons/LogOutNavIconWhite.svg'

//Nav icons green
import dashboardIconBlack from '../../assets/svg/icons/navIcons/DashboardNavIconBlack.svg'
import expensesAndIncomeIconBlack from '../../assets/svg/icons/navIcons/ExpensesAndIncomeNavIconBlack.svg'
import savingsIconBlack from '../../assets/svg/icons/navIcons/SavingsNavIconBlack.svg'
import rewardsIconBlack from '../../assets/svg/icons/navIcons/RewardsNavIconBlack.svg'
// import configurationIconBlack from '../../assets/svg/icons/navIcons/ConfigurationNavIconb.svg'
// import profileIconBlack from '../../assets/svg/icons/navIcons/ProfileNavIconWhite.svg'

enum routes {
  dashboard = '/dashboard',
  expensesAndIncome = '/expenses-and-increase',
  savings = '/savings',
  rewards = '/reward',
}

export const GlobalAppNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)

  const handleLogOut = () => {
    sessionStorage.removeItem('userData')
    navigate('/login')
  }

  switch (location.pathname) {
    case routes.savings:
      return <>
        <nav className='navContainer'>

          <div className='capy'>
            <img className="Logo" src={LogoCapy} alt="Logo" />
          </div>

          <div className='nav'>
            <div className='principal'>
              <img className="Dashboard" src={dashboardIconWhite} alt="Dashboard" />
              <img className="IncomeExpenses" src={expensesAndIncomeIconWhite} alt="IncomeExpenses" />
              <img className="Savings focus" src={dashboardIconBlack} alt="Savings" />
              <img className="Rewards" src={rewardsIconWhite} alt="Rewards" />
              <img className="Settings" src={configurationIconWhite} alt="Settings" />
            </div>

            <div className='last'>
              <img className="User" src={profileIconWhite} alt="User" />
              <img className="LogOut" src={logOutIconWhite} alt="LogOut" onClick={() => { handleLogOut() }} />
            </div>
          </div>

        </nav>
      </>

    default:
      break;
  }
}