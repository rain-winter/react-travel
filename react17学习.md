# 命令
* `npx create-react-app my-app`
* `npx create-react-app react-travel2 --template typescript` 
* `npm start`
# jsx
React认为视图的本质就是渲染逻辑与UI视图表现的内在统一，React把HTML与渲染逻辑进行了耦合，形成了JSX。
## JSX的特点
* HTML代码可以与jsx兼容
* 可以在jsx中镶如表达式
* 使用jsx指定子元素
* 小驼峰命名。class变成了className、tabindex变成tabIndex
* jsx自定义属性，以 **data-** 开头
## JSX 编译成对象
* jsx会被编译成`React.createElement()` 对象
~~~jsx
const element = (
    <h1 className="greeting">hello</h1>
);
const element = React.createElement(
    'h1',
    {className='greeting' },
    'hello'
);
// 这两种写法一样
// jsx 会被编译成React.createElement()对象
const element = { // 最后输出的对象
    type: 'h1',
    props: {
        className:'greeting',
        children:'hello'
    }
}
~~~

# css in js

新建`custom.d.ts` 这种文件可以被ts直接识别。不被编译不备打包

~~~ts
// 声明 CSS 文件。讲过声明后才可以被TS识别成对象,通过访问对象的形式使用css
// import styles from './a.css'
declare module "*.css" {
    const css: { 
        [key: string]: string 
    }
    export default css
}
~~~

`import style from './index.css'` `<div className={style.app}></div>`

`npm install typescript-plugin-css-modules --save`

## 加载媒体资源

新建assets文件夹。存储images、fonts、icons

# class 组件

react组件必须继承`React.Component` ，这个组件接受一个泛型（Props,State,自定义数据）

~~~ts
class ShoppingCart extends React.Component<Props, State>{
   constructor(props: Props) { // 传递来的Props
   super(props); // 必须调用父类
   this.state = { // 初始化state
     isOpen: false,
    }
   }
   render() {
       return (
           // DOM 元素
           // this.state.属性名
       )
   }
}
~~~

## 行内样式

行内样式接受一个采用小驼峰命名属性的js对象，可以预防xss攻击

~~~js
const divStyle = {
    color: 'blue'
}
// 在组件内使用时
return ( <div style={divStyle}></div> )
~~~

# State和Props的区别

* props是组件对外的接口，而state是组件对内部的接口
* props用于组件间数据传递，而state用于组件内部的数据传递

## 用setState()修改State

`this.setState({isOpen:false})`

构建函数constructor是唯一可以初始化state的地方

~~~js
constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
}
~~~

* 调用setState后，state不会立即改变，是异步操作
* 不要依赖当前的state，计算下一个state
* state处理一般发生在声明周期变化的时候。（生命周期不变，state就是开始那个值）

~~~jsx
<button onClick = {
        this.setState((preState, preProps) => {
            return {count: this.preState.count++}
        }, ()=>{})
    }>
</button>
~~~



## Props

> 本质上，props就是传入函数的参数，是从外部传入组件内部的数据。就是父组件传递到子组件的数据。props是只读属性

# 事件处理

~~~js
handleClick = (e) => {
    e.tatget // 描述的是时间发生的元素
    e.currentTarger // 描述的是时间处理绑定的元素
}
~~~

# react中的icon

`npm install react-icons`

[react-icons]: http://react-icons.github.io/react-icons

`<FcAddressBook />`组件方式使用

# React生命周期

* Mounting：创建虚拟DOM，渲染UI
* Updating：更新虚拟DOM，重新渲染UI

* Unmounting：删除虚拟DOM，移除UI

