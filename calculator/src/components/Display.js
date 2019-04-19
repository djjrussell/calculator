import React from 'react';

export class Display extends React.Component {
    render(){
        return (
            <div id="display">{this.props.value}</div>
        )
    }
}