import React from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import MenuConfig from '../../config/menuConfig';

const { SubMenu } = Menu;
export default class NavLeft extends React.Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState(
            {
                menuTreeNode
            }
        )
    }

    renderMenu = (data) => {
        return data.map(
            (item) => {
                if(item.children){
                    return (
                        <SubMenu title = {item.title} key={item.key}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )
                }
                return <Menu.Item title={item.title} key = {item.key}>{item.title}</Menu.Item>
            }
        )
    }

    render(){
        return(
            <div>
                <div className='logo'>
                    <img src="logo192.png"/>
                    <h1>healthy</h1>
                </div>
                    <Menu theme="dark">
                        {this.state.menuTreeNode}
                    </Menu>
            </div>
        );
    }
}