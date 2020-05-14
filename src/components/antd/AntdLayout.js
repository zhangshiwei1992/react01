import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import axios from 'axios'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AntdLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            menuList: [],
            titles: [],
            userPermissionList: [],
            host: 'http://biz-dev.miaogoche.cn'
        };
    }

    componentDidMount() {
        this.findBrandList();
    }

    findBrandList = () => {
        var findMenuListUrl = this.state.host + '/menu/indexMenuAndPermission';
        axios.post(findMenuListUrl, {
            userId: "2117"
        })
            .then((response) => {
                console.log('response.data.value: ', response.data.value);
                this.setState({
                    menuList: response.data.value.menuList,
                    titles: response.data.value.titles,
                    userPermissionList: response.data.value.userPermissionList,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    // 递归函数生成左侧菜单树
    // 这里通过函数的形式，通过递归自身function的方式来生成菜单树的子菜单
    formSubmenusChild(obj) {
        let cHtml = <div></div>;
        let childArray = obj.child;
        if ("undefined" != typeof (childArray) && childArray.length > 0) {
            cHtml = childArray.map((item, i) => {
                return this.formSubmenusChild(item);
            });
            return <SubMenu key={obj.linkAddress} title={obj.name}>{cHtml}</SubMenu>
        } else {
            return <Menu.Item routeurl={obj.routeurl} key={obj.linkAddress}>{obj.name}</Menu.Item>
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        console.log('菜单:');

        let columnMenus = this.state.titles.toJSON();
        let html = columnMenus.map((obj, i) => {
            if ("undefined" != typeof (obj.child) && obj.child.length > 0) {
                return this.formSubmenusChild(obj);
            } else {
                //这里的routeurl是路由地址，是自定义的一个属性
                return <Menu.Item routeurl={obj.routeurl} key={obj.linkAddress}>{obj.name}</Menu.Item>
            }
        });


        return (
            <div className='layout'>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Option 1
                        </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2
                        </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />} />
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                Bill is a cat.
                        </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default AntdLayout;