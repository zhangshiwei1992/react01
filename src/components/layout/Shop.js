import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className='layout_content'>
                    <div className='left'>
                        <Link to='/Shop/'>商店列表</Link>  <br /> <br />
                        <Link to='/Shop/ShopDetail'>商店详情</Link> <br /> <br />
                        <Link to='/Shop/ShopConfig'>商店配置</Link>
                    </div>
                    <div className='right'>
                        {/* <Route exact path='/Shop/' component={ShopList}></Route>
                        <Route path='/Shop/ShopDetail' component={ShopDetail}></Route>
                        <Route path='/Shop/ShopConfig' component={ShopConfig}></Route> */}
                        {
                            this.props.childRouterList.map((value, key) => {
                                if (value.exact) {
                                    return <Route key={key} exact path={value.path} component={value.component} />
                                } else {
                                    return <Route key={key} path={value.path} component={value.component} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;