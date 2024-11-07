import { savingSliceType, savingType } from "./types"

import fireIconWhite from '../../assets/svg/fireIconWhite.svg'
import planetIconBlack from '../../assets/svg/planetIconBlack.svg'
import KeyIconWhite from '../../assets/svg/KeyIconWhite.svg'

export const SAVINGS_SLICE_NAME = "savings"

export const DEFAULT_STATE_SAVINGS: savingSliceType = {
    savingsData: [
        {
            savingName: "Party", savingValue: 40, savingColor: "#2D18BF", savingPercentage: "40%", savingImage: fireIconWhite, monthlySaving: 50000, savingActualFee: 100000, savingTotalFee: 600000,
            savingHistory: [
                {
                    date: 'Miercoles 04 de Septiembre',
                    deposit: 50000
                },
                {
                    date: 'Domingo 04 de Agosto',
                    deposit: 50000
                }
            ]
        },
        {
            savingName: "Trip", savingValue: 28, savingColor: "#A8F25D", savingPercentage: "28%", savingImage: planetIconBlack, monthlySaving: 20000, savingActualFee: 40000, savingTotalFee: 480000,
            savingHistory: [
                {
                    date: 'Lunes 02 de Septiembre',
                    deposit: 20000
                },
                {
                    date: 'Sabado 03 de Agosto',
                    deposit: 20000
                },
            ]
        },
        {
            savingName: "Motorbike", savingValue: 27, savingColor: "#F2622E", savingPercentage: "27%", savingImage: KeyIconWhite, monthlySaving: 100000, savingActualFee: 400000, savingTotalFee: 1000000,
            savingHistory: [
                {
                    date: 'Miercoles 04 de Agosto',
                    deposit: 100000
                },
            ]
        },
        {
            savingName: "Others", 
            savingValue: 5, 
            savingColor: "#C4C4C4", 
            savingPercentage: "5%",
            savingImage: '',
            monthlySaving: 0,
            savingActualFee: 0,
            savingTotalFee: 0,
            savingHistory: []
        }
    ]
}