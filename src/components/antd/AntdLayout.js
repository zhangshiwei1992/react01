import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Config from '../../config/Config'
import { Layout, Menu, Breadcrumb } from 'antd'; 
  
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
 
class AntdLayout extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      current:'',
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
          "name": "首页",
          "num": 1,
          "parentId": 0,
          "url": "/AntdDesign"
        },
        {
          "action": "basicConfiguration",
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
              "action": "basicConfiguration_collectPersonalConfig",
              "children": null,
              "icon": "TableOutlined",
              "id": 3,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "ColorStyle",
              "num": 1,
              "parentId": 18,
              "url": "/ColorStyle"
            },
            {
              "action": "basicConfiguration_codeChart",
              "children": null,
              "icon": "TransactionOutlined",
              "id": 4,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "代码表",
              "num": 2,
              "parentId": 18,
              "url": "/DictCode"
            },
            {
              "action": "fundManage_fundingManage",
              "children": null,
              "icon": "TrademarkCircleOutlined",
              "id": 5,
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
              "id": 6,
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
              "id": 7,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "Demo",
              "num": 5,
              "parentId": 18,
              "url": "/Demo"
            }
          ],
          "icon": "setting",
          "id": 8,
          "ismenu": 1,
          "level": null,
          "levels": 1,
          "name": "基础管理",
          "num": 4,
          "parentId": 0,
          "url": "/basicConfiguration"
        },
        {
          "action": "vehicleManage",
          "children": [
            {
              "action": "vehicleManage_vehicleBrand",
              "children": null,
              "icon": "VideoCameraAddOutlined",
              "id": 9,
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
              "id": 10,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "车厂商",
              "num": 2,
              "parentId": 21,
              "url": "/GetInputValue"
            },
            {
              "action": "vehicleManage_vehicleSeries",
              "children": null,
              "icon": "WhatsAppOutlined",
              "id": 11,
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
              "id": 12,
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
              "id": 13,
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
              "id": 15,
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
              "id": 16,
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
              "id": 17,
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
              "id": 18,
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
              "id": 19,
              "ismenu": 1,
              "level": null,
              "levels": 2,
              "name": "菜品页面",
              "num": 4,
              "parentId": 21,
              "url": "/Home"
            }
          ],
          "icon": "WomanOutlined",
          "id": 14,
          "ismenu": 1,
          "level": null,
          "levels": 1,
          "linkedList": [],
          "name": "车型库",
          "num": 5,
          "parentId": 0,
          "url": "/vehicleManage"
        }
      ],
      openKeys: []
    };
  }

  componentDidMount() {
    // this.setMenuList();
  }

  setMenuList = () => {
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
                <span>{record.name}</span>
              </div>
            }>
              {this.showMenu(record.children)}
            </SubMenu>;
          } else {
            return <Menu.Item key={record.id} >
              <Link to={record.url}> 
                <span>{record.name}</span>
              </Link>
            </Menu.Item>;
          }
        })
      );
    }
  }

  /**
   * 点击时切换展开项 支持打开第二个一级菜单，自动关闭原来的一级菜单
   * @param {} openKeys
   */
  onOpenChange = (openKeys) => {
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
    console.log('this.state.openKeys: ',this.state.openKeys);
    const menuTreeRender = this.showMenu(this.state.menuTreeInfo);

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <img src="http://img5.mtime.cn/mt/2019/01/09/171109.88229500_270X405X4.jpg" style={{ width: this.state.collapsed?'80px':'200px' }} alt="" ></img>

            <Menu
              defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              mode='inline'
              theme='dark'
              inlineCollapsed={this.state.isFold}
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
            >
              {menuTreeRender}
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} >
              <h1  >当前登录人: 张士维</h1>
            </Header>


            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Index</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
              </Breadcrumb>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
          </Layout>

        </Layout>
      </div>
    );
  }
}

export default AntdLayout;