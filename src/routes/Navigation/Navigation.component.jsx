
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>

      <Navbar bg="dark" variant='dark' className='mb-3 shadow' expand="lg">
        <Container fluid>
          <Link className='text-decoration-none ms-4' to='/'>
            <Navbar.Brand>
              <FontAwesomeIcon className='me-2 text-warning fs-4' icon={faCrown} />
              Crown Clothing
            </Navbar.Brand>
          </Link>

          <Nav className='d-flex w-100'>

            <Link className='nav-link me-auto' to='/' >
              SHOP
            </Link>
            {currentUser ? (

              <Link className='nav-link me-4' onClick={signOutUser}>
                SIGN OUT
              </Link>

            ) : (
              <Link className='nav-link me-4' to='auth'>
                SIGN IN
              </Link>
            )}
          </Nav>


        </Container>
      </Navbar>

      <Outlet />

    </Fragment>
  )
}

export default Navigation