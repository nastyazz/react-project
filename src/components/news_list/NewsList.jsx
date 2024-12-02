import React, { useState } from "react";
import "./NewsList.css";

const NewsList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!data || data.length === 0) {
    return <p>Нет новостей для отображения.</p>;
  }

  return (
    <div className="news-container">
      <div className="news-list">
        {currentItems.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <h3 className="news-title">{newsItem.name}</h3>
            <p className="news-description">{newsItem.description}</p>
            <small className="news-date">
              Опубликовано: {new Date(newsItem.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Предыдущая
        </button>
        <span className="page-number">
          Страница {currentPage} из {Math.ceil(data.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          className="pagination-button"
        >
          Следующая
        </button>
      </div>
    </div>
  );
};

export default NewsList;
