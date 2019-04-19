import React from 'react';
import {Button} from './Button'

export const ButtonContainer = (props) => {

    function makeButtons(props) {

        const buttons = [];

        for (let i = 9; i >= 0; i--) {
            buttons.push(
                <Button
                    onClick={props.onClick}
                    buttonValue={i}>
                    {i}
                </Button>
            );
        }

        const functionButtons = ["C", "+", "-", "/", "*", "="];
        const functionContainer = [];

        const functionMap = {
            "C": "clear",
            "+": "setOperator",
            "-": "setOperator",
            "/": "setOperator",
            "*": "setOperator",
            "=": "calculate"

        };

        for (let i = 0; i < functionButtons.length; i++) {
            functionContainer.push(
                <Button
                    onClick={props.onClick}
                    functionName={functionMap[functionButtons[i]]}
                    buttonValue={functionButtons[i]}>
                    {functionButtons[i]}
                </Button>
            );
        }

        return <div>{buttons}<br/>{functionContainer}</div>;
    }

    return (
        makeButtons(props)
    )
}