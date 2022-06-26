import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../../App.css';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const url = 'http://localhost:8080/api/objects/';
    const imageUrl = 'http://localhost:8080/api/image/';

    const getProject = useCallback(async () => {
        const response = await fetch(url + id);
        setProject(await response.json());
    }, [id]);

    const getImage = useCallback(async () => {
        if(project.img) {
            const res = await fetch(imageUrl + project.img);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImage(imageObjectURL);
        }
    }, [project.img]);

    useEffect(() => {
        getProject();
        getImage();
    }, [getProject, getImage]);

    const clickHandle = () => {
        navigate('/order?id=' + id);
    }

    return (
        <>
            <div className="project">
                <img src={image} alt="" width="600" height="300" className="objImg"></img>
                <div>
                    <h2>{project.name}</h2>
                    <p className="date">{project.price} руб.</p>
                    <h4>Описание проекта</h4>
                    <p>{project.description}</p>
                </div>
            </div>
            <div className="description">
                <div className="list">
                    <h4>Характеристики:</h4>
                    <ul>
                        <li>
                            <p>Тип: {project.type}</p>
                        </li>
                        <li>
                            <p>Количество этажей: {project.floors}</p>
                        </li>
                        <li>
                            <p>Площадь: {project.square} кв. м.</p>
                        </li>
                        <li>
                            <p>Материал стен: {project.walls}</p>
                        </li>
                        <li>
                            <p>Фундамент: {project.foundation}</p>
                        </li>
                        <li>
                            <p>Каркас: {project.frame}</p>
                        </li>
                        <li>
                            <p>Крыша: {project.roof}</p>
                        </li>
                        <li>
                            <p>Окна: {project.windows}</p>
                        </li>
                        <li>
                            <p>Двери: {project.doors}</p>
                        </li>
                    </ul>
                </div>                
                <div className="buttonWrapper">
                    <button className="orderButton" onClick={clickHandle}>Оформить заявку</button>
                </div>
            </div>
        </>
    );
}

export default Project;