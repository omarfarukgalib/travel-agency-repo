import React from 'react';
import { Link } from 'react-router-dom';
import des1 from '../../images/destination_title_photo1.jpg'
import des2 from '../../images/destination_title_photo2.jpg'
import des3 from '../../images/destination_title_photo3.jpg'
const Destination = () => {
    return (
  <div className='w-full p-14 grid grid-cols-3 gap-4 mx-auto'>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={des1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Trip Title</h2>
    <p className='text-justify'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div className="card-actions justify-start">
      <Link to="/destination1"><button className="btn btn-primary">View Trip</button></Link>
    </div>
  </div>
</div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={des2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Trip Title</h2>
    <p className='text-justify'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div className="card-actions justify-start">
      <Link to="/destination2"><button className="btn btn-primary">View Trip</button></Link>
    </div>
  </div>
</div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={des3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Trip Title</h2>
    <p className='text-justify'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div className="card-actions justify-start">
      <Link to="/destination3"><button className="btn btn-primary">View Trip</button></Link>
    </div>
  </div>
</div>
  </div>
    );
};

export default Destination;