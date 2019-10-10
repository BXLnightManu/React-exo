import React from 'react';
import './Desctruct.css';

function IsObject(props) {
    return <div>{JSON.stringify(props.ob)}</div>
}

function IsNotObject(props) {
    return <h1 className = "title">ERROR! NOT AN OBJECT</h1>
}

function Desctruct(props) {
    // {name: alice, fn: 'Woodard'}
    const type = typeof props.ob;
    if(type==="object") {
        return <IsObject {...props}/>
    } else {
        return <IsNotObject {...props}/>
    }
}

export default Desctruct;