import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            productDetail: '',
            domain: 'http://a.itying.com/',
        };
    }

    findProductDetail = () => {
        // alert('获取服务器品牌数据信息'); 
        var detailUrl = this.state.domain + 'api/productcontent?id=' + this.props.match.params.id;
        axios.get(detailUrl)
            .then((response) => {
                console.log('response: ', response);
                console.log('response.data: ', response.data);
                console.log('response.data.result: ', response.data.result);
                console.log('response.data.result[0]: ', response.data.result[0]);
                this.setState({
                    productDetail: response.data.result[0]
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('this.props: ', this.props);
        console.log('this.props.match.params.id: ', this.props.match.params.id);
        this.findProductDetail();
    }

    render() {
        return (
            <div className='pcontent'>
                <div className='back'><Link to='/Home'>返回</Link></div>
                <div className='p_content'>
                    {this.state.productDetail.img_url ? <img src={`${this.state.domain}${this.state.productDetail.img_url}`} ></img> : ''}
                    <h2 className='title'>{this.state.productDetail.title}</h2>
                    <p className='price'>{this.state.productDetail.price} 元</p>
                    <div className='p_detail'>
                        <h3 className='title'>商品详情</h3>
                        <div className='p_content' dangerouslySetInnerHTML={{ __html: this.state.productDetail.content }}></div>
                    </div>
                </div>
                <footer className='pfooter'>

                </footer>
            </div>
        );
    }
}

export default ProductContent;