import { Menu } from 'antd';
import React, { Component } from 'react';

const { SubMenu } = Menu;

export class NavBar extends Component {
    state = {
        active: 'home',

    }

    handleClick = (e: any) => {
        console.log("CLICK");
        this.setState({
            active: e.key
        });
    };

    render() {
        return (
            <Menu 
                onClick={this.handleClick} 
                selectedKeys={[this.state.active]} 
                mode="horizontal"
                theme="dark">
                <Menu.Item key="Dashboard">
                    Dashboard
                </Menu.Item>
            </Menu>
        )
    }
}
