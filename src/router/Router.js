import ImageImport from '../components/test/ImageImport'
import ColorStyle from '../components/test/ColorStyle' 
import Click from '../components/test/Click'
import Event from '../components/test/Event'
import GetInputValue from '../components/test/GetInputValue'
import Mvvm from '../components/test/Mvvm'
import FormTest from '../components/test/FormTest'
import TodoList from '../components/test/TodoList'
import Demo from '@liumcb/react-demo';
import VehicleBrandAxios from '../components/test/VehicleBrandAxios';
import News from '../components/test/News';
import NewsDetail from '../components/test/NewsDetail';
import Book from '../components/test/Book';
import BookDetail from '../components/test/BookDetail';
import Home from '../components/Product/Home';
import ProductContent from '../components/Product/ProductContent';
import Login from '../components/login/Login';
import User from '../components/layout/User';
import Shop from '../components/layout/Shop';
import MainInfo from '../components/layout/user/MainInfo';
import UserInfo from '../components/layout/user/UserInfo';
import ShopList from '../components/layout/shop/ShopList';
import ShopDetail from '../components/layout/shop/ShopDetail';
import ShopConfig from '../components/layout/shop/ShopConfig';
import AntdDesign from '../components/antd/AntDesign';
import AntdLayout from '../components/antd/AntdLayout';
import DictCode from '../components/antd/DictCode';

let routerList = [ 
  {
    path: '/',
    component: VehicleBrandAxios,
    exact: true
  },
  {
    path: '/ColorStyle',
    component: ColorStyle
  },
  {
    path: '/ImageImport',
    component: ImageImport
  },
  {
    path: '/Click',
    component: Click
  },
  {
    path: '/Event',
    component: Event
  },
  {
    path: '/GetInputValue',
    component: GetInputValue
  },
  {
    path: '/Mvvm',
    component: Mvvm
  },
  {
    path: '/FormTest',
    component: FormTest
  },
  {
    path: '/TodoList',
    component: TodoList
  },
  {
    path: '/Demo',
    component: Demo
  },
  {
    path: '/News',
    component: News
  },
  {
    path: '/NewsDetail/:aid',
    component: NewsDetail
  },
  {
    path: '/Book',
    component: Book
  },
  {
    path: '/BookDetail',
    component: BookDetail
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/ProductContent/:id',
    component: ProductContent
  },
  {
    path: '/User',
    component: User,
    childRouterList: [
      {
        path: '/User/',
        component: MainInfo,
        exact: true
      },
      {
        path: '/User/UserInfo',
        component: UserInfo
      },
    ]
  },
  {
    path: '/Shop',
    component: Shop,
    childRouterList: [
      {
        path: '/Shop/',
        component: ShopList,
        exact: true
      },
      {
        path: '/Shop/ShopDetail',
        component: ShopDetail
      },
      {
        path: '/Shop/ShopConfig',
        component: ShopConfig
      },
    ]
  },
  {
    path: '/AntdDesign',
    component: AntdDesign
  },
  {
    path: '/AntdLayout',
    component: AntdLayout
  },
  {
    path: '/DictCode',
    component: DictCode
  },
];

export default routerList;