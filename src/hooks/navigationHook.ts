import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../types/routesEnum";

export const NavigationHook = () => {
    const navigate = useNavigate();

    // Memoriza todas las funciones de navegación
    const navigateToDashboard = useCallback(() => navigate(routes.dashboard), [navigate]);
    const navigateToExpensesAndIncomes = useCallback(() => navigate(routes.expensesAndIncome), [navigate]);
    const navigateToSavings = useCallback(() => navigate(routes.savings), [navigate]);
    const navigateToRewards = useCallback(() => navigate(routes.rewards), [navigate]);
    const navigateToLogin = useCallback(() => navigate(routes.login), [navigate]);
    const navigateToRegister = useCallback(() => navigate(routes.register), [navigate]);
    const navigateToLanding = useCallback(() => navigate(routes.landingPage), [navigate]);
    const navigateToSettings = useCallback(() => navigate(routes.settings), [navigate]);
    const navigateToProfile = useCallback(() => navigate(routes.profile), [navigate]);
    const navigateToMascot = useCallback(() => navigate(routes.mascot), [navigate]);

    // Memoriza la función de cerrar sesión
    const handleLogOut = useCallback(() => {
        sessionStorage.removeItem('userData');
        navigateToLogin();
    }, [navigateToLogin]);

    // Agrupa todas las funciones de navegación en un objeto
    const handleNavigation = {
        navigateToDashboard,
        navigateToExpensesAndIncomes,
        navigateToSavings,
        navigateToRewards,
        navigateToLogin,
        navigateToRegister,
        navigateToLanding,
        navigateToSettings,
        navigateToProfile,
        navigateToMascot,
    };

    return {
        handleNavigation,
        handleLogOut
    };
};
