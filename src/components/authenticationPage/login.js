import '../../App.css';
import { useState } from 'react';
import Registration from './registration';

function Login(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [reg, setReg] = useState(false);
    const [warning, setWarning] = useState(false);
    const url = 'http://localhost:8080/api/verify';

    const verifyUser = async (data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data)
        });
        let token = await response.text();
        props.setToken(token);
        return token;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        verifyUser(user).then(result => {
            if(!result) setWarning(true);
        });
    }

    return (
        <div>
            {reg ? <Registration setReg={setReg} /> : 
                <div className="authentication">
                    <h2>Пожалуйста, войдите</h2>
                    <form className="formWrapper" onSubmit={handleSubmit}>
                        <label>
                            <p>E-mail адрес</p>
                            <input className="inputOrder" type="text" name="email" value={user.email} onChange={handleChange} />
                        </label>
                        <label>
                            <p>Пароль</p>
                            <input className="inputOrder" type="password" name="password" value={user.password} onChange={handleChange} />
                        </label>
                        <div>
                            <button className="submitOrder" type="submit">Войти</button>
                        </div>
                    </form>
                    <button className="submitOrder" onClick={(e) => {setReg(true)}}>Зарегистрироваться</button>
                    {warning ? <h2 className="warning">Такого пользователя не существует!</h2> : <></>}
                </div>
            }
        </div>
    );
}

export default Login;