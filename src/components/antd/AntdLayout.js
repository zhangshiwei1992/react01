import React, { Component } from 'react';
import axios from 'axios';
import Config from '../../config/Config'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import routerList from '../../router/Router'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AntdLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFold: true,
      collapsed: false,
      menuTreeInfo: [
        {
          "action": "home",
          "children": null,
          "icon": "AndroidOutlined",
          "id": 1,
          "ismenu": 1,
          "level": null,
          "levels": 1,
          "name": "antd按钮",
          "num": 1,
          "parentId": 0,
          "url": "/AntdButton"
        },
        {
          "action": "basicConfiguration",
          "children": [
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 21,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "代码表",
              "num": 2,
              "parentId": 18,
              "url": "/DictCode"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 22,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "注册页面",
              "num": 2,
              "parentId": 18,
              "url": "/Register"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 23,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "登录页面",
              "num": 2,
              "parentId": 18,
              "url": "/AntdLogin"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 24,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Steps步骤条",
              "num": 2,
              "parentId": 18,
              "url": "/AntdSteps"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 25,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdCheckbox多选框",
              "num": 2,
              "parentId": 18,
              "url": "/AntdCheckbox"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 26,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdCascader级联",
              "num": 2,
              "parentId": 18,
              "url": "/AntdCascader"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 27,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdDatePicker",
              "num": 2,
              "parentId": 18,
              "url": "/AntdDatePicker"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 28,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdForm",
              "num": 2,
              "parentId": 18,
              "url": "/AntdForm"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 29,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdTransfer",
              "num": 2,
              "parentId": 18,
              "url": "/AntdTransfer"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 30,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdUpload",
              "num": 2,
              "parentId": 18,
              "url": "/AntdUpload"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 31,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdTabs",
              "num": 2,
              "parentId": 18,
              "url": "/AntdTabs"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 32,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdTabsTwo",
              "num": 2,
              "parentId": 18,
              "url": "/AntdTabsTwo"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 33,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdAlert",
              "num": 2,
              "parentId": 18,
              "url": "/AntdAlert"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 34,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdDrawer",
              "num": 2,
              "parentId": 18,
              "url": "/AntdDrawer"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 35,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "AntdModel",
              "num": 2,
              "parentId": 18,
              "url": "/AntdModel"
            },
          ],
          "icon": "setting", 
          "id": 8,
          "ismenu": 1,
          "level": null,
          "levels": 1,
          "name": "antd测试",
          "num": 4,
          "parentId": 0,
          "url": "/antd"
        },
        {
          "action": "vehicleManage",
          "children": [
            {
              "action": "basicConfiguration_operationsCenter",
              "children": null,
              "icon": "StarOutlined",
              "id": 2,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "品牌汇总",
              "num": 1,
              "parentId": 18,
              "url": "/"
            },
            {
              "action": "vehicleManage_vehicleBrand",
              "children": null,
              "icon": "VideoCameraAddOutlined",
              "id": 3,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Event",
              "num": 1,
              "parentId": 21,
              "url": "/Event"
            },
            {
              "action": "vehicleManage_vehicleFirm",
              "children": null,
              "icon": "VerifiedOutlined",
              "id": 4,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "GetInputValue",
              "num": 2,
              "parentId": 21,
              "url": "/GetInputValue"
            },
            {
              "action": "vehicleManage_vehicleSeries",
              "children": null,
              "icon": "WhatsAppOutlined",
              "id": 5,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Mvvm",
              "num": 3,
              "parentId": 21,
              "url": "/Mvvm"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 6,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "FormTest",
              "num": 4,
              "parentId": 21,
              "url": "/FormTest"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 8,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "TodoList",
              "num": 4,
              "parentId": 21,
              "url": "/TodoList"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 9,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "News",
              "num": 4,
              "parentId": 21,
              "url": "/News"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 10,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Book",
              "num": 4,
              "parentId": 21,
              "url": "/Book"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 11,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "布局-嵌套路由-用户中心",
              "num": 4,
              "parentId": 21,
              "url": "/User"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 12,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "商店信息",
              "num": 4,
              "parentId": 21,
              "url": "/Shop"
            },
            {
              "action": "vehicleManage_vehicleModel",
              "children": null,
              "icon": "WifiOutlined",
              "id": 13,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "菜品页面",
              "num": 4,
              "parentId": 21,
              "url": "/Home"
            },
            {
              "action": "fundManage_fundingManage",
              "children": null,
              "icon": "TrademarkCircleOutlined",
              "id": 14,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "ImageImport",
              "num": 4,
              "parentId": 18,
              "url": "/ImageImport"
            },
            {
              "action": "fundManage_accessoryConfig",
              "children": null,
              "icon": "TrademarkCircleOutlined",
              "id": 15,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Click",
              "num": 5,
              "parentId": 18,
              "url": "/Click"
            },
            {
              "action": "fundManage_accessoryConfig",
              "children": null,
              "icon": "TrademarkCircleOutlined",
              "id": 16,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Demo",
              "num": 5,
              "parentId": 18,
              "url": "/Demo"
            },
            {
              "action": "basicConfiguration_collectPersonalConfig",
              "children": null,
              "icon": "TableOutlined",
              "id": 17,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "ColorStyle",
              "num": 1,
              "parentId": 18,
              "url": "/ColorStyle"
            },
          ],
          "icon": "WomanOutlined",
          "id": 18,
          "ismenu": 1,
          "level": null,
          "levels": 1,
          "name": "react测试",
          "num": 5,
          "parentId": 0,
          "url": "/vehicleManage"
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
            return <Menu.Item key={record.id} >
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
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    console.log('render this.state.openKeys: ', this.state.openKeys);
    console.log('render this.state.childRouterListInfo: ', this.state.childRouterListInfo);
    const menuTreeRender = this.showMenu(this.state.menuTreeInfo);


    console.log('render  this.props.children: ', this.props.children);
    console.log('render  routerList: ', routerList);


    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <img src="http://img5.mtime.cn/mt/2019/01/09/171109.88229500_270X405X4.jpg" style={{ width: this.state.collapsed ? '80px' : '200px' }} alt="" ></img>
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
            <Header className="site-layout-background" style={{ padding: 0 }} >
              <h1  >当前登录人: 张士维</h1>
            </Header>


            <Content style={{ padding: '0 50px' }}>
              <h1>右侧内容</h1> 
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
          </Layout>

        </Layout>
      </div>
    );
  }
}

export default AntdLayout;