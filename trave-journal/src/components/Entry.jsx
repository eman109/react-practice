export default function Entry(props){

    return(
        <main className="entry">
            <div className="landscape-container">
                <img src={props.entry.img.src} alt={props.entry.img.alt}/>
            </div>
            
            <div className="div2">
            <div className="location">
                <img src="src/assets/marker.png" alt="path"/>
                <span>{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
            </div>
            <h1>{props.entry.title}</h1>
            <span>{props.entry.dates}</span>
            <p>{props.entry.text}</p>
            </div>
        </main>
    )
}

