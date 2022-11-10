import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Dtal from '../Dtal/Dtal';



const ServiceDetails = () => {
  const service = useLoaderData()
    const{details,details_img,another_details,list_1,list_2,list_3,list_4,list_5} = service
   
    return (
        <div className='mt-12'>
           <h3 className='text-4xl font-semibold'>Our Trip Features : </h3>
        <div className='text-justify'>
            <p className='p-10'>{details}</p>
          <div className='grid grid-cols-2 gap-8 p-10'>
          <div className='mt-16'>
            <p className='text-xl'>{another_details}</p>
            <ul className='text-justify font-semibold mt-6'>
                <li> {list_1}</li>
                <li> {list_2}</li>
                <li> {list_3}</li>
                <li> {list_4}</li>
                <li> {list_5}</li>
            </ul>
            </div>
            <img src={details_img} alt="" />
          </div>

        </div>
           
        </div>
    );
};

export default ServiceDetails;