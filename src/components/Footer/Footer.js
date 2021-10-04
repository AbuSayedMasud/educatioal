// footer page
import React from 'react';
import './footer.css'
const Footer = () => {
    return (

        <div className="bg-dark bg-gradient text-white p-5">
            <div className="container">
                <div className="row">
                    {/* contact-area */}
                    <div className="col-md-5 offset-md-1  col-sm-6 text-start list-unstyled">
                        <h2 className="border-1 text-white ">Contact Us</h2>

                        <address>Address : Spring Store London Oxford Street, 012 United Kingdom</address>
                        <p>Mobile : +2474535622</p>
                        <p>Mail : sayedamasud1996@gmail.com</p>
                        <p>Fax : 020032523</p>
                    </div>

                    {/* userful link area */}
                    <div className="col-md-4 offset-md-2  col-sm-6 text-start">
                        <h2 className="border-2 text-white">Useful Links</h2>
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none text-white" href="https://mbstu.ac.bd/" targrt="_blank">BBA</a></li>
                            <li ><a className="text-decoration-none text-white" href="https://mbstu.ac.bd/\" targrt="_blank">M.COM</a></li>
                            <li ><a className="text-decoration-none text-white" href="https://mbstu.ac.bd/" targrt="_blank">B.com</a></li>
                            <li ><a className="text-decoration-none text-white" href="https://mbstu.ac.bd/" targrt="_blank">Accounts</a></li>
                            <li ><a className="text-decoration-none text-white" href="https://mbstu.ac.bd/" targrt="_blank">CSE</a></li>
                        </ul>


                    </div>
                </div>
            </div>
        </div >

    );
};

export default Footer;