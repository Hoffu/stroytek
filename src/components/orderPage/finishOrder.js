import '../../App.css';
import { useNavigate } from "react-router-dom";

function FinishOrder() {
    const navigate = useNavigate();

    const clickHandle = () => {
        navigate('/');
    }

    return (
        <div className="finishOrder">
            <h2>Заявка успешно размещенна</h2>
            <h4>С Вами свяжутся в ближайшее время</h4>
            <button className="orderButton" onClick={clickHandle}>Перейти на главную</button>
        </div>
    );
}

export default FinishOrder;