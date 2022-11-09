import React from 'react';
import img from '../../images/mytravelport-400.jpg'
const Destination1 = () => {
    return (
        <div className='grid grid-cols-2 p-14 text-justify gap-10'>
            <div>
            <p>
            Welcome to your all-inclusive destination for managing everything Travelport. MyTravelport is a self-service portal where agents and suppliers can access key insights, find tools, and request support — all through a single sign-on. And, since no two customers are the same, MyTravelport can be set up to complement your role or function.
            </p>
            <div>
                <p>MyTravelport puts you in the driver’s seat. These features give you the power to easily access what you need, helping decision-making and improving business performance.</p><br />
                
                <div className='px-16 text-justify'>
                <li>
                Single sign on for all Travelport web-based applications
                Self-service on/off boarding, administration of all users and account profile permissions, and manage organization settings
                </li>
                <li>
                Access to performance data, bills, and payments
                </li>
                <li>
                Access to Travelport’s knowledge base and training
                </li>
                <li>
                View alerts, news and events
                </li>
                <li>
                Create support requests
                </li>
                </div>
                
            </div>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Destination1;