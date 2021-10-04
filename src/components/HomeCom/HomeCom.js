import React from 'react';

import home from '../../images/about-1.png'
import './homeCom.css'
const HomeCom = () => {

    return (
        <div className="py-5 homeCom-area">
            <div className="container">
                {/* ask question area */}
                <div className="text-center text-color py-3">
                    <h2>World Class Facilities</h2>
                    <p className="fw-normal text-area ">Ask The Question, Learn With Perfection, Lead With Conviction</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={home} alt="" />
                    </div>
                    <div className="col-md-6 text-start py-3">
                        <h3 className="text-primary spacing">Ask whatever you want</h3>
                        <h4 className="text-area">Get your exam related doubts and questions answered by experienced and qualified faculty</h4>
                        <div className="ask-area-list text-dark my-5">
                            <li className="ask-question">Stuck with subject related queries?</li>
                            <li className="ask-question">Confused among lots of career choices?</li>
                            <li className="ask-question">Looking for expert guidance in studies?</li>
                            <li className="ask-question">Want latest notification about exams?</li>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default HomeCom;