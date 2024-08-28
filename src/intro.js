import React from "react";
import head from "./img/me5.jpg";
import "./styles/main.css";
import Introraw from './customization/Introduction.json'
import Eduraw from './customization/Education.json'


export function Read_Intro() {
    return (
        <span className="text block-long">
            {Introraw.intro}
            <p>
                <a className="icon-link" target="_blank" href={Introraw.linkedin} rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.glints} rel="noreferrer">
                    <i className="fa-solid fa-briefcase" style={{ color: '#40e7ff' }}></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.github} rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.upwork} rel="noreferrer">
                    <i className="fa-brands fa-upwork" style={{ color: '#0fff57' }}></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.instagram} rel="noreferrer">
                    <i className="fa-brands fa-instagram" style={{ color: '#C13584' }}></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.x} rel="noreferrer">
                    <i className="fa-brands fa-twitter" style={{ color: '#1DA1F2' }}></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.cv} rel="noreferrer">
                    <i className="fa-solid fa-file-signature" style={{ color: '#f80000' }}></i>
                </a>
                <a className="icon-link" target="_blank" href={Introraw.whatsapp} rel="noreferrer">
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                </a>
            </p>
        </span>
    );
}


export function Intro() {
    return (
        <div class="intro">
            <span id="blcok">
                <img src={head}/>
            </span>
            <Read_Intro />
        </div>
    );
}

export function Edu() {
    const result = [];
    Eduraw.schools.map((school) => {
        result.push(
            <div class="edu">
                <span class="status">
                <img src={require(`${school.logo}`)}  alt={"school"} />
                </span>
                <span class="text">
                    <p class="school">{school.name}  </p>
                    <p class="dep">{school.degree} </p>
                    <p class="time">{school.time}  </p>
                </span>
            </div>
        );
    });

    return (
        result
    );
}