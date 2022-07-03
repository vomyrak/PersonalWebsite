import * as React from "react";
import './introduction.styles.scss';
import Cpu from '../../images/cpu2.png';
import Browser from '../../images/browser.png';
import Python from '../../images/python.png';
import Analysis from '../../images/analysis.png';

export default function Introduction() {
    return <div className="clear-bg row no-gutters section text-center justify-content-center">
        <div className="col-12 col-lg-7 half-section-left d-flex flex-column justify-content-center">
            <div>
                <span className="emphatic">Hi!</span> My name is Husheng, a recent graduate from Imperial College London.
                transitioning from a digital electronics designer into a software engineer.
                I am passionate about big data-driven innovations that benefits the world and the technological infrastructure that supports the analysis and utilisation of data.
                Thus, I have been exposing myself to both data science and system design to work towards a software architect.
                <br/>
                <br/>
                At leisure, I enjoy switching to my "art" self to be a freelance music producer. I like to travel in the wild and wander
                in the cities to get my creative inspirations as an observer and thinker. My adventures have made me always interested in
                social, cultural and environmental issues and crafted me into a dreamer: my music as romanticised expression of my dreams,
                and my technical skills bridges towards the dreams.
            </div>
            <a className="text-center mt-4" href="./Husheng Deng_CV.pdf">
                <button className="py-2 px-4 black">View My CV</button>
            </a>
        </div>
        <div className="col-12 col-lg-5 half-section-right d-flex flex-column justify-content-center work-section">
            <div className="emphatic">Work Experience</div>
            <div className="work-item">
                <img src={Cpu}/>
                <div>2020</div>
                <div className="position">GPU Graduate Engineer</div>
                <div>ARM</div>
            </div>
            <div className="work-item">
                <img src={Browser}/>
                <div>2020</div>
                <div className="position">Full-Stack Software Engineer</div>
                <div>WeJam</div>
            </div>
            <div className="work-item">
                <img src={Python}/>
                <div>2019</div>
                <div className="position">Design and Verification Intern</div>
                <div>ARM</div>
            </div>
            <div className="work-item">
                <img src={Analysis}/>
                <div>2017, 2018</div>
                <div className="position">Summer Undergraduate Researcher</div>
                <div>Imperial College London</div>
            </div>

        </div>
    </div>
}
