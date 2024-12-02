import { useState } from "react";
import { Pagination } from "@consta/uikit/Pagination";
import Service from "../service/Service";
import './ServicesList.css';

const NewsList = ({ data }) => {
    const itemsPerPage = 3;
    const countPage = Math.ceil(data.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentDate = data.slice(startIndex, endIndex);

    return (
        <div className='services-list'>
            <div className="news-list">
                {currentDate.map((item) => (
                    <div className='news-item' key={item.id}>
                        <Service data={item} />
                    </div>
                ))}
            </div>
            <Pagination
                items={countPage}
                value={currentPage}
                onChange={setCurrentPage}
                arrows={[true, true]}
                className='services-pagination'
            />
        </div>
    );
}

export default NewsList;
