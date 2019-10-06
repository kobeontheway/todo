import React from 'react';
import {Card, Button, Form, Input, message, Icon, Checkbox} from "antd";
import "./index.less";

const FormItem=Form.Item;

class Buttons extends React.Component{
     

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((errors,values) =>{
            if(!errors){
                message.success(`${userInfo.username} 登录成功`)
            }
        })
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Card title="登录">
                    <Form  style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator("username",{
                                    initalValue:"admin",
                                    rules:[{required: true, message: "用户名不能为空"},
                                    {pattern:/^\w+$/g, message:"只支持字母或数字"}]
                                })(<Input prefix={<Icon type="user"/>} placeholder="用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("password",{
                                    initalValue:"admin",
                                    rules:[
                                        {required: true,message: "密码不能为空"},
                                        {min:6, max:15,message:"5<长度<16"},
                                    ]
                                })(<Input prefix={<Icon type="lock"/>} placeholder="密码"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember",{
                                    valuePropName:"checked",
                                    initalValue:true,
                                    rules:[
                                    ]
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(Buttons);