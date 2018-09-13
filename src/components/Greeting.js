import React from 'react';

function Greeting(props){
    console.log('Props:', props)

    const style = {
        color: props.favColor,
    };

    return <h1 style={style}>{props.name}</h1>
}

export default Greeting;
