
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <Fragment>

      <Navbar bg="dark mb-3 shadow" variant="dark">
        <Container className='m-0'>
          <Link className='text-decoration-none' to='/'>
            <Navbar.Brand>
              <FontAwesomeIcon className='me-2 text-warning fs-4' icon={faCrown} />
              Crown Clothing
            </Navbar.Brand>
          </Link>
          <Nav className='me-auto'>
          <Link className='nav-link' >
            SHOP
          </Link>
          <Link className='nav-link' to='auth'>
            SIGN IN
          </Link>
            
          </Nav>
        </Container>
      </Navbar>

      <Outlet />

    </Fragment>
  )
}

export default Navigation