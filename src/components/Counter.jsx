import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter + 1);
    }
    return (
        <>
            <h1>Hi there, let's count</h1>
            <h1>{counter}</h1>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </>
    );
}
