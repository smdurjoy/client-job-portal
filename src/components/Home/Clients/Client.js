import React from 'react';
import client1 from "../../../images/client1.jpeg";
import client2 from "../../../images/client2.webp";
import client3 from "../../../images/client3.jpg";

const Client = () => {
    return (
        <div className="client">
            <div className="container">
                <div className="text-center">
                    <span className="subTitle">WHAT SAY OUR CLIENT</span>
                    <h1 className="categoryTitleSuccess">Our Success Stories</h1>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <img src={client3} alt=""/>
                        <div className="mt-2">
                            <small>Emily Hazel</small><br></br>
                            <small className="clientTitle">Architect</small>
                        </div>
                        <div className="clientMsg">
                            <span>Lorem Ipsum is simply dummy text<br/>
                            of the printing and typesetting<br/>
                            industry</span>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img src={client1} alt=""/>
                        <div className="mt-2">
                            <small>Mark Eric</small><br></br>
                            <small>Engineer</small>
                        </div>
                        <div className="clientMsg">
                            <span>Lorem Ipsum is simply dummy text</span><br/>
                            <span>of the printing and typesetting</span><br/>
                            <span>industry</span>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img src={client2} alt=""/>
                        <div className="mt-2">
                            <small>Thiyago Costa</small><br></br>
                            <small>Programmer</small>
                        </div>
                        <div className="clientMsg">
                            <span>Lorem Ipsum is simply dummy text</span><br/>
                            <span>of the printing and typesetting</span><br/>
                            <span>industry</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;