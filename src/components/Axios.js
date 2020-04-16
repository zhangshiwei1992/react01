import React, { Component } from 'react';
import axios from 'axios'

class Axios extends Component {
    constructor(props) {
        console.log('01---------constructor------构造方法');
        super(props);
        this.state = {
            initial: null,
            brandList: []
        };
    }

    // componentWillMount() {
    //     console.log('02---------componentWillMount------组件将要挂载'); 
    // };

    componentDidMount() {
        console.log('04---------componentDidMount------组件挂载');
        this.findBrandList();
    };

    // 返回true才会更新组件
    shouldComponentUpdate() {
        console.log('001---------shouldComponentUpdate------组件是否需要更新');
        return true;
    };
    // componentWillUpdate() {
    //     console.log('002---------componentWillUpdate------组件将要更新'); 
    // };
    componentDidUpdate() {
        console.log('004---------componentDidUpdate------组件更新完成');
    };

    componentWillUnmonut() {
        console.log('009---------componentWillUnmonut------组件销毁');
    };

    initialChange = (e) => {
        this.setState({
            initial: e.target.value,
        })
    }

    findBrandList = () => {
        // alert('获取服务器品牌数据信息');
        var findBrandListUrl = 'http://biz-dev.miaogoche.cn/vehicleBrand/findList';
        axios.post(findBrandListUrl, {
            initial: this.state.initial,
        })
            .then((response) => {
                console.log('response: ', response);
                console.log('response.data: ', response.data);
                console.log('response.data.value: ', response.data.value);
                this.setState({
                    brandList: response.data.value
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    onKeyUpFunction = (event) => {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            // alert('点击了回车键 ' + event.target.value);
            this.findBrandList();
        }
    }

    render() {
        console.log('03---------render------数据渲染');
        return (
            <div >
                <h2>获取服务器数据</h2>
                品牌首字母:<input type='text' onChange={this.initialChange} onKeyUp={this.onKeyUpFunction}></input>
                <button onClick={this.findBrandList}>获取服务器品牌数据信息</button>

                <h3>品牌数量:{this.state.brandList.length}</h3>
                <ul>
                    {
                        this.state.brandList.map((value, index) => {
                            return (<li key={index} >{value.initial} , {value.name}</li>);
                        })
                    }
                </ul>
                <br /><br />
            </div>
        );
    }
}

export default Axios;