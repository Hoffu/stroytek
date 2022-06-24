import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import Object from "./object";
import '../../App.css';
import img1 from "../../img/392ddaf221499a8cf14c5fc3097354be.jpg";
import img2 from "../../img/0343df85df4792fd22ec38db0d57bf1d-3.jpg";
import img3 from "../../img/fccbfede210dfd4ee440c602740bc7f0.jpg";
import img4 from "../../img/46692fe4172f63a55dd5249e6c7625b0-1.jpg";
import img5 from "../../img/a20abe3b3696a89cd1e4f4f4f6a5b902.jpg";
import img6 from "../../img/439db7569862096e269d7ad53fff5d74.jpg";
import img7 from "../../img/86e659a91c876c86234c04c946a18693.jpg";
import img8 from "../../img/7a398434e48b206feaf996f0cfbb5743-1024x819.jpg";
import img9 from "../../img/75435a6bd6c5890fa7b8012858b1bf00-1024x498.jpg";
import img10 from "../../img/72866919db4e3c2878aed4d6b0434470.jpg";

let objects = [
    {
        title: "Дом из газобетонных блоков 137 кв.м.",
        img: img1,
        price: "6 671 900",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "Монолитный фундамент",
            "Коробка дома из блоков",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом в стиле хай-тек 123 кв.м",
        img: img2,
        price: "5 990 100",
        completedWork: [
            "Разработка индивидуального проекта",
            "УШП-фундамент",
            "Коробка дома из блоков",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из газобетона под ключ 133 кв.м.",
        img: img3,
        price: "6 477 100",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "УШП-фундамент",
            "Коробка дома из газобетона",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из газобетона под ключ 90 кв.м.",
        img: img4,
        price: "5 058 000",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "УШП-фундамент",
            "Коробка дома",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из блоков 227 кв.м.",
        img: img5,
        price: "10 687 500",
        completedWork: [
            "Выравнивание участка",
            "Ленточный фундамент",
            "Коробка дома",
            "Инженерные коммуникации",
            "Фасадные и кровельные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из газобетона 137 кв.м.",
        img: img6,
        price: "6 671 900",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "Монолитный фундамент",
            "Коробка дома из блоков",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из газобетона под ключ 128 кв.м.",
        img: img7,
        price: "6 233 600",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "УШП-фундамент",
            "Коробка дома из блоков",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из газобетона 240 кв.м.",
        img: img8,
        price: "9 000 000",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "Плитный фундамент",
            "Коробка дома из газобетонных блоков",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Двухэтажный дом из СИП панелей 167 кв.м. «Рокфор»",
        img: img9,
        price: "5 711 400",
        completedWork: [
            "Ленточный фундамент",
            "Коробка дома из сип-панелей",
            "«Теплый пол»",
            "Организация инженерных коммуникаций",
            "Кровельные работы",
            "Внешняя отделка",
            "Внутренняя отделка"
        ]
    },
    {
        title: "Дом из газобетона 82 кв.м.",
        img: img10,
        price: "4 608 400",
        completedWork: [
            "Корректировка проекта, предоставленного заказчиком",
            "Монолитный фундамент",
            "Коробка дома из блоков",
            "Организация инженерных коммуникаций",
            "Фасадные работы",
            "Установка окон и входной двери",
            "Внутренняя отделка"
        ]
    },
];
objects = [...objects, ...objects.reverse()];

function Projects() {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(objects.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(objects.length / itemsPerPage));
    }, [itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % objects.length;
        setItemOffset(newOffset);
    };    

    return (
        <div>
            {currentItems?.map((object, index) => {
                return <Object
                    key={index}
                    img={object.img}
                    title={object.title}
                    price={object.price}
                    completedWork={object.completedWork}
                />
            })}
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default Projects;