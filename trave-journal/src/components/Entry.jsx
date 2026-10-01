export default function Entry(props){

    return(
        <main className="entry">
            <div className="landscape-container">
                <img src={props.img.src} alt={props.img.alt}/>
            </div>
            
            <div className="div2">
            <div className="location">
                <img src="src/assets/marker.png" alt="path"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <span>{props.dates}</span>
            <p>{props.text}</p>
            </div>
        </main>
    )
}

