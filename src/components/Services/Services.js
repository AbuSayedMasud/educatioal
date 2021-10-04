// about page
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="py-4">
            <h2 className="py-2 text-primary">Services</h2>

            <div className="row row-cols-3">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>



        </div>
    );
};

export default Services;