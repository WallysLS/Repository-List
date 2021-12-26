import React from "react";
import { useState } from "react";


export function Counter(){
    let [counter,setCounter] = useState(0)
    function doIt(){
    setCounter(counter +1)
}

    return (
        <>
            <button type="button" onClick={doIt}>Increment +1</button>
            <h1>{counter}</h1>
        </>
    )
};