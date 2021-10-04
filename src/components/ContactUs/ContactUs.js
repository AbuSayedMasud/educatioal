import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
    return (

        <div className="contact-area py-5 bg-light">
            <div className="container ">
                {/* contact-us area */}
                <h2 className="text-info">Contact Us</h2>
                <div className="text-start ">
                    <Form>
                        <div className="row py-2 mt-4">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="fs-4">Name </Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="fs-4">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </div>
                        </div>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fs-4">Add Your Commnent</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="text-center py-2 mt-2"><Button className="btn btn-outline-primary text-center">Submit</Button>{' '}</div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;