import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productlist: [],
            domain: 'http://a.itying.com/',
        };
    }

    findProductList = () => {
        // alert('获取服务器品牌数据信息');
        var findProductListUrl = this.state.domain + 'api/productlist';
        axios.get(findProductListUrl)
            .then((response) => {
                console.log('response: ', response);
                console.log('response.data: ', response.data);
                console.log('response.data.result: ', response.data.result);
                this.setState({
                    productlist: response.data.result
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.findProductList();
    }

    render() {
        return (
            <div className='home'>
                <div className='list'>
                    {
                        this.state.productlist.map((value, key) => {
                            return (
                                <div className='item' key={key}>
                                    <h3 className='item_cate'>{value.title}</h3>
                                    <ul className='item_list'>
                                        {
                                            value.list.map((v, k) => {
                                                return (
                                                    <li key={k}>
                                                        <Link to={`/ProductContent/${v._id}`}>
                                                            <div className='inner'>
                                                                {/* <img src={require('../../assets/image/5.jpg')} /> */}
                                                                <img alt='' src={`${this.state.domain}${v.img_url}`} />
                                                                <p className='title'>{v.title}</p>
                                                                <p className='price'>{v.price} 元</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        );
    }
}

export default Home;