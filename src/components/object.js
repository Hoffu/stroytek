import '../App.css';

function Object(props) {
    return (
        <div className="object">
            <img src={props.img} alt="" width="800" height="400" className="objImg"></img>
            <div>
                <h2>{props.title}</h2>
                <p className="date">{props.price} руб.</p>
                <h3>В стоимость вошли работа и материалы:</h3>
                <div className="list">
                    <ul>
                        {props.completedWork.map((work, index) => {
                            return <li key={index}>{work}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Object;