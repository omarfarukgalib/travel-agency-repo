import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/navbar_logo.png'
import bannarImg1 from '../../images/banner_image1.jpg'
import bannarImg2 from '../../images/banner_image2.jpg'
import bannarImg3 from '../../images/banner_image3.jpg'

const Header = () => {
    return (
       <nav>
        <div className="navbar bg-primary">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/destination">Destination</Link></li>
      </ul>
    </div>
    <Link className="w-52 px-2 text-xl"><img className="rounded-xl "src={logo} alt="" /></Link>
    
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white font-semibold">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/destination">Destination</Link></li>
    </ul>
  </div>
  <div className="navbar">
    <Link to="/login" className="btn">Login</Link>
  </div>
  <div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn  btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-4 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<div>
<div className="carousel w-3/4 mx-auto h-80 mt-10 rounded-md">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={bannarImg1} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bannarImg2} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={bannarImg3} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
 
</div>
</div>
       </nav>
    );
};

export default Header;