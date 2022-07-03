import * as React from "react";
import { useEffect } from "react";
import './app.scss'
import Navbar from "./components/navbar/navbar.component";
import Banner from "./components/banner/banner.component";
import Introduction from "./components/introduction/introduction.component";
import Projects from "./components/projects/projects.component";
import Music from "./components/music/music.component";
import Form from "./components/form/form.component";
import AOS from 'aos';
import $ from 'jquery';
import 'bootstrap';

export default function App() {

    useEffect(() => {
        AOS.init();

        $(window).on('scroll', function () {
            $('.nav-link').removeClass('nav-target');
            var cur_pos = $(this).scrollTop();
            if (this.innerHeight + this.pageYOffset >= document.body.offsetHeight){
                $('.nav-link').removeClass('active');
                $('nav').find('a[href="#contact_me"]').addClass('active');
            }
            else{
                $('.anchor').each(function() {
                    var top = $(this).offset().top - $('nav').outerHeight();
                    var bottom;
                    if ($(this).attr('id') === 'about_me') {
                        bottom = $('#projects').offset().top - $('nav').outerHeight();
                    } else {
                        bottom = top + $(this).outerHeight();
                    }
                    var unactivated_window = $('nav').find(`a[href="#${$(this).attr('id')}"]`);
                    if (cur_pos >= top && cur_pos <= bottom) {
                        unactivated_window.addClass('active');
                    }
                    else{
                        if (!unactivated_window.hasClass('nav-target')){
                          unactivated_window.removeClass('active');
                        }
                    }
                });
            }
        });

    }, []);


    return <>
        <Navbar />
        <Banner />
        <Introduction />
        <Projects />
        <Music />
        <Form />
    </>
}
