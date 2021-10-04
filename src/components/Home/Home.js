import React, { useEffect, useState } from 'react';
import HomeCom from '../HomeCom/HomeCom';
import HomeService from '../HomeSerive/HomeService';

const Home = () => {
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
                    services.slice(0, 6).map(service => <HomeService service={service} key={service.id}></HomeService>)
                }
            </div>



        </div>
    );
};

export default Home;