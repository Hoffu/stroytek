import '../../App.css';
import { useState, useEffect, useCallback } from 'react';

function Entry(props) {
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
        <div className="entry">
            <img src={image} alt="" width="400" height="230" className="objImg"></img>
            <div>
                <h2>{props.title}</h2>
                <p className="date">{props.date}</p>
                <p>{props.description}</p>
                <div className="buttonWrapper">
                    <button className="buttonDetail">Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default Entry;