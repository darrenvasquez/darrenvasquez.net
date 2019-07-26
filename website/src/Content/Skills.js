
import React, { Component } from 'react'

import {List, Modal, Button} from 'semantic-ui-react'

import './Skills.css'

import skills from './Data/skills.json'

class Skills extends Component {

    render() {

        const items = skills.skills;

        return (

            <div className='skills'>

                Skills <br/>

                <h3>Click on a skill for details!</h3>

                <div className='skills-list'>
                    <List bulleted>
                        {items.map((item, i) =>
                            
                            <Modal closeIcon size='small' id={i} trigger={<List.Item>{item.name}</List.Item>}>
                                <Modal.Header>{item.name}</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        Here are some projects that I have worked on utilizing {item.name}: <br/><br/>
                                        {item.projects.map((project, i) =>
                                            <div>{project} <br/><br/></div>
                                            )}
                                    </Modal.Description>
                                </Modal.Content>
                                {item.link ? <Modal.Actions>
                                    <Button positive icon='arrow right' labelPosition='right' content={item.linkName}></Button>
                                </Modal.Actions> : null}
                                
                            </Modal>
                            
                        )}
                    </List>
                </div>

            </div>

        );
    }

}

export default Skills;