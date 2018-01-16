import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentFooter extends React.Component{
    componentWillMount() {
        // 页面将要加载
        console.log('ComponentFooter->componentWillMount')
    }
    componentWillUnmount() {
        console.log('ComponentFooter->componentWillUnmount')
    }
    componentDidMount() {
        console.log('ComponentFooter->componentDidMount')
    }
    componentDidCatch() {
        console.log('ComponentFooter->componentDidCatch')
    }
    componentWillUpdate() {
        console.log('ComponentFooter->componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('ComponentFooter->componentDidUpdate')
    }
    componentWillReceiveProps() {
        console.log('ComponentFooter->componentWillReceiveProps')
    } 
    render() {
        return (
            <footer>
                <h1>页脚</h1>
            </footer>
        )
    }
}