// homeservice area
import React from 'react';
import { Card } from 'react-bootstrap';
import './homeservice.css'

const HomeService = (props) => {
    const { titile, img, price, courseEnroll, courseComplete } = props.service;
    return (

        <div>
            <div className="container">
                <div className="col">

                    <Card className="my-3">
                        <Card.Img variant="top" src={img} className="images" />
                        <Card.Body>
                            <Card.Title className="fs-5 fw-bold text-dark">{titile}</Card.Title>
                            <Card.Text className="text-start">
                                <p className="fs-6 fw-bold text-dark">Price : {price}</p>
                                <div className="text-center py-2">
                                    <small className="m-2 text-info fw-bold border p-2  rounded-pill border-warning">Total Enroll : {courseEnroll}</small>
                                    <small className="m-2 text-info fw-bold border p-2  rounded-pill border-warning">Completed: {courseComplete}</small>
                                </div>

                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
            </div>

        </div>
    );
};

export default HomeService;