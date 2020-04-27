import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Product from './Product'
import Form from './Form'
import Homepage from './Homepage';


const Header = () => {
	const divStyle = {
		color: '#00ffff',
		background: 'black!important'
	};
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/shop">Jonas Foods</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/shop/">Home</Link>					
						<Link to="/shop/products">Products</Link>
						<Link to="/shop/contact">Contact</Link>
					</Nav>
					
				</Navbar.Collapse>
			</Navbar>
			<Switch>
			    
				<Route exact path="/shop" component={Homepage} />
				<Route exact path="/shop/contact" component={Form} />
				<Route exact path="/shop/products" component={Product} />
				<Redirect to="/shop" />
			</Switch>
		</div>

	)
}

export default Header;