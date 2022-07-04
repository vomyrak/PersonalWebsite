import * as React from "react";
import { useState } from "react";
import Mountain from '../../images/Mountain.jpg';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

export default function Form() {
    const [states, setStates] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    return <>
        <div className="row justify-content-center text-center anchor" id="contact_me">
            <div className="col-12 col-lg-8">
                <h2 className="text-center pb-1 emphatic" style={{color: 'white'}}>Contact Me</h2>
                <div className="text-center mb-1" style={{color: 'white'}}>Please drop me a message!</div>
                <div className="row justify-content-around pt-2">
                    <input type="email" placeholder="Name*" id="name" className="col-10 col-lg-8" value={states.name} onInput={
                        e => setStates(state => { return {...state, name: (e.target as HTMLInputElement).value}})}/>
                </div>
                <div className="row justify-content-around pt-3">
                    <input type="email" placeholder="Email Address*" id="email" className="col-10 col-lg-8" value={states.email} onInput={
                        e => setStates(state => { return {...state, email: (e.target as HTMLInputElement).value}})}/>
                </div>
                <div className="row justify-content-around pt-3">
                    <input type="email" placeholder="Subject*" id="subject" className="col-10 col-lg-8" value={states.subject} onInput={
                        e => setStates(state => { return {...state, subject: (e.target as HTMLInputElement).value}})}/>
                </div>
                <div className="row justify-content-around pt-3">
                    <textarea name="Text1" placeholder="Content*" rows={10} id="content" className="col-10 col-lg-8" value={states.content} onInput={
                        e => setStates(state => { return {...state, content: (e.target as HTMLTextAreaElement).value}})}/>
                </div>
                <div className="row justify-content-around pt-3">
                    <button className="white py-2 px-4" id="send-email" onClick={() => {
                        let { name, email, subject, content } = states;
                        if (!name || !email || !subject || !content) {
                            MySwal.fire({
                                title: 'Please fill in all required fields',
                                icon: 'error',
                                scrollbarPadding: false
                            });
                            return;
                        }

                        let data = { name, email, subject, content };
                        let target = process.env.DEBUG ? "http://127.0.0.1:8080" : "/";
                        fetch(target, {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        }).then(async (res) => {
                            if (!res.ok) {
                                let body = await res.json();
                                MySwal.fire({
                                    title: body,
                                    icon: 'error',
                                    scrollbarPadding: false
                                })
                            } else {
                                MySwal.fire({
                                    title: 'Your message has been sent!',
                                    icon: 'success',
                                    scrollbarPadding: false
                                })
                            }
                        }).catch((error) => {
                            MySwal.fire({
                                title: error,
                                icon: 'error',
                                scrollbarPadding: false
                            });
                        });
                    }}>Send Email</button>
                </div>
                <div className="row" style={{color: 'white'}}></div>

                <footer className="mt-1 mb-2" style={{color: 'white'}}>
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <div className="px-5">
                            &copy; Husheng Deng 2022
                        </div>
                        <div className="px-5">
                            Hosted on Amazon AWS
                        </div>
                    </div>
                    <div className="mt-2 attribute">
                        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </div>
                    <div className="attribute">
                        <a href='https://www.freepik.com/vectors/design'>Design</a> and <a href='https://www.freepik.com/vectors/flower'>Flower</a> vectors created by freepik - www.freepik.com
                    </div>
                </footer>
            </div>
            <img className="footer" src={Mountain}/>
        </div>
    </>
}
