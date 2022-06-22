import '../App.css';

function Entry(props) {
    return (
        <div className="entry">
            <img src={props.img} alt="" width="400" height="230" className="objImg"></img>
            <div>
                <h2>{props.title}</h2>
                <p className="date">{props.date}</p>
                <p>{props.text}</p>
                <div className="buttonWrapper">
                    <button className="buttonDetail">Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default Entry;