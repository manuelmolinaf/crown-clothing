
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>

      <Navbar bg="dark" variant='dark' className='shadow sticky-top' expand="lg">
        <Container fluid>
          <Link className='text-decoration-none ms-4' to='home'>
            <Navbar.Brand>
              <FontAwesomeIcon className='me-2 text-warning fs-4' icon={faCrown} />
              Crown Clothing
            </Navbar.Brand>
          </Link>

          <Nav className='d-flex w-100 me-4'>

            <Link className='nav-link me-auto' to='/shop' >
              SHOP
            </Link>
            {currentUser ? (

              <div role='button' className='nav-link me-4' onClick={signOutUser}>
                SIGN OUT
              </div>

            ) : (
              <Link className='nav-link me-4' to='/'>
                SIGN IN
              </Link>
            )}

            <CartIcon/>
          </Nav>


        </Container>
      </Navbar>

      <div className='p-4'>
        <Outlet />
      </div>

    </Fragment>
  )
}

export default Navigation