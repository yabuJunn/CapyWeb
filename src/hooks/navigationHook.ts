import { useNavigate } from "react-router-dom"
import { routes } from "../types/routesEnum"

export const NavigationHook = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        sessionStorage.removeItem('userData')
        handleNavigation.navigateToLogin()
    }

    const handleNavigation = {
        navigateToDashboard: () => { navigate(routes.dashboard) },
        navigateToExpensesAndIncomes: () => { navigate(routes.expensesAndIncome) },
        navigateToSavings: () => { navigate(routes.savings) },
        navigateToRewards: () => { navigate(routes.rewards) },
        navigateToLogin: () => { navigate(routes.login) },
        navigateToRegister: () => { navigate(routes.register) },
        navigateToLanding: () => { navigate(routes.landingPage) },
        navigateToSettings: () => { navigate(routes.settings) },
        navigateToProfile: () => { navigate(routes.profile) },
        navigateToMascot: () => { navigate(routes.mascot) },
    }

    return {
        handleNavigation,
        handleLogOut
    }
}