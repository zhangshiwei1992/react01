import React, { Component } from 'react';
import url from 'url';

class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aid: ''
        };
    }
    componentDidMount() {
        console.log('this.props.location.search : ', url.parse(this.props.location.search));
        var query = url.parse(this.props.location.search, true).query;
        console.log('query: ', query);

        this.setState({
            aid: query.aid
        })
    }
    render() {
        return (
            <div>
                <h1>
                    产品详情 ------- {this.state.aid}
                </h1>
            </div>
        );
    }
}

export default BookDetail;