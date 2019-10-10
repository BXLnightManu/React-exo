import React from 'react';
import './Desctruct.css';

function isObject() {
    return <div>{JSON.stringify(this.props.ob)}</div>
}

function isNotObject() {
    return <h1 className = "title">ERROR! NOT AN OBJECT</h1>
}

function Desctruct(props) {
    const type = typeof this.props.ob;
    if(type==="object") {
        return <isObject />
    } else {
        return <isNotObject />
    }
}

export default Desctruct;