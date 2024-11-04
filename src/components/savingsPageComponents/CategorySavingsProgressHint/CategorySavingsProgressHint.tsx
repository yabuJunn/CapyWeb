import './CategorySavingsProgressHint.css'

interface CategorySavingsProgressHintProps {
    hintBubbleColor: string,
    hintName: string,
    hintPercentage: string
}

export const CategorySavingsProgressHint = ({ hintBubbleColor, hintName, hintPercentage }: CategorySavingsProgressHintProps) => {

    return <>
        <div className='hint'>
            <div className='color' style={{ backgroundColor: hintBubbleColor }}></div>
            <p>{hintName}</p>
            <p>{hintPercentage}</p>
        </div>
    </>
}