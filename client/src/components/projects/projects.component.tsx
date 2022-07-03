import * as React from "react";
import './projects.styles.scss';
import Multitasking from '../../images/multitasking.png';
import Robotic from '../../images/robotic.png';
import Ai from '../../images/ai.png';
import Flower from '../../images/flower.png';

export default function Projects() {
    return <>
        <div className="variant-bg section text-center anchor" id="projects" >
            <div id="carouselExampleControls" className="carousel slide" data-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-7 text-left half-section-left d-flex flex-column justify-content-center">
                                <div>
                                    <h2 className="emphatic">Projects</h2>
                                    I have mostly worked on a wide range of electronics and embedded system projects in college, but I have also worked on many software
                                    engineering and data analysis projects for my passion about programming. While my proudest works are mostly proprietary for my past employers,
                                    please scroll left or right for some of my favourite projects.

                                </div>
                                <a className="text-center mt-4" href="https://github.com/vomyrak">
                                    <button className="py-2 px-4 black">View My Projects</button>
                                </a>
                            </div>
                            <div className="col-12 col-lg-5 half-section-right d-flex flex-column justify-content-center">
                                <img className="section-image" src={Multitasking}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-7 text-left half-section-left d-flex flex-column justify-content-center">
                                <div>
                                    <h2 className="emphatic">Universal Controller</h2>
                                    The Universal Controller project is sponsored by Wooden Spoon Charity to design a software interface to allow physically challenged people to smoothly interact with robotic and smart devices.
                                    Its core is a cross-platform server developed with .NET Core that adapts assistive input controller via REST API or serial connections to target devices.
                                    <br/>
                                    <br/>
                                    A complete application is developed on Windows using C# driver reflection, MFC and cloud MongoDB database to achieve device plug-and-play and remote interface protocol management.
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 half-section-right d-flex flex-column justify-content-center">
                                <img className="section-image" src={Robotic}/>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-7 text-left half-section-left d-flex flex-column justify-content-center">
                                <div>
                                    <h2 className="emphatic">Multi-Agent Simulation Platform</h2>
                                    The Multi-Agent Simulation Platform provides a framework to research AI behaviour in collaborative situation under constraints. It provides a logic evaluation sequence, supports
                                    different types of game settings, and allows modelling and specification of AI traits in a general reinforcement learning process.
                                    <br/>
                                    <br/>
                                    The platform infrastructure is developed in F#, while its configuration tool and experiment visualisation tool are developed using Python.
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 half-section-right d-flex flex-column justify-content-center">
                                <img className="section-image" src={Ai}/>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-7 text-left half-section-left d-flex flex-column justify-content-center">
                                <div>
                                    <h2 className="emphatic">Greenhouse Monitor System</h2>
                                    The Greenhouse Monitor System provides a embedded system solution to maintain the optimal growth condition for plants. A central MQTT server developed in Python collects environment conditions
                                    from sensors distributed across the monitored area. The server updates to its companion iOS mobile application the data in real time and allows for smart or manual control of environment
                                    control mechanism connected to the server.
                                    <br/>
                                    <br/>
                                    The system utilises historical data to run online classification algorithms to learn the optimal growth condition for better smart control.
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 half-section-right d-flex flex-column justify-content-center">
                                <img className="section-image" src={Flower}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </>
}
