import { cardNamesEnum, userDataType } from "./types"

export const USER_DATA_SLICE_NAME = "userData"

export const DEFAULT_STATE_USER_DATA: userDataType = {
    userEmail: "",
    userName: "",
    userUID: "",
    cards: [
        {
            cardName: cardNamesEnum.nu,
            cardNumber: 2398,
            cardMoney: 30000
        },
        {
            cardName: cardNamesEnum.visa,
            cardNumber: 1864,
            cardMoney: 12000
        },
        {
            cardName: cardNamesEnum.falabella,
            cardNumber: 2351,
            cardMoney: 86500
        },
    ],
    totalBalance: 0,
    totalIncome: 300000,
    totalExpenses: 0
}

// < DebitCard amount = { '30000'} cardNumber = { '2398'} backgroundColor = { '#2D18BF'} logo = { logoNu } textColor = { '#F9F9F9'} />
//     <DebitCard amount={ '12000'} cardNumber = { '1864'} backgroundColor = { '#F2622E'} logo = { logoVisa } textColor = { '#F9F9F9'} />
//         <DebitCard amount={ '86500'} cardNumber = { '2351'} backgroundColor = { '#A8F25D'} logo = { logoFalabella } textColor = { '#391881'} />
//             <DebitCard amount={ '37482'} cardNumber = { '1864'} backgroundColor = { '#F9F9F9'} logo = { logoNequi } textColor = { '#391881'} /> 