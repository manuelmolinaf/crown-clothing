import { Container } from 'react-bootstrap';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignIn = () => {

  return (

    <Container className='mt-5'>
        <Row>
          <Col className='border-end border-dark p-5'>
            <SignInForm/>
          </Col>
          <Col className='p-5'>
            <SignUpForm/>
          </Col>
        </Row>
      </Container>
  )

}

export default SignIn