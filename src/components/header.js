import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Header() {
    return (
        <div className="header">
            <Link to="/" className="text-link">
                Главная
            </Link>
            <Link to="/about" className="text-link">
                О компании
            </Link>
            <Link to="/projects" className="text-link">
                Проекты
            </Link>
            <Link to="/documents" className="text-link">
                Документация
            </Link>
            <Link to="/blog" className="text-link">
                Блог
            </Link>
            <Link to="/privacy_policy" className="text-link">
                Политика конфиденциальности
            </Link>
        </div>
    );
}
  
export default Header;