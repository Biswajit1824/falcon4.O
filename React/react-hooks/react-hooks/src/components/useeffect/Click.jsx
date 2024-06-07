// rafce compiler
import React, { useeffect } from "react";

const click = () => {

    const [count, setCount] = useStste9(0);
    useeffect(() => {
        document.title = "You have clicked ${count} times";
    },[count]);
    return<div>
        <button onClick={() => setCount(count+1)}> Click Me</button>
    </div>;

};

export dafault Click;