import React from "react";
import { useState } from "react";

export function SecondCounter(){
    var [counter, setCounter] = useState(0)
   
   function incrementMe(){
   setCounter(counter+1)
   };

    return(
        <>
        <h1>hi there</h1>
            <button  onClick={incrementMe}>ass</button>
            <div>{counter}</div>
        </>
    );
};