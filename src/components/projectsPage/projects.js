import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import Object from "./object";
import '../../App.css';

function Projects() {
    const [objects, setObjects] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    const url = 'http://localhost:8080/api/objects';

    const getData = async () => {
        const response = await fetch(url);
        setObjects(await response.json());
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(objects.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(objects.length / itemsPerPage));
    }, [itemOffset, objects]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % objects.length;
        setItemOffset(newOffset);
    };    

    return (
        <div>
            {currentItems?.map((object, index) => {
                return <Object
                    id={object.id}
                    key={index}
                    img={object.img}
                    name={object.name}
                    price={object.price}
                    description={object.description}
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