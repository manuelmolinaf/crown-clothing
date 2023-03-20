
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/authentication/authentication.component';

const App = () => {

  return (

    <Routes>
      <Route path='/' element={<Navigation />} >

        <Route index element={<Home />} />
        <Route path='/auth' element={<SignIn />} />

      </Route>
    </Routes>
  );
}

export default App;