
import React, { Component } from 'react'

import { List, Modal, Button } from 'semantic-ui-react';

import './Courses.css';

import courses from './Data/courses.json'

class Courses extends Component {

    render() {

        const items = courses.courses;

        return (

            <div className='courses'>

                Courses <br/>

                <h3>Click on a course for details!</h3>

                <div className='course-list'> 
                    <List bulleted>
                        {items.map((item, i) =>
                            
                            <Modal closeIcon size='small' id={i} trigger={<List.Item><a rel="noopener norefferer" href="# " onclick="return false;" id='list-item'>{item.name}</a></List.Item>}>
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

export default Courses;