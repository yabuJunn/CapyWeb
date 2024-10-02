import './uniqueFeatureCard.css'

interface UniqueFeatureCardProps {
    text: string,
    image: string,
    colorBackgrounIcon: string
}

export const UniqueFeatureCard = ({ text, image, colorBackgrounIcon }: UniqueFeatureCardProps) => {
    
    return <>
        <div className="uniqueFeatureCardContainer">
            <div className="featureImage">
                <img src={image} alt="" style={{ backgroundColor: colorBackgrounIcon }} />
            </div>
            <p>{text}</p>
            <a href="">Learn More</a>

        </div>
    </>
}