import React ,{Component} from 'react'
// import {Button,message} from 'antd'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import 'antd/dist/antd.css'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'


// 应用的根组件
// export default class App extends Component {
//   handleClick = () => {
//     message.success('成功啦....')
//   }
//   render(){
//     return <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
//   }
// }

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>{/* 只匹配其中一个 */}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}