
import React, { Component } from 'react'

import {List} from 'semantic-ui-react'

import './Skills.css'

class Skills extends Component {

    render() {
        return (

            <div className='skills'>

                Skills <br/>

                <h3>Click on a skill for details!</h3>

                <br/>

                <div className='skills-list'>
                    <List bulleted>
                        <List.Item> Java</List.Item>
                        <List.Item> React.js</List.Item>
                        <List.Item> C / C++</List.Item>
                        <List.Item> Python</List.Item>
                        <List.Item> HTML/CSS/JavaScript</List.Item>
                        <List.Item> Git/GitHub</List.Item>
                        <List.Item> Adobe Photoshop</List.Item>
                    </List>
                </div>

            </div>

        );
    }

}

export default Skills;