import React, { Component } from 'react';
import axios from 'axios';
import Config from '../../config/Config';

class VehicleBrandAxios extends Component {
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
        var findBrandListUrl = Config.host + '/vehicleBrand/findList';
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
            <div style={{ 'color': 'blue', 'padding': '10px' }}>
                <h2>获取服务器数据</h2>

                品牌首字母:<input type='text' onChange={this.initialChange} onKeyUp={this.onKeyUpFunction}></input>

                <button onClick={this.findBrandList}>获取服务器品牌数据信息</button>

                <h3>品牌数量:{this.state.brandList.length}</h3>

                <ul>
                    {
                        this.state.brandList.map((value, index) => {
                            return (
                                <li key={index}  >
                                    <div style={{ 'border': '1px solid red','padding':'10px','margin':'10px' }}>
                                        <p > {value.initial} , </p>
                                        <p > {value.name} </p>
                                        <img src={value.logo} style={{ width: '100px' }} alt="" ></img>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                <br /><br />
            </div>
        );
    }
}

export default VehicleBrandAxios;