import React from "react";
import ReactDOM from 'react-dom';

export default class bodyIndexChild extends React.Component{

    render() {
        return (
            <div>
                Body的子模块: 输入 <input type='text' onChange={this.props.onChildValueChange}/>
            </div>
        )
    }
}