import React from "react";
import Lissy from './Images/Lissy.png';

export default function Welcome({ navigateTo }) {
    return (
        <div className="welcomeContainer">
            <h1> Lissys intro </h1>
            <img src={Lissy} alt="Lissy" />
            <section>
                <button onClick={() => navigateTo('gallery')} className="navigateTo">Gallery</button> <br />
                <button onClick={() => navigateTo('hobbies')} className="navigateTo">Hobbies</button> <br />
                <button onClick={() => navigateTo('skills')} className="navigateTo">Skills</button>
            </section>
        </div>
    );
}
