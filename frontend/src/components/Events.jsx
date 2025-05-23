
import './Event.css'
export const Events = ({ event }) => {
    return (

        <div className="event-banner">
            <div
                className="event-banner-image"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
            >
                <div className="event-banner-overlay">
                    <h1 className="event-name">{event.name}</h1>
                    <p className="event-date">{event.date}</p>
                </div>
            </div>
            <div className="event-learn-more">
                
                <p>{event.description}</p>
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>

    )
}