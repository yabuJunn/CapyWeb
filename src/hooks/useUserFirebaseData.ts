import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRealUser } from '../services/Firebase/FirestoreUsers';
import { updateAllUserSlice } from '../store/userData/slice';
import { convertTimestampToDate } from '../utils/timestampConvertion';
import { updateAllSavingsSlice } from '../store/savings/slice';


export const useUserFirebaseData = (userUID: string | null) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchAndSetUserData = useCallback(async () => {
        if (!userUID) return;

        setIsLoading(true);
        try {
            const userDataFirebase = await getRealUser(userUID);

            if (userDataFirebase) {
                dispatch(
                    updateAllUserSlice({
                        userEmail: userDataFirebase.email,
                        userName: userDataFirebase.name,
                        userUID: userDataFirebase.userUID,
                        cards: userDataFirebase.cards,
                        totalBalance: userDataFirebase.totalBalance,
                        totalIncome: userDataFirebase.totalIncome,
                        totalExpenses: userDataFirebase.totalExpenses,
                    })
                );

                const newSavingsData = userDataFirebase.savingsData.map((saving) => ({
                    ...saving,
                    savingHistory: saving.savingHistory.map((savingHistory) => ({
                        ...savingHistory,
                        date: convertTimestampToDate(savingHistory.date).toISOString(),
                    })),
                }));

                dispatch(updateAllSavingsSlice({ savingsData: newSavingsData }));
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setIsLoading(false);
        }
    }, [userUID, dispatch]); // Memoriza la función si userUID o dispatch cambian

    return { fetchAndSetUserData, isLoading };
};
