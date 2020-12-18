import React,{Component} from 'react'
import './login.less'
import logo from './images/timg.jpg'
import { Form, Input, Button } from 'antd';

//管理的路由组件
export default class Login extends Component {
  handleSubmit = () => {

  }
  
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            className="login-form"
            onSubmit={this.handleSubmit}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div> 
    )
  }
}

// 前台表单验证
// 收集表单输入数据
