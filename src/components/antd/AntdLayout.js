import React, {Component} from 'react';
import axios from 'axios';
import Config from '../../config/Config'
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import routerList from '../../router/Router'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class AntdLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFold: true,
            collapsed: false,
            menuTreeInfo: [
                {
                    "children": null,
                    "icon": "AndroidOutlined",
                    "id": 1,
                    "name": "antd按钮",
                    "url": "/AntdButton"
                },
                {
                    "id": 18,
                    "url": "/antd",
                    "name": "antd测试",
                    "icon": "setting",
                    "children": [
                        {
                            "id": 19,
                            "icon": "TransactionOutlined",
                            "name": "代码表",
                            "url": "/DictCode",
                            "children": null
                        },
                        {
                            "id": 42,
                            "url": "/VehicleBrandAxios",
                            "name": "品牌汇总",
                            "icon": "StarOutlined",
                            "children": null
                        },
                        {
                            "id": 20,
                            "url": "/Register",
                            "name": "注册页面",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 21,
                            "url": "/AntdLogin",
                            "name": "登录页面",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 22,
                            "url": "/AntdSteps",
                            "name": "Steps步骤条",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 23,
                            "url": "/AntdCheckbox",
                            "name": "AntdCheckbox多选框",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 24,
                            "url": "/AntdCascader",
                            "name": "AntdCascader级联",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 25,
                            "url": "/AntdDatePicker",
                            "name": "日期选择",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 26,
                            "url": "/AntdForm",
                            "name": "列表",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 27,
                            "url": "/AntdTransfer",
                            "name": "穿梭框",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 28,
                            "url": "/AntdUpload",
                            "name": "附件上传",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 29,
                            "url": "/AntdTabs",
                            "name": "标签页1",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 30,
                            "url": "/AntdTabsTwo",
                            "name": "标签页2",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 31,
                            "url": "/AntdAlert",
                            "name": "警告提示",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 32,
                            "name": "侧边抽屉",
                            "url": "/AntdDrawer",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 33,
                            "url": "/AntdModel",
                            "name": "对话框",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 34,
                            "url": "/AntdMessage",
                            "name": "全局提示",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 35,
                            "url": "/AntdOpenNotification",
                            "name": "通知提醒框",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 36,
                            "url": "/AntdProgress",
                            "name": "进度条",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 37,
                            "url": "/AntdPopconfirm",
                            "name": "气泡确认框",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 38,
                            "url": "/AntdResult",
                            "name": "Result结果",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 39,
                            "url": "/AntdApin",
                            "name": "加载中",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 40,
                            "url": "/AntdSkeleton",
                            "name": "Skeleton骨架占位符",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 41,
                            "url": "/AntdBackTop",
                            "name": "回到顶部",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 43,
                            "url": "/AntdConfigProvider",
                            "name": "全局变量中文",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                        {
                            "id": 44,
                            "url": "/AntdFormCheck",
                            "name": "form表单校验输入框",
                            "icon": "TransactionOutlined",
                            "children": null
                        },
                    ]
                },
                {
                    "id": 2,
                    "icon": "WomanOutlined",
                    "name": "react测试",
                    "url": "/vehicleManage",
                    "children": [
                        {
                            "id": 3,
                            "url": "/",
                            "name": "品牌汇总",
                            "icon": "StarOutlined",
                            "children": null
                        },
                        {
                            "id": 4,
                            "url": "/Event",
                            "name": "Event事件触发",
                            "icon": "VideoCameraAddOutlined",
                            "children": null
                        },
                        {
                            "id": 5,
                            "url": "/GetInputValue",
                            "name": "GetInputValue获取参数",
                            "icon": "VerifiedOutlined",
                            "children": null
                        },
                        {
                            "id": 6,
                            "url": "/Mvvm",
                            "name": "Mvvm",
                            "icon": "WhatsAppOutlined",
                            "children": null
                        },
                        {
                            "id": 7,
                            "url": "/FormTest",
                            "name": "FormTest",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 8,
                            "url": "/TodoList",
                            "name": "TodoList",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 9,
                            "url": "/News",
                            "name": "新闻信息",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 10,
                            "url": "/Book",
                            "name": "Book",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 11,
                            "url": "/User",
                            "name": "布局-嵌套路由-用户中心",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 12,
                            "url": "/Shop",
                            "name": "商店信息",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 13,
                            "url": "/Home",
                            "name": "菜品页面",
                            "icon": "WifiOutlined",
                            "children": null
                        },
                        {
                            "id": 14,
                            "url": "/ImageImport",
                            "name": "图片引入",
                            "icon": "TrademarkCircleOutlined",
                            "children": null
                        },
                        {
                            "id": 15,
                            "url": "/Click",
                            "name": "点击触发",
                            "icon": "TrademarkCircleOutlined",
                            "children": null
                        },
                        {
                            "id": 16,
                            "url": "/Demo",
                            "name": "Demo",
                            "icon": "TrademarkCircleOutlined",
                            "children": null
                        },
                        {
                            "id": 17,
                            "name": "单个样式",
                            "url": "/ColorStyle",
                            "icon": "TableOutlined",
                            "children": null
                        },
                    ],
                }
            ],
            openKeys: [],
        };
    }

    componentDidMount() {
        // this.getMenuList();
    }

    getMenuList = () => {
        var url = Config.host + '/menu/indexMenuAndPermission';
        axios.post(url, {
            "userId": "89"
        })
            .then((response) => {
                console.log('titles: ', response.data.value.titles);
                this.setState({
                    menuTreeInfo: response.data.value.titles,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // 菜单点击触发
    menuClick = (e) => {
        console.log('menuClick e: ', e);
    }

    /**
     * 展示菜单的递归方法
     * @param {*} menuTreeInfo
     */
    showMenu(menuTreeInfo) {
        if (Array.isArray(menuTreeInfo)) {
            return (
                menuTreeInfo.map((record) => {
                    if (record.children) {
                        return <SubMenu key={record.id} title={
                            <div className="icons-list">
                                <span onClick={this.menuClick}>{record.name}</span>
                            </div>
                        }>
                            {this.showMenu(record.children)}
                        </SubMenu>;
                    } else {
                        return <Menu.Item key={record.id}>
                            <Link to={record.url}>
                                <span onClick={this.menuClick}>{record.name}</span>
                            </Link>
                        </Menu.Item>;
                    }
                })
            );
        }
    }

    /**
     * 点击时切换展开项 支持打开第二个一级菜单，自动关闭原来的一级菜单
     */
    onOpenChange = (openKeys) => {
        console.log('onOpenChange openKeys: ', openKeys);
        const latestOpenKey = openKeys.find(key =>
            this.state.openKeys.indexOf(key) === -1
        );
        if (this.state.openKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        console.log('render this.state.openKeys: ', this.state.openKeys);
        console.log('render this.state.childRouterListInfo: ', this.state.childRouterListInfo);
        const menuTreeRender = this.showMenu(this.state.menuTreeInfo);


        console.log('render  this.props.children: ', this.props.children);
        console.log('render  routerList: ', routerList);


        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <img src="http://img5.mtime.cn/mt/2019/01/09/171109.88229500_270X405X4.jpg" style={{width: this.state.collapsed ? '80px' : '200px'}} alt=""></img>
                        <Menu
                            defaultSelectedKeys={['1']}
                            // defaultOpenKeys={['sub1']}
                            mode='inline'
                            theme='dark'
                            // inlineCollapsed={this.state.isFold}
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            key={1}
                        >
                            {menuTreeRender}
                        </Menu>
                    </Sider>

                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <h1>当前登录人: 张士维</h1>
                        </Header>


                        <Content style={{padding: '0 50px'}}>
                            <h1>右侧内容</h1>
                        </Content>

                        <Footer style={{textAlign: 'center'}}>Ant Design ©2020 Created by Ant UED</Footer>
                    </Layout>

                </Layout>
            </div>
        );
    }
}

export default AntdLayout;
