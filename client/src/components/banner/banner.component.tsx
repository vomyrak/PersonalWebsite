///<reference path="../../index.d.ts" />

import * as React from "react";
import './banner.styles.scss';
import TitleImage from '../../images/Danish_Sea.jpg';

export default function Banner() {
    return <>
        <img className="banner anchor" src={TitleImage} alt="Danish Sea" id="about_me" />
        <div className="titleline">
            About Me
        </div>
        <div className="headline p-1 p-lg-3">
            A Tech-Powered Dreamer
        </div>
    </>
};
