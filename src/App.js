
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';


const App = () => {

  return (

    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<SignIn />} />
        <Route path='/auth' element={<SignIn />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
