import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Home from './Content/Home.js';
import About from './Content/About.js';
import Skills from './Content/Skills.js';
import Courses from './Content/Courses.js';

import PageNotFound from './Content/PageNotFound.js';

const routes = [
	{ path: "/", exact: true, sidebar: "Home", main: () => <Home/> },
	{ path: "/about", exact: true, sidebar: "About", main: () => <About/> },
	{ path: "/skills", exact: true, sidebar: "Skills", main: () => <Skills/> },
	{ path: "/courses", exact: true, sidebar: "Courses", main: () => <Courses/> }
];

class App extends Component {

	state = { activeItem: '' }

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
        console.log(this.state)
    }

	render() {

		const {activeItem} = this.state

		return (
			<Router>
			<div>
				<div className='main-header'>
					<Menu id="test" widths='4' style={{ width: "75vh" }}>
						{routes.map((route) => ( 
							<Menu.Item as={Link} to={route.path} name={route.sidebar} active={activeItem === route.sidebar} onClick={this.handleItemClick}/> 
						))}
					</Menu>
				</div>
				<div style={{ padding: "2%" }}>
					<Switch>
						{routes.map((route, index) => ( <Route key={index} path={route.path} exact={route.exact} component={route.main}/>))}
						<Route component={PageNotFound}/>
					</Switch>
				</div>
			</div>
			</Router>
		);
	}

}

export default App;
