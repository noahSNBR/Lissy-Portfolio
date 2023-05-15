import React, { useState } from "react";

export default function Hobbies() {
    const [hobbieStates, setHobbieStates] = useState([
        {
            stealSocks: false,
            burryStuff: false
        }
    ]);
    function setComponent(componentGroup) {
        setHobbieStates({ ...hobbieStates, [componentGroup]: true })
    }
    return (
        <>
            <div className="hobbieContainer">
                <div>
                    <button onClick={() => { setComponent('stealSocks') }}></button>
                    {hobbieStates.stealSocks && <p> I steel stuff </p>}
                    <img></img>
                </div>
                <div>
                    <button onClick={() => { setComponent('burryStuff') }}></button>
                    {hobbieStates.burryStuff && <p> I burry stuff </p>}
                    <img></img>
                </div>

            </div >
        </>
    );
}