import React, { Component } from 'react';
import { Skeleton, Switch, List, Avatar } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 3; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ icon, text }) => (
    <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
    </span>
);

class AntdSkeleton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        return (
            <div>
                <Switch checked={!this.state.loading} onChange={this.onChange} style={{'left':'100px'}}/>

                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={
                                !this.state.loading && [
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]
                            }
                            extra={
                                !this.state.loading && (
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                )
                            }
                        >
                            <Skeleton loading={this.state.loading}
                                active
                                avatar
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default AntdSkeleton;