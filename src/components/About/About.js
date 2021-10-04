import React from 'react';
import { Accordion } from 'react-bootstrap';
import about from '../../images/about-1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic5.jpg'
import pic6 from '../../images/pic6.jpg'
import pic7 from '../../images/pic7.jpg'
import './about.css'

const About = () => {
    return (
        <div className="about-area py-5">
            <div className="container">
            {/* Class Facilities */}
                <div className="row">
                    <div className="col-md-6 text-start mt-5">
                        <h2 className="mb-3 text-warning fs-2">World Class Facilities</h2>
                        <p className="text fw-normal mb-5">The concept of school and pre-school education consists of 3 programs of development and training in our academy.The concept of school and pre-school education consists of 3 programs of development</p>
                        <div >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>500 new items in the toy collection</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Throwing birthday parties is fun and easy</Accordion.Header>
                                    <Accordion.Body>

                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Multiple benefits from buying a membership</Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Over 1 000 visitors for the last year</Accordion.Header>
                                    <Accordion.Body>

                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={about} alt="" width='100%' />
                    </div>
                </div>
                {/* photo gallary area */}
                <div className="image-area my-5">
                    <div className="pt-5 text-center">
                        <h2 className="text-info">Gallery of our classes</h2>
                        <p className="fs-5">We provide three classes with nine to twenty  children each aged  <br />twelve months to six years of age.</p>
                    </div>
                    <div className="py-3">
                        <div className="row">
                            <div className="col-md-4 my-2"><img src={pic2} width="100%" className="img-thumbnail" alt="" /></div>
                            <div className="col-md-4 my-2"><img src={pic3} width="100%" className="img-thumbnail" alt="" /></div>
                            <div className="col-md-4 my-2"><img src={pic4} width="100%" className="img-thumbnail " alt="" /></div>
                            <div className="col-md-4 my-2"><img src={pic5} width="100%" className="img-thumbnail" alt="" /></div>
                            <div className="col-md-4 my-2"><img src={pic6} width="100%" className="img-thumbnail" alt="" /></div>
                            <div className="col-md-4 my-2"><img src={pic7} width="100%" className="img-thumbnail" alt="" /></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;