import React, { Component } from 'react';
import jianke from '../../assets/image/jianke.png'
import xique from '../../assets/image/xique.jpg'

class ImageImport extends Component {

    render() {
        return (
            <div>
                <h3>图片引入测试</h3>
                <img src={jianke} alt="" style={{ width: '200px' }}></img>
                <img src={xique} alt="" style={{ width: '200px' }}></img>
                <img src={require('../../assets/image/jianke.png')} style={{ width: '200px' }} alt="" ></img>
                <img src="http://img3.imgtn.bdimg.com/it/u=1805197693,140239436&fm=26&gp=0.jpg" style={{ width: '200px' }} alt="" ></img>
            </div>
        )
    }
}

export default ImageImport;