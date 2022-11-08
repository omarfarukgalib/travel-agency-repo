import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
     <div>
        <div>
            <h2 className='text-4xl mt-5 font-semibold'>Our Services Guide</h2>
        </div>
           <div className=' grid grid-cols-3 gap-2'>
            
            {
                services.map(service=><Service key={service._id}
                service={service}
                ></Service>)
            }
        </div>
     </div>
    );
};

export default Services;