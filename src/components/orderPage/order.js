import '../../App.css';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from 'react';

function Order() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [project, setProject] = useState({});
    const [order, setOrder] = useState({
        full_name: '',
        phone: '',
        email: '',
        wishes: '',
        object_id: searchParams.get('id')
    });
    const url = 'http://localhost:8080/api/objects/';
    const putUrl = 'http://localhost:8080/api/order';

    const createOrder = async (data) => {
        const response = await fetch(putUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if(response.ok) {
            navigate('/finish_order');
        }
    }

    const getProject = useCallback(async () => {
        const response = await fetch(url + searchParams.get('id'));
        setProject(await response.json());
    }, [searchParams]);

    useEffect(() => {
        getProject();
    }, [getProject]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setOrder({...order, [name]: value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createOrder(order);
    }

    return (
        <div className="order">
            <h2>ОФОРМИТЬ ЗАЯВКУ</h2>
            <p>{project.name}</p>
            <p>Примерная цена: {project.price} руб.</p>
            <p>После оформления заявки с Вами свяжутся по телефону и договорятся о встречи и проведении замеров, а также составлении плана работ. </p>
            <form onSubmit={handleSubmit} className="formWrapper">
                <label>
                    Как к Вам обращаться:
                    <input className="inputOrder" name="full_name" type="text" placeholder="Иван Иванович" value={order.name} onChange={handleChange} />
                </label>
                <label>
                    Ваш телефон:
                    <input className="inputOrder" name="phone" type="text" placeholder="+7 (999) 555-22-11" value={order.phone} onChange={handleChange} />
                </label>
                <label>
                    Адрес электронной почты:
                    <input className="inputOrder" name="email" type="text" placeholder="ivan@gmail.ru" value={order.email} onChange={handleChange} />
                </label>
                <label>
                    Ваши пожелания:
                    <textarea className="inputOrder" name="wishes" rows="7" cols="50" placeholder="Перезвоните завтра с 16:00 до 18:00" value={order.wishes} onChange={handleChange}></textarea>
                </label>
                <input className="submitOrder" type="submit" value="Отправить" />
            </form>
        </div>
    );
}

export default Order;