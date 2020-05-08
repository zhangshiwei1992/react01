import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: 1,
                    title: "新闻111111111111111",
                },
                {
                    aid: 2,
                    title: "新闻222222222222222222222222",
                },
                {
                    aid: 3,
                    title: "新闻3333333333333333333333333333333333",
                },
                {
                    aid: 4,
                    title: "新闻44444444444444444444444444444444444444444444444",
                },
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>
                    新闻页面
                </h1>
                <h1>
                    一个页面跳转到另一个页面进行传值 :  动态路由
                </h1>
                <ul>
                    {this.state.list.map((value, index) => {
                        return (
                            <li key={value.aid}>
                                <Link to={`/NewsDetail/${value.aid}`}>{value.title}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default News;