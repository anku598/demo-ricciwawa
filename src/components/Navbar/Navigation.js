import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AppleStore from '../../images/applestore.svg';
import Logo from '../../images/logo.png';
import PlayStore from '../../images/playstore.svg';
import './Navbar.scss';

const Navigation = () => {
	return (
		<div className='custom-container'>
			<Navbar collapseOnSelect expand='xl' className='main-navbar'>
				{/* <div className='custom-container'> */}
				{/* <LinkContainer to='/'> */}
				<Navbar.Brand>
					<div className='d-flex align-items-center justify-content-center '>
						<img src={Logo} alt='logo' className='site-logo' />
						<h1 className='site-name'>RicciWawa</h1>
					</div>
				</Navbar.Brand>
				{/* </LinkContainer> */}
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mx-auto'>
						{/* <LinkContainer to='/library'> */}
						<Nav.Link className='nav-link-item'>Library</Nav.Link>
						{/* </LinkContainer> */}
						<Nav.Link className='nav-link-item'>Blog</Nav.Link>
						<Nav.Link className='nav-link-item'>Contact</Nav.Link>
					</Nav>
					<Nav className='d-flex align-items-center'>
						<Nav.Link href='#deets'>
							<img src={AppleStore} alt='...' />
						</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							<img src={PlayStore} alt='...' />
						</Nav.Link>
						<NavDropdown
							title='En'
							id='collasible-nav-dropdown'
							className='language-options'
						>
							<NavDropdown.Item
								className='nav-dropdown-item'
								href='#action/3.1'
							>
								En
							</NavDropdown.Item>
							<NavDropdown.Item
								href='#action/3.2'
								className='nav-dropdown-item'
							>
								Bn
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				{/* </div> */}
			</Navbar>
		</div>
	);
};

export default Navigation;
