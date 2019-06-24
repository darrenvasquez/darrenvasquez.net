import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import './Header.css';

class Header extends Component {

    state = { activeItem: '' }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
        console.log("hello!")
    }

    render() {

        const {activeItem} = this.state

        return(

            <div className='header'>
                <Menu secondary fluid id="test">
                    <Menu.Item name='Home' onClick={this.handleItemClick} active={activeItem === 'Home'}/>
                    <Menu.Item name='About Me' onClick={this.handleItemClick} active={activeItem === 'About Me'}/>
                    <Menu.Item name='Courses' onClick={this.handleItemClick} active={activeItem === 'Courses'}/>
                    <Menu.Item name='Skills' onClick={this.handleItemClick} active={activeItem === 'Skills'}/>
                    <Menu.Menu position='right'>
                        <Menu.Item name='Darren Vasquez'/>
                    </Menu.Menu>
                </Menu>
            </div>
        
        );
    }
}

export default Header;