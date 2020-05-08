import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: 1,
                    title: "春江潮水连海平",
                },
                {
                    aid: 2,
                    title: "海上明月共潮生",
                },
                {
                    aid: 3,
                    title: "滟滟随波千万里",
                },
                {
                    aid: 4,
                    title: "何处春江无月明",
                },
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>
                    产品页面
                </h1>
                <h1>
                    一个页面跳转到另一个页面进行传值 :  get传值
                </h1>
                <ul>
                    {this.state.list.map((value, index) => {
                        return (
                            <li key={value.aid}>
                                <Link to={`/ProductDetail?aid=${value.aid}`}>{value.title}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Book;