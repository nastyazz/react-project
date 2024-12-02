import './Service.css';
import { NavLink } from 'react-router-dom';

const Service = ({ data }) => {
  return (
    <div className="service-card">
      <div className="service-card__image-container">
        <img
          src={data.image}
          alt="Service Image"
          className="service-card__image"
        />
      </div>
      <div className="service-card__content">
        <NavLink to={`${data.id}`}>
          <h3 className="service-card__title">{data.name}</h3>
        </NavLink>
        <p className="service-card__description">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Service;
