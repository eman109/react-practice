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
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <span>{props.dates}</span>
            <p>{props.text}</p>
            </div>
        </main>
    )
}

