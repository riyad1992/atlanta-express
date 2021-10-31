import React from 'react';
import banner from '../../../images/about.jpg'

const About = () => {
    return (
        <div className='container'>
            <h1 className='mb-0'>About Us</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <div className='row'>
                <div className='col-12 col-md-6 p-4'><img src={banner} alt='' style={{width:'100%', borderRadius:'20px'}}/>

                </div>
                <div className='col-12 col-md-6'>
                    <h2>Atlanta Express</h2>
                    <p className='p-3'>We are so excited to announce to future guests that we are approved as a Gold Standard Tour Operator in the Tourism Industry. Our staff members have been practicing every guideline required by the Belize Tourism Board in the new health and safety protocols presented by COVID-19. Would you like to experience The Spirit of the Natural Adventure?  That is our goal here at cavetubing.bz. My name is Vitalino Reyes, and I have been a Licensed Tour Guide in Belize since 1998 and have been actually doing tours since 1995. I would like for you to experience Belize as nature made her, as natural as possible.</p>
                </div>
            </div>
        </div>
    );
};

export default About;