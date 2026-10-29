import React, { useEffect, useState } from 'react';

function SampleUseEffect() {
    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(100);

    useEffect(() => {
        // console.log("Hey....using useEffect");
        console.log("Counter=" + counter)
        console.log("Pointer=" + pointer)
    }, [counter,pointer])
    
function setCount() {
        setCounter(counter + 5);
    }
function setPoint(){
        setPointer(pointer-5);
    }
        return (
        <div>
            <h2 style={{ color: 'brown' }}>SampleUseEffect</h2>
            <h1>Counter Value={counter}</h1>
            <h1>Pointer Value={pointer}</h1>
            <button onClick={setCount}>Increment</button>
            <button onClick={setPoint}>Decrement</button>
        </div>
    )
}
export default SampleUseEffect