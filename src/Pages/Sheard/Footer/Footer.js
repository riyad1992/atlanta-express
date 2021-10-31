import React from 'react';
import logo from '../../../images/atlanta-logo.png'

const Footer = () => {
    return (
        <div className='bg-info p-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 d-flex'>
                        <img src={logo} alt='' style={{height:'50px'}}/>
                        <h2>Atlanta Express</h2>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h2>Travel Specialist</h2>
                        <ul>
                            <li>FirstClass Buses</li>
                            <li>Best Tour Guide</li>
                            <li>High experience Driver</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h2>Newsletter</h2>
                        <small><p>inspiration, ideas, news, and your feedback</p></small>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Email" aria-label="" aria-describedby="button-addon2"/>
                            <br/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                        </div>
                        <p>+159885456578</p>
                        <p>support@atlantaexpress.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;