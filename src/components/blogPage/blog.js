import '../../App.css';
import Entry from './entry';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import img1 from "../../img/7b9208673053a275f512fd4e16c4df85.jpg";
import img2 from "../../img/99d302b6f7be4c46da858f5a4b4534dc.jpg";
import img3 from "../../img/acbdbc317678520aa0dbdeb03c09eee8.jpg";
import img4 from "../../img/4e13d4a83bf615df844481ed0c4a3ed1.jpg";
import img5 from "../../img/8a08eb2346d7b7dbf68c1e9a48e53c5b.jpg";
import img6 from "../../img/2715840fca5690e90d13cabf240e9c2c.jpg";
import img7 from "../../img/171605e711d44010afaa17d04934e7de.jpg";
import img8 from "../../img/d235a1aeeed56ad7048afed87acbdbe2.jpg";
import img9 from "../../img/104cf0736042bdcf1b99890144fe3722.jpg";
import img10 from "../../img/dad3cf2cb00aef78f09c764a5cf9d970.jpg";

let entrys = [
    {
        img: img1,
        title: "Что нужно знать о строительстве загородного дома в стиле Хай Тек",
        date: "22 мая 2022",
        text: "Хотите загородный дом в стиле хай тек? В данной статье вы узнаете об архитектурных тонкостях и особенностях строительства домов в этом стиле."
    },
    {
        img: img2,
        title: "Газобетон или теплая керамика? Какой материал выбрать для строительства загородного дома",
        date: "13 мая 2022",
        text: "На вопрос о выборе строительного материала отвечает архитектор нашей компании Анастасия Багаутдинова."
    },
    {
        img: img3,
        title: "Дом в стиле барнхаус: идеи для смелых и креативных",
        date: "29 апреля 2022",
        text: "Стиль барнхаус становится все более популярен, ведь он позволяет в полной мере оценить комфорт и свободу загородной жизни."
    },
    {
        img: img4,
        title: "Загородный дом с плоской крышей: особенности строительства и эксплуатации",
        date: "16 апреля 2022",
        text: "Дома с плоскими крышами очень популярны в загородном домостроении. Однако их строительство и эксплуатация имеют ряд особенностей, о которых надо знать заказчикам, решившим выбрать такое архитектурное решение для своего проекта."
    },
    {
        img: img5,
        title: "Современные загородные дома в английском стиле",
        date: "02 апреля 2022",
        text: "Мечтаете о загородном доме в английском стиле? Обратите внимание на архитектурные особенности, придающие дому этот узнаваемый благородно-сдержанный вид."
    },
    {
        img: img6,
        title: "Какие фундаменты используются в малоэтажном загородном строительстве",
        date: "25 марта 2022",
        text: "Основные типы и характеристики фундаментов. Как определяется тип фундамента для конкретного дома. Этапы фундаментных работ."
    },
    {
        img: img7,
        title: "Строительство домов из газобетона",
        date: "09 марта 2022",
        text: "Популярность газобетона объясняется его эксплуатационными и техническими характеристиками, а также заметной доступностью по цене.  Даже возведение коттеджа в несколько сотен квадратов не покажется таким уж затратным."
    },
    {
        img: img8,
        title: "Строительство панельно-каркасных домов",
        date: "18 февраля 2022",
        text: "Огромное количество людей по всему миру сейчас все чаще делают свой выбор в пользу каркасных домов.  Каркасная технология строительства была изобретена в Канаде, откуда быстро распространилась по всей Америке и пришла в Европу."
    },
    {
        img: img9,
        title: "Зимнее строительство из керамических блоков",
        date: "26 января 2022",
        text: "Если вы не успели закончить стройку до наступления холодов, не отчаивайтесь – может быть, целесообразно не «замораживать» ее, а продолжить зимой?"
    },
    {
        img: img10,
        title: "Ценовой хаос на рынке загородного домостроения",
        date: "15 января 2022",
        text: "Многие у нас спрашивают, каким образом формируется ценообразование строительства коттеджа. Поэтому мы предлагаем окунуться в мир строительных работ."
    }
];
entrys = [...entrys, ...entrys.reverse()];

function Blog() {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(entrys.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(entrys.length / itemsPerPage));
    }, [itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % entrys.length;
        setItemOffset(newOffset);
    };    

    return (
        <div className="blog">
            {currentItems?.map((entry, index) => {
                return <Entry
                    key={index}
                    img={entry.img} 
                    title={entry.title}
                    date={entry.date}
                    text={entry.text}
                />;
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

export default Blog;