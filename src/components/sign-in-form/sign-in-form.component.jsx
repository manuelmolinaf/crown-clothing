import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { signInWithGooglePopup, signInAuthWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import toast from 'react-hot-toast';
import { Fragment } from 'react';


const SignInForm = () => {

  const defaultFormFields = {
    email: '',
    password: '',

  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password } = formFields;


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })

  }


  const handleSubmit = async (event) =>{
    event.preventDefault();

    toast.promise(
      signInAuthWithEmailAndPassword(email, password),
      {
        success: 'You\'re Signed In!',
        loading: 'Signing in...',
        error: (error)=>{

          switch(error.code){

            case 'auth/wrong-password':
              return 'Wrong password!';
            
            case 'auth/user-not-found':
              return 'User not found!';
            
            default:
              console.log(error);
              return 'Error signing in!';
              
          }
        }
      }
    );
  }

  const signInWithGoogle = async() =>{
    signInWithGooglePopup();  

  }

  return(
    <Fragment>
      <h2> Already have an account? </h2>
      <span className='text-secondary'> Sign in with your email and password</span>
      <Form className='mt-4' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='signInEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' name='email' onChange={handleChange} placeholder='Enter email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='signInPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' onChange={handleChange} placeholder='Password' required />
        </Form.Group>
        <Button variant='dark' name='emailPassword' type='submit'>
          <FontAwesomeIcon className='me-2' icon={faRightToBracket}/>
          Sign In
        </Button>
        <Button variant='primary' name='google' type='button' className='ms-3' onClick={signInWithGoogle}>
          <FontAwesomeIcon className='me-2' icon={faGoogle} />
          Sign In with Google
        </Button>
      </Form>
    </Fragment>
  )

}

export default SignInForm