import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

function Object(props) {
    const [image, setImage] = useState(null);
    const url = 'http://localhost:8080/api/image/';

    const getImage = useCallback(async () => {
        const res = await fetch(url + props.img);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
    }, [props.img]);

    useEffect(() => {
        getImage();
    }, [getImage]);

    return (
        <div className="object">
            <img src={image} alt="" width="600" height="350" className="objImg"></img>
            <div>
                <h2>{props.name}</h2>
                <p className="date">{props.price} руб.</p>
                <p>{props.description}</p>
                <div className="buttonWrapper">
                    <Link to={"/projects/" + props.id}>
                        <button className="buttonDetail">Подробнее</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Object;