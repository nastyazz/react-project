import './ServiceDetail.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ServiceDetail = ({ data }) => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/');
      };
  return (
    <div className="service-page">
      <div className="service-card">
        <div className="service-card__image-container">
          <img
            src={data.image}
            alt="Service Image"
            className="service-card__image"
          />
        </div>
        <div className="service-card__content">
          <h1 className="service-card__title">{data.name}</h1>
          <p className="service-card__description">
            {data.description}
          </p>
          <button className="go-home-button" onClick={handleGoHome}></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
