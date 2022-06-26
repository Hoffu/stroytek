import '../../App.css';
import Entry from './entry';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

function Blog() {
    const [entrys, setEntrys] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    const url = 'http://localhost:8080/api/blog';

    const getData = async () => {
        const response = await fetch(url);
        setEntrys(await response.json());
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(entrys.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(entrys.length / itemsPerPage));
    }, [itemOffset, entrys]);

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
                    description={entry.description}
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