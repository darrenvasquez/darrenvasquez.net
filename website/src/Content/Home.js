
import React, { Component } from 'react'

import { Header, Popup, Icon } from 'semantic-ui-react';

import './Home.css';

class Home extends Component {

    constructor(props) {
		super(props);
		this.link = this.link.bind(this);
	}

	link = (a, b) => {
		window.open(a)
		// window.location.href = a;
    }

    render() {

        const socials = [
            {
                name: 'Instagram',
                icon: 'instagram',
                description: 'Follow me on Instagram',
                link: 'https://instagram.com/darrenvasquez'
            },
            {
                name: 'Twitter',
                icon: 'twitter',
                description: 'Follow me on Twitter',
                link: 'https://twitter.com/darrenvasquez13'
            },
            {
                name: 'GitHub',
                icon: 'github',
                description: 'View my GitHub projects!',
                link: 'https://www.github.com/darrenvasquez'
            }
        ];

        return (

            <div className='home'>
                <div className='centered'>
                    <div className='yellow'>
                        <Header>
                            <Header as='h2'>Computer Science Student</Header>
                            <Header as='h3'>Georgetown, TX<br/>Tempe, AZ</Header>
                        </Header>
                        <br/>
                    </div>
                    <div className='socials'>
                            {socials.map(social => (
                                <Popup 
                                    key={social.name} 
                                    position='bottom center' 
                                    inverted
                                    trigger={<Icon link name={social.icon} onClick={(e) => this.link(social.link, e)} size='large'/>} 
                                    header={social.name} 
                                    content={social.description}
                                />
                            ))}
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;