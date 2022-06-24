import { useState, useEffect } from 'react';
import '../../App.css';

function Object(props) {
    const [image, setImage] = useState(null);
    const url = 'http://localhost:8080/api/image/';

    const getImage = async () => {
        const res = await fetch(url + props.img);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
      };

    useEffect(() => {
        getImage();
    });

    const handleClick = () => {
        console.log("dsdsds")
    }

    return (
        <div className="object">
            <img src={image} alt="" width="600" height="300" className="objImg"></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className="buttonWrapper">
                    <button className="buttonDetail" onClick={handleClick}>Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default Object;