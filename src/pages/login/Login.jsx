import React, {Component} from 'react';
import {hashHistory} from 'react-router'
import {Form, Icon, Input, Button} from 'antd';
import {Link} from 'react-router';
import './style.less';

const FormItem = Form.Item;

@Form.create()
export default class Login extends Component {
    state = {
        errMessage: '',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {form} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                if (values.userName === 'zzj' && values.password === '123') {
                    hashHistory.push('home')
                } else {
                    this.setState({
                        errMessage: '账户名或密码错误',
                    });
                }
            }
        })
    };
    handleErr = () => {
        this.setState({
            errMessage: '',
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {errMessage, success} = this.state;
        const isSuccess = success ? 'home' : '';
        console.log(errMessage);
        return (
            <Form className="login-form" onSubmit={this.handleSubmit}>
                <h1 className="title">用户登录</h1>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {required: true, message: '请输入用户名'},
                        ],
                        onChange: this.handleErr,
                    })(
                        <Input
                            prefix={<Icon type="user"/>}
                            placeholder="请输入账号"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {required: true, message: '请输入密码'},
                        ],
                        onChange: this.handleErr,
                    })(
                        <div>
                            <Input
                                prefix={<Icon type="lock"/>}
                                type="password"
                                placeholder="请输入密码"
                            />
                            <div className="err-message">
                                {errMessage}
                            </div>
                        </div>
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        className="button"
                        htmlType="submit"
                    >
                        登陆
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
