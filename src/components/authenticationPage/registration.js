import { useState } from 'react';
import '../../App.css';

function Registration(props) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [warning, setWarning] = useState(false);
    const url = 'http://localhost:8080/api/user';

    const addUser = async (data) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if(response.ok) props.setReg(false);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    const handleChangePassConfirm = (event) => {
        setPasswordConfirm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.values(user).every(value => value.length > 0) 
            && user.password === passwordConfirm) {
            addUser(user)
        } else {
            setWarning(true);
        }
    }

    return (
        <div className="authentication">
            <h2>Пожалуйста, заполните форму регистрации</h2>
            <form className="formWrapper" onSubmit={handleSubmit}>
                <label>
                    <p>Имя</p>
                    <input className="inputOrder" type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <label>
                    <p>E-mail адрес</p>
                    <input className="inputOrder" type="text" name="email" value={user.email} onChange={handleChange} />
                </label>
                <label>
                    <p>Номер телефона</p>
                    <input className="inputOrder" type="text" name="phone" value={user.phone} onChange={handleChange} />
                </label>
                <label>
                    <p>Пароль</p>
                    <input className="inputOrder" type="password" name="password" value={user.password} onChange={handleChange} />
                </label>
                <label>
                    <p>Повторите пароль</p>
                    <input className="inputOrder" type="password" name="passwordRepeat" value={passwordConfirm} onChange={handleChangePassConfirm} />
                </label>
                <div>
                    <button className="submitOrder" type="submit">Зарегистрироваться</button>
                </div>
            </form>
            {warning ? <h2 className="warning">Поля заполнены неправильно!</h2> : <></>}
        </div>
    );
}

export default Registration;