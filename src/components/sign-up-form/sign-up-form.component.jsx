
import { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import toast from 'react-hot-toast';

const SignUpForm = () => {

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',

  }

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })

  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(!email || ! password) return;

    if(password !== confirmPassword){
      toast.error('Passwords do not match');
      return;
    }

    toast.promise(
      createAuthUserWithEmailAndPassword(email, password)
      .then( ({user}) => createUserDocumentFromAuth(user, {displayName})),
       {
         loading: 'Saving...',
         success: ()=>{
          resetFormFields();
          return (<b>Signed up succesfully!</b>)
         },
         error: (error)=>{
          if(error.code === 'auth/email-already-in-use'){
            return 'Email already in use!';
          }
          else{
            console.log(error);
            return 'Error, could not sign up.';
          }  
        },
       }
     );

  }


  return (
    <Fragment>
      <h2> Don't have an account? </h2>
      <span className='text-secondary'> Sign up with your email and password</span>
      <Form className='mt-4' onSubmit={handleSubmit}>
    
        <Form.Group className='mb-3' controlId='displayName'>
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Display Name'
            name='displayName'
            onChange={handleChange}
            value={displayName} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            onChange={handleChange}
            value={email} />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={password} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            onChange={handleChange}
            value={confirmPassword} />
        </Form.Group>
        <Button variant='dark'  type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );


}

export default SignUpForm