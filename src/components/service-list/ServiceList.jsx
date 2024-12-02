import { useState } from "react";
import Service from "../service/Service";
import './ServiceList.css';

const NewsList = ({ data }) => {
  const itemsPerPage = 3;
  const countPage = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < countPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="services-list">
      <div className="news-list">
        {currentItems.map((item) => (
          <div className="news-item" key={item.id}>
            <Service data={item} />
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Предыдущая
        </button>
        <span className="page-number">
          Страница {currentPage} из {countPage}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === countPage}
          className="pagination-button"
        >
          Следующая
        </button>
      </div>
    </div>
  );
};

export default NewsList;
