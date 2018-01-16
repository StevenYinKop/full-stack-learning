var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header.js'
import ComponentFooter from './components/footer.js'
import BodyIndex from './components/bodyIndex.js'

class Index extends React.Component{
    componentWillMount() {
        // 页面将要加载
        console.log('componentWillMount')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidCatch() {
        console.log('componentDidCatch')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    render() {
        return (
        <div>
            <ComponentHeader/>
            <BodyIndex/>
            <ComponentFooter/>
        </div>
        )
    }
}

ReactDOM.render(<Index/> , document.getElementById('d1'))