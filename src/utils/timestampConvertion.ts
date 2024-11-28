import { Timestamp } from "firebase/firestore";

export const convertTimestampToDate = (timestamp: Timestamp) => {
    return new Date(timestamp.seconds * 1000); // Convierte a milisegundos y lo retorna convertido a una date
};

export const formatDate = (dateString: string) => new Date(dateString)
