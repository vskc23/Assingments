import React from 'react'

function Greet(props)
{
    return(
        <div>
            <h1>Hey, {props.name}! How are you doing ??? </h1>
            {props.children}
        </div>
    );
}

export default Greet