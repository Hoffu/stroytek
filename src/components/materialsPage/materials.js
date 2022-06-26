import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../App.css';

function Materials() {
    const [materials, setMaterials] = useState(null);
    const url = 'http://localhost:8080/api/materials';
    const navigate = useNavigate();

    const getData = async () => {
        const response = await fetch(url);
        setMaterials(await response.json());
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="materials">
            <h2>Строительные материалы — Виды, классификация, характеристики</h2>
            <div className="list">
                <ul>
                    {materials?.map(material => {
                        return (
                            <li 
                                key={material.id}
                                className="linkToMaterial"
                                onClick={() => navigate('/materials/' + material.id)}
                                >
                                {material.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Materials;