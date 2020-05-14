import React, { Component } from 'react';
import jianke from '../../assets/image/jianke.png'
import xique from '../../assets/image/xique.jpg'

class ImageImport extends Component {
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
        let listResult = this.state.list.map((value, index) => {
            return <li key={index}>{value}</li>
        });

        return (
            <div>
                <h3>图片引入测试</h3>
                <img src={jianke} alt="" style={{ width: '200px' }}></img>
                <img src={xique} alt="" style={{ width: '200px' }}></img>
                <img src={require('../../assets/image/jianke.png')} style={{ width: '200px' }} alt="" ></img>
                <img src="http://img3.imgtn.bdimg.com/it/u=1805197693,140239436&fm=26&gp=0.jpg" style={{ width: '200px' }} alt="" ></img>

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

export default ImageImport;