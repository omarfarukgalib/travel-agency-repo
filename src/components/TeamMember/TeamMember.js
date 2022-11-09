import React from 'react';
import img1 from '../../images/team_member1.jpg'
import img2 from '../../images/team_member2.jpg'
import img3 from '../../images/team_member3.jpg'
import img4 from '../../images/team_member4.jpg'

const TeamMember = () => {
    return (
        <div>
            <p className='mt-10 text-3xl font-semibold'>Our Team Member Description</p>
  <div className="mt-10 w-[600px] mx-auto border-2 hero-content flex-col lg:flex-row">
    <img className="w-32" src={img1} alt="" />
    <div>
      <h1 className="text-2xl pt-2 text-primary font-bold text-start ">Title</h1>
      <p className="font-semibold pb-3 w-96 text-justify">This is a medium card text area that works well for team member information, services, preferred suppliers or industry affiliations.</p>
    </div>
  </div>
  <div className="w-[600px] mx-auto border-2  hero-content flex-col lg:flex-row">
    <img className="w-32" src={img3} alt="" />
    <div>
      <h1 className="text-2xl pt-2 text-primary font-bold text-start ">Title</h1>
      <p className="font-semibold pb-3 w-96 text-justify">This is a medium card text area that works well for team member information, services, preferred suppliers or industry affiliations.</p>
    </div>
  </div>
  <div className="w-[600px] mx-auto border-2  hero-content flex-col lg:flex-row">
    <img className="w-32" src={img4} alt="" />
    <div>
      <h1 className="text-2xl pt-2 text-primary font-bold text-start ">Title</h1>
      <p className="font-semibold pb-3 w-96 text-justify">This is a medium card text area that works well for team member information, services, preferred suppliers or industry affiliations.</p>
    </div>
  </div>
  <div className="w-[600px] mx-auto border-2  hero-content flex-col lg:flex-row">
    <img className="w-32" src={img2} alt="" />
    <div>
      <h1 className="text-2xl pt-2 text-primary font-bold text-start ">Title</h1>
      <p className="font-semibold pb-3 w-96 text-justify">This is a medium card text area that works well for team member information, services, preferred suppliers or industry affiliations.</p>
    </div>
  </div>
  


        </div>
    );
};

export default TeamMember;