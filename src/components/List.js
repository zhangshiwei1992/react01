import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'aaaaaaaa', '1111111', 'bbbbb', '2222222222', 'cccccccc', '333333', 'dddddd',
            ],
            list2: [
                <h2 key='1'>QQQQQQQQQ</h2>,
                <h2 key='2'>WWWWWWWWW</h2>,
                <h2 key='3'>EEEEEEEEE</h2>
            ],
            list3: [
                { title: '语文', score: 90 },
                { title: '数学', score: 95 },
                { title: '历史', score: 98 },
            ],
        }
    }
    render() {
        let listResult = this.state.list.map(function (value, index) {
            return <li key={index}>{value}</li>
        });
        return (
            <div>
                {this.state.list2}
                <ul>
                    {listResult}
                </ul>
                <ul>
                    {this.state.list3.map(function (value, key) {
                        return <li key={key}>科目: {value.title}, 分数: {value.score}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default List;