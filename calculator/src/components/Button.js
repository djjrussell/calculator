import React from 'react';

export const Button = (props) => {

    return (
        <div
            onClick={props.onClick}
            className="button"
            data-value={props.buttonValue}
            data-function={props.functionName}
        >
            {props.buttonValue}
        </div>
    )
};