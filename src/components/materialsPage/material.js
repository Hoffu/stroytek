import '../../App.css';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";

function Material() {
    const { id } = useParams();
    const [material, setMaterial] = useState({});
    const [image, setImage] = useState(null);
    const url = 'http://localhost:8080/api/materials/';
    const imageUrl = 'http://localhost:8080/api/image/';

    const getData = useCallback(async () => {
        const response = await fetch(url + id);
        setMaterial(await response.json());
    }, [id]);

    const getImage = useCallback(async () => {
        if(material.img) {
            const res = await fetch(imageUrl + material.img);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImage(imageObjectURL);
        }
    }, [material.img]);

    useEffect(() => {
        getData();
        getImage();
    }, [getImage, getData]);

    return (
        <div className="material">
            <img src={image} alt="" width="600" height="300" className="materialImg" ></img>
            <div>
                <h2>{material.name}</h2>
                <p className="materialText">{material.text}</p>
            </div>
        </div>
    );
}

export default Material;