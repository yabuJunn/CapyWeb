export interface userDataType {
    userEmail: string,
    userName: string,
    userUID: string
    cards: Array<cardType>
}

export interface cardType {
    cardName: cardNamesEnum,
    cardNumber: number,
    cardMoney: number
}

enum cardNamesEnum {
    nu = "Nu",
    visa = "Visa",
    falabella = "Falabella",
    nequi = "Nequi"
}