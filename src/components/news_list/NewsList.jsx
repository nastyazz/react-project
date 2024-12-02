import React, { useState } from "react";
import "./NewsList.css";  // Импортируем CSS файл для стилей

const NewsList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Количество новостей на одной странице

  // Функция для получения новостей для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Функция для перехода на следующую страницу
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Функция для перехода на предыдущую страницу
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Если данных нет
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
