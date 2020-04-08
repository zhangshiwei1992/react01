import React from 'react';
class FormTest02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '吕布',
            age: 18,
            msg: '方天画戟',
            sex: '1',
            city: '1',
            citys: [
                {
                    code: '1',
                    name: '北京'
                },
                {
                    code: '2',
                    name: '上海'
                },
                {
                    code: '3',
                    name: '天津'
                },
                {
                    code: '4',
                    name: '重庆'
                },
            ],
            hobby: [],
            hobbys: [
                {
                    code: '1',
                    title: '战斗',
                    checked: true,
                },
                {
                    code: '2',
                    title: '写字',
                    checked: false,
                },
                {
                    code: '3',
                    title: '画画',
                    checked: false,
                },
            ],
            remark: '人中吕布,马中赤兔'
        };
    }
    nameChanage = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    submitFunction = (event) => {
        // 阻止submit的提交事件
        event.preventDefault();

        alert('姓名:' + this.state.name + ',性别:' + this.state.sex + ',城市:' + this.state.city + ',爱好:' + this.state.hobby + ',备注:' + this.state.remark);
    }
    sexChanage = (event) => {
        this.setState({
            sex: event.target.value
        });
    }
    cityChange = (event) => {
        this.setState({
            city: event.target.value
        });
    }
    hobbyChanage = (key) => {
        var hobbys = this.state.hobbys;
        hobbys[key].checked = !hobbys[key].checked;
        var currentHobby = [];
        hobbys.map((hob) => {
            if (hob.checked) {
                return currentHobby.push(hob.code);
            }
        });
        this.setState({
            hobbys: hobbys,
            hobby: currentHobby,
        });
    }
    remarkChange = (event) => {
        this.setState({
            remark: event.target.value
        });
    }
    render() {
        return (
            <div>
                用户姓名: {this.state.name}
                <form onSubmit={this.submitFunction}>
                    姓名: <input type='text' value={this.state.name} onChange={this.nameChanage}></input>
                    <br />

                    性别:  <input type='radio' value='1' checked={this.state.sex === '1'} onChange={this.sexChanage} />男
                           <input type='radio' value='2' checked={this.state.sex === '2'} onChange={this.sexChanage} />女
                    <br />

                居住城市: <select value={this.state.city} onChange={this.cityChange }>
                        {this.state.citys.map(function (cit, index) {
                            return <option key={cit.code} value={cit.code}>{cit.name}</option>
                        })}
                    </select>
                    <br />

                    爱好: {this.state.hobbys.map((value, index) => {
                        return (<span key={index}>
                            <input type='checkbox' checked={value.checked} onChange={this.hobbyChanage.bind(this, index)} ></input> {value.title}
                        </span>)
                    })}
                    <br />

                    备注: <textarea value={this.state.remark} onChange={this.remarkChange}></textarea>
                    <br />

                    <input type='submit' defaultValue='提交' ></input>
                </form>
                <br /><br /><br />
            </div>
        );
    }
}

export default FormTest02;