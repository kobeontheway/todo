import React from "react";
import { Table, Card, Button, message, Modal } from "antd";
import axios from '../../axios';

export default class BasicTable extends React.Component {

    componentWillMount() {
        const dataSource = [
            {
                id: 1,
                name: "王玮",
                sex:1,
                age: 29,
                birthday: "2019-01-01",
                address: "北京市朝阳区酒仙桥",
                like: "吃"
            },
            {
                id: 2,
                name: "李昊",
                sex:1,
                age: 29,
                birthday: "2019-01-01",
                address: "北京市朝阳区酒仙桥",
                like: "喝"
            },
            {
                id: 3,
                name: "张亮",
                sex:2,
                age: 29,
                birthday: "2019-01-01",
                address: "北京市朝阳区酒仙桥",
                like: "玩"
            },
        ];
        this.setState({
            dataSource
        });

        this.request();
    }

    handleDelete(item){
        Modal.confirm({
            title:"提示",
            content:"确定要删除吗",
            onOk:()=>{
                message.success("删除成功");
                this.request();
            }
        })
        
    }

    request=()=>{
        axios.ajax({
            url:"/table/list",
            data:{
                params:{
                    page:1
                },
                isShowLoading: false
            }
        }).then((res)=>{
            if(res.code === 0){
                this.setState({
                    dataSourceMock:res.result
                })
            }
        }).catch(error=>message.error(error))
           
    }

    render() {
        const columns = [
            {
                title: "ID",
                dataIndex: "id",
                width:80
            },
            {
                title: "姓名",
                dataIndex: "name",
                width:80
            },
            {
                title: "性别",
                dataIndex: "sex",
                width:80,
                render(sex){
                    let map={
                        1:"男",
                        2:"女"
                    }
                    return map[sex];
                }
            },
            {
                title: "年龄",
                dataIndex: "age",
                width:120,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: "出生日期",
                dataIndex: "birthday",
                width:100
            },
            {
                title: "地址",
                dataIndex: "address",
                width:150
            },
            {
                title: "爱好",
                dataIndex: "like",
                width:80
            },
            {
                title:"操作",
                width:120,
                render:(text,item)=>{
                    return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            }

        ]
        return (
            <div>
                <Card title="用户">
                 <Table bordered columns={columns} dataSource={this.state.dataSourceMock||this.state.dataSource} scroll={{y:300}}/>
                </Card>
            </div>
        )
    }
}