import React from 'react';
import {Display} from './Display';
import {ButtonContainer} from './ButtonContainer';

// import ReactDOM from 'react-dom';

export class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            display: "",
            func: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {

        this.setState({display: this.state.display + e.target.dataset.value});

        if (e.target.dataset.function) {

            const func = e.target.dataset.function;
            const sign = e.target.dataset.value;
            this.secondary(func, sign)

        }
    };

    clear = () => {
        this.setState({
            display: ""
        });
    };

    setOperator = (sign) => {

        this.setState({
            func :  sign
        });

    };

    calculate = () => {
        const parts = this.state.display.split(this.state.func);

        switch(this.state.func){
            case "*":
                this.setState({display: parseInt(parts[0]) * parseInt(parts[1])});
                break;
            case "/":
                this.setState({display: parseInt(parts[0]) / parseInt(parts[1])});
                break;
            case "+":
                this.setState({display: parseInt(parts[0]) + parseInt(parts[1])});
                break;
            case "-":
                this.setState({display: parseInt(parts[0]) - parseInt(parts[1])});
                break;
            default:
                alert("Uh.....What??")
        }
    };

    secondary = (func, sign) => {

        this[func](sign);

    };

    render() {

        return (
            <div className="Calc">
                <Display value={this.state.display}/>
                <ButtonContainer
                    functionName={this.secondary}
                    onClick={this.handleClick}

                />
            </div>
        )
    }
}
