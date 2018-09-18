var React = require('react');
var ReactDOM = require('react-dom');

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

        const MAPPING ={
            'A': [{
                'name': 'aaa',
                'posts' : '1',
            }],
            'B': [{
                'name': 'bbb',
                'posts' : '2',
            },{
                'name': 'ccc',
                'posts' : '3',
            },
        ]}
        let SECTIONS = []
        for (const key in MAPPING) {
            if (MAPPING.hasOwnProperty(key)) {
                SECTIONS.push({
                    data: MAPPING[key],
                    key: key,
                })                
            }
        }
        console.log(SECTIONS)

        return (
        <div>
            {/* <ComponentHeader/>
            <BodyIndex/>
            <ComponentFooter/> */}
        </div>
        )
    }
}

ReactDOM.render(<Index/> , document.getElementById('d1'))