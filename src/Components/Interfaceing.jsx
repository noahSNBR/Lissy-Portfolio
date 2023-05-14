import React, { useState } from "react";
import Welcome from "./Welcome";
import Gallery from './Gallery';
import Hobbies from './Hobbies';
import Skills from './Skills';

export default function Interface() {
    const [state, setState] = useState({
        welcome: true,
        gallery: false,
        hobbies: false,
        skills: false,
    });

    function navigateTo(component) {
        setState((prevState) => ({
            ...prevState,
            welcome: component === 'welcome',
            gallery: component === 'gallery',
            hobbies: component === 'hobbies',
            skills: component === 'skills',
        }));
    }

    return (
        <>
            {state.welcome && <Welcome navigateTo={navigateTo} />}
            {state.gallery && <Gallery />}
            {state.hobbies && <Hobbies />}
            {state.skills && <Skills />}
        </>
    );
}
