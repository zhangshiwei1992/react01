import React, { Component } from 'react';
class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            aid : ''
         };
    }

    componentDidMount(){
        console.log('props',this.props);
        this.setState({
              aid: this.props.match.params.aid
        })
    };
    render() {
        return (
            <div>
                <h1>
                    新闻详情 ------ {this.state.aid}
                </h1>
            </div>
        );
    }
}

export default NewsDetail;