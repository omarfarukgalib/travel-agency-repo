import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{title_img,title,segment,_id} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={title_img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{segment}</p>
          <div className="card-actions">
            <Link to={`/services/${_id}`}><button className="btn btn-primary">Service Details</button></Link>
          </div>
          
        </div>
      </div>
    );
};

export default Service;