~~~js
  shouldComponentUpdate(nextProps, nextState) {
     return (nextState.some! = this.state.some);
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
~~~

# hooks（钩子）

>  一类特殊的函数，为你的**函数式**组件注入特殊功能。Hooks的目的就是为了给函数式组件加上状态

* 消息处理的一种方法，用来监视指定程序
* 函数组件中需要处理副作用，可以用钩子把外部代码“沟进来”
*  常用钩子：useState、useEffect、useContext、useReducer
Hooks代表了React结构的一次重大变革。我们不再需要类组件了，不会再有this、binding、甚至可能取代redux，简化了代码、减少了模板、降低了学习难度
## 常用钩子
1. useState()
2. 副作用钩子：useEffect()
    可以取代生命周期函数componentDidMount、componentDidUpdate和componentWillUnmount

## 副作用

纯函数（pure function）：给一个函数同样的参数，那么这个函数永远返回同样的。React组件接受相同的参数（props），渲染的UI应该永远一样。

副作用与纯函数相反：指一个函数处理了与返回值无关的事情。

### useState()

~~~tsx
import React, { useState } from "react";
const App:React.FC = (props) => {
    const [count, setCount] = useState<number>(0)
    return (
        {count}
        <button onClick={ () => {setCount(count+1)} }></button>
    )
}
~~~

### useEffect()

**第二个参数不可为空，为空会死循环**

~~~tsx
import React, { useState, useEffect } from 'react'
const App: React.FC = (props) => {
    const [robotGallery, setRobotGallery] = useState<any>([])
    useEffect(() => {}) // 一直循环。
    useEffect(() => {}, []) // 空数组表示模拟componentDidMount() {}
    useEffect(() => {}, [count]) // 当count改变时触发函数
}
~~~

**useEffect使用async**

~~~tsx
useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch("url")
        const data = await response.json()
        } catch (e) {
            error = e.message
        }
    }
    fetchData()
}, [])
~~~

**三元表达式 **

~~~tsx
{ !loading ? (
    // 显示代码
) : (
    <h2>loading...加载中</h2>
)
}
~~~

**二元表达式** 

~~~tsx
{/* 错误处理 error不为空，为假就显示div*/}
{(!error || error !== '') && <div>{error}</div>}
~~~

### 全局数据传递 - AppState.tsx

* Context
* useContext()

在父组件index.tsx

~~~tsx
const defaultContextValue = {
  username: "rain"
}
export const appContext = React.createContext(defaultContextValue)
ReactDOM.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <App /> App是父组件
    </appContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
~~~

子组件Robot.tsx（函数组件）

~~~tsx
import React, { useContext } from 'react';
const value = useContext(appContext) // 使用useContext() 取值
<p>作者：{value.username}</p>
~~~

子组件Robot.tsx（类组件）

~~~tsx
render() {
    return (
    <appContext.Consumer>
            {(value) => {
                return <div>{value.usename}</div>
            }}
    </appContext.Consumer>
    )
}
~~~

## 自定义高阶组件HOC

` const hoc = higherOrde(wrappedComponent)`

高阶组件（HOC）就是返回了组件的函数，通过组件嵌套的方法给子组件添加更多的功能。

* 抽取重复代码，实现组件复用
* 条件渲染，控制组件的渲染逻辑
* 捕获/劫持被处理组件的生命周期

~~~TSX
import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
/**
 *  AddToCart.tsx 
 *  高阶组件HOC以 with开头 返回一个组件
 *  改造了 Robot.tsx RobotDiscount.tsx
 */
import { RobotProps } from './Robot'
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  // return class extends React.Component {}
  // return ()=>{}
  return (props) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          console.log(state)
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          }
        })
      }
    }
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}
~~~

## 自定义Hook

> use 开头。是函数。并非React特性。内部可调用替他Hook

~~~tsx
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        console.log(state)
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        }
      })
    }
  }
  return addToCart
}
~~~

# 项目

~~~bash
yarn add -D typescript-plugin-css-modules # css模块化
yarn add react-i18next # 国际化
npm install antd @ant-design/icons
~~~

## 主页（热门产品开发）

~~~tsx
{/* App.tsx */}
// 引入三张主图以及对应的mock数据
function App () {
    return (
        <div className={styles['page-content']}>
            <ProductCollection
                title={<Typography.Title level={3} type="warning">新品上市</Typography.Title>
                sideImage={sideImage3}
        		products={productList3}
            />
        </div>
    )
}
~~~

~~~tsx
{/* ProductCollection 组件 */}
interface PropsType { // 定义泛型
  title: JSX.Element
  sideImage: any
  products: any[]
}
export const ProductCollection: React.FC<PropsType> = ({ title, sideImage, products }) => {
  return <div className="styles.content">
    <Divider orientation="left">{title}</Divider> 分割线
    <Row>
      <Col span={4}>
        <img src={sideImage} alt='' />
      </Col>
      <Col span={20}>
        <Row>
          <Col span={12}>
            <ProductImage
              id={products[0].id}
              size={'large'}
              title={products[0].title}
              imageSrc={products[0].touristRoutePictures[0].url}
              price={products[0].price}
            />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}></Col>
              <Col span={12}></Col>
            </Row>
            <Row>
              <Col span={12}></Col>
              <Col span={12}></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          6个<Col />
        </Row>
      </Col>
    </Row>
  </div>
}
~~~

