import * as React from "react";

export default function Music() {
    return <div className="row no-gutters clear-bg section anchor" id="music">
        <div className="col-12 col-lg-7 half-section-left d-flex flex-column justify-content-center" id="music-play">
            <iframe width="100%" height="120" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469233537&color=%235c5c54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
            <iframe className="mt-4" width="100%" height="120" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427747773&color=%235c5c54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
        <div className="col-12 col-lg-5 half-section-right text-left d-flex flex-column justify-content-center">
            <h2 className="emphatic">Music</h2>
            I am a self-taught composer and music producer with a background in ethnic music instrument performance.
            While currently exploring different music styles and genres, I take inspirations from studying different cultures around the world, their history and arts.
            One of my main creative focus is the expression of different cultural identities in modern compositions and productions.
            <a className="text-center mt-4" href="https://soundcloud.com/vomyrak/">
                <button className="py-2 px-4 black">Visit My SoundCloud</button>
            </a>
        </div>
    </div>
}