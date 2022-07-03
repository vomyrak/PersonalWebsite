import * as React from "react";
import { useState } from "react";
import $ from 'jquery';
import './navbar.styles.scss';

export default function Navbar() {

    const [activeLinkIdx, setActiveLinkIdx] = useState(0);
    const navItems = [
        {href: "#about_me", text: "About Me"},
        {href: "#projects", text: "Projects"},
        {href: "#music", text: "Music"},
        {href: "#contact_me", text: "Contact Me"}
    ];

    const navItemDivs = (activeLinkIdx: number) => {
        return navItems.map(({href, text}, idx) => {
            return <li className="nav-item" key={idx} onClick={() => {
                setActiveLinkIdx(idx);
                $('.navbar-collapse').collapse('hide');
            }}>
                <a
                    className={`nav-link js-scroll-trigger ${activeLinkIdx === idx ? 'active' : ''}`}
                    href={href}>
                    {text}
                </a>
            </li>
        });
    }

    return <div className="clear-bg" id="about_me">
        <nav className="navbar navbar-expand-lg navbar-dark pr-4 pl-4" data-aos="change-colour" data-aos-anchor=".headline" data-aos-anchor-placement="top-top">
            <a className="navbar-brand js-scroll-trigger" href="#top"><h2>Husheng Deng</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{border: "#FFFFFF"}}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu" id="navbarResponsive">
                <ul className="nav navbar-nav ml-auto" >
                    {navItemDivs(activeLinkIdx)}
                </ul>
            </div>
        </nav>
    </div>
};