~~~tsx
// 展示图片的组件
import React from "react";
import { Image, Typography } from 'antd'

interface PropsType {
  id: string | number
  size: 'large' | 'small'
  imageSrc: string
  price: number | string
  title: string
}
export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
  return (
    <>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">
          {title.slice(0, 25)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          ￥{price}起
        </Typography.Text>
      </div>
    </>
  )
}
~~~

## 路由

SPA（单页网站应用）

* JS、CSS、HTML打包为一个超级大的文件，一次性丢给浏览器
* JS劫持浏览器路由，生成虚拟路由来动态渲染页面dom元素
* 符合前后端分离的趋势，服务器不负责UI输出，而专注于数据的支持
* 同时支持桌面app、手机App、网站App

React网站使用的路由都是虚拟的，不会显示项目目录

* 主页：http://localhost:3000
* 搜索页面：http://localhost:3000/search



[Declarative routing for React apps at any scale | React Router](https://reactrouter.com/)选择web

* react-router-dom用于浏览器，处理Web App
* react-router-natice 用于React Native，处理手机app路由
* react-router-redux 提供了路由中间件，处理redux的集成
* react-router-config 用来静态配置路由

| react-router-dom（会自动安装react-router核心框架） |                                              |
| -------------------------------------------------- | -------------------------------------------- |
| \<Link />                                          | 渲染出\<a />                                 |
| \<BrowserRouter />                                 | 利用H5 API 实现路由切换                      |
| \<HashRouter />                                    | 利用原生JS的window.location.push实现路由切换 |

~~~tsx
// index.tsx
import { BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById('root')
);
~~~

~~~tsx
// App.tsx
import { Route, Routes } from 'react-router-dom'
function App() {
    return (
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:touristRouteId' element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
}
~~~

~~~js
// 取值，跳转操作
import { Link, useParams, useNavicate } from 'react-router-dom'
<Link to={`/detail/${id}`}></Link>
const { touristRouteId } = useParams()
const nav = useNavicate() nav('url')
~~~

## redux

什么时候用redux：

* 组件需要共享数据的时候
* 某个状态需要在任何地方被随时访问
* 某个组件需要改变另一半组件的状态的时候
* 语言切换、黑暗模式切换、用户登录全局数据共享

首先新建redux文件夹，新建languageReducer、store

~~~tsx
// store.ts
import { createStore } from 'redux'
import languageReducer from './languageReducer'
const store = createStore(languageReducer) // 创建store
export default store
~~~

~~~tsx
// languageReducer.ts
export interface LanguageState {
  language: 'en' | 'zh'
  languageList: { name: string; code: string }[]
}

// 设计state
const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: '中文',
      code: 'zh',
    },
    {
      name: 'English',
      code: 'en',
    },
  ],
}

export default (state = defaultState, action: any) => {
  // 使用 switch
  switch (action.type) {
    case 'change_language':
      return { ...state, language: action.payload }
    case 'add_language':
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      }
    default:
      return state
  }
}
~~~



~~~tsx
// header.class.tsx
import { LanguageState } from '../../redux/languageReducer'
import store from "../../redux/store";
class HeaderComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        const storeState = store.getState() // 通过store对象的方法获取state
        this.state={}
    }
}
~~~

~~~tsx
// header.class.tsx
//  发送action到redux
const action = {
    type: 'your action name',
    payload:  params
}
store.dispatch(action) // 发送到redux
store.subscribe(() => {
    // 在这通过store.getState()获取更新后的数据，并显示到UI上
})
~~~

## i18n

* [i18next]([Introduction - react-i18next documentation](https://react.i18next.com/))：目前最主流的框架
* react-i18next：i18next的react插件

