import './Quote.css';

function Quote() {
    const quote = ["‘Your best and wisest refuge from all troubles is in your science.’", "Ada Lovelace"]

    return <div className="quote">
        <h2>{quote[0]}</h2>
        <p>{quote[1]}</p>
    </div>
}

export default Quote;