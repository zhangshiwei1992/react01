import React, {Component} from 'react';
import {Switch, Transfer} from 'antd';


const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);


class AntdTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetKeys: oriTargetKeys,
            selectedKeys: [],
            disabled: false,
            mockData: [],
        }
    }

    componentDidMount() {
        this.getMock();
    }

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({mockData, targetKeys});
    };

    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

    handleChange = targetKeys => {
        this.setState({targetKeys});
    };

    handleSearch = (dir, value) => {
        console.log('search:', dir, value);
    };


    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({
            targetKeys: nextTargetKeys
        });

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({
            selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
        });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    handleDisable = disabled => {
        this.setState({disabled});
    };

    render() {
        const {targetKeys, selectedKeys, disabled} = this.state;
        return (
            <div style={{'padding': "1px 1px 1px 100px"}}>
                <Transfer
                    dataSource={mockData}
                    titles={['Source', 'Target']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.title}
                    disabled={disabled}
                />
                <Switch
                    unCheckedChildren="disabled"
                    checkedChildren="disabled"
                    checked={disabled}
                    onChange={this.handleDisable}
                    style={{marginTop: 16}}
                />
                <br/>
                <br/>
                <Transfer
                    dataSource={this.state.mockData}
                    showSearch
                    filterOption={this.filterOption}
                    targetKeys={this.state.targetKeys}
                    onChange={this.handleChange}
                    onSearch={this.handleSearch}
                    render={item => item.title}
                />
            </div>
        );
    }
}

export default AntdTransfer;
