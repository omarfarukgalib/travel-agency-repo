import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const loader = useLoaderData()
    const{title_img,title,segment,_id} = loader
    return (
        <div className='grid grid-cols-3'>
           {
            loader.map(load=>   <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={load.title_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{load.title}</h2>
              <p>{load.segment}</p>
              <div className="card-actions">
                <Link to={`/services/${load._id}`}><button className="btn btn-primary">Service Details</button></Link>
              </div>
              
            </div>
          </div>)
           }
        </div>
        
    );
};

export default Home;