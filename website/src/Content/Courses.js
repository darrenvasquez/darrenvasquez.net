
import React, { Component } from 'react'

import { List } from 'semantic-ui-react';

import './Courses.css';

class Courses extends Component {

    render() {
        return (

            <div className='courses'>

                This page showcases the critical courses that I have taken at Arizona State University.

                <br/><br/>

                <div className='course-list'>
                    <List bulleted>
                        <List.Item> Object Oriented Program & Data</List.Item>
                        <List.Item> Computer Org & Assembly Language Programming</List.Item>
                        <List.Item> Logic in Computer Science</List.Item>
                        <List.Item> Data Structures & Algorithms</List.Item>
                        <List.Item> Intro to Artificial Intelligence</List.Item>
                        <List.Item> Intro to Theoretical Computer Science</List.Item>
                        <List.Item> Operating Systems</List.Item>
                    </List>
                </div>

            </div>

        );
    }

}

export default Courses;