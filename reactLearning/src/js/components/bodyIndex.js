import React from 'react';
import ReactDOM from 'react-dom';
import BodyIndexChild from './bodyIndexChild.js';

export default class bodyIndex extends React.Component{
    constructor() {
        super(); //调用父类的所有初始化方法
        this.state = {
            username: 'bodyIndex'
        };
    }
    onChildValueChange(event) {
        console.log('onChildValueChange')
        console.log('event',event)
        this.setState({
            childValue: event.target.value,
        })

    }

    componentWillMount() {
        // 页面将要加载
        console.log('bodyIndex->componentWillMount')
    }
    componentWillUnmount() {
        console.log('bodyIndex->componentWillUnmount')
    }
    componentDidMount() {
        console.log('bodyIndex->componentDidMount')
    }
    componentDidCatch() {
        console.log('bodyIndex->componentDidCatch')
    }
    componentWillUpdate() {
        console.log('bodyIndex->componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('bodyIndex->componentDidUpdate')
    }
    componentWillReceiveProps() {
        console.log('bodyIndex->componentWillReceiveProps')
    }
    render() {
        setTimeout(() => {
            //更改state
            this.setState({username: 'bodyIndex.....'});
        }, 5000);


        return (
            <header>
                <h1>页面的主题部分</h1>
                <p>state: {this.state.username}</p>
                <p>父页面接收到子页面输入的值: {this.state.childValue}</p>
                <BodyIndexChild onChildValueChange={this.onChildValueChange.bind(this)}/> 
            </header>
        )
    }
}