import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    componentWillMount() {
        // 页面将要加载
        console.log('Header->componentWillMount')
    }
    componentWillUnmount() {
        console.log('Header->componentWillUnmount')
    }
    componentDidMount() {
        console.log('Header->componentDidMount')
    }
    componentDidCatch() {
        console.log('Header->componentDidCatch')
    }
    componentWillUpdate() {
        console.log('Header->componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('Header->componentDidUpdate')
    }
    componentWillReceiveProps() {
        console.log('Header->componentWillReceiveProps')
    }
    render() {
        return (
            <header>
                <h1>头部</h1>
            </header>
        )
    }
}