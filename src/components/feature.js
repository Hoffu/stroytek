function Feature(props) {
    return (
        <div className="feature">
            <img src={props.img} alt="" width="75" height="75"></img>
            <div>
                <b>{props.title}</b><br/>
                <br/>
                {props.text}
            </div>
        </div>
    );
}

export default Feature;