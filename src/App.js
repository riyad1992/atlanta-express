import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Sheard/Header/Header';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyBooking from './Pages/MyBooking/MyBooking';
import AllBooking from './Pages/AllBooking/AllBooking';
import Footer from './Pages/Sheard/Footer/Footer';
import AddService from './Pages/AddService/AddService';
import UpdateBooking from './Pages/UpdateBooking/UpdateBooking';
import UpdatePending from './Pages/UpdatePending/UpdatePending';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/placeorder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/allbooking'>
              <AllBooking></AllBooking>
            </PrivateRoute>
            <PrivateRoute path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/update/:id'>
              <UpdateBooking></UpdateBooking>
            </PrivateRoute>
            <PrivateRoute path='/updatePending/:id'>
              <UpdatePending></UpdatePending>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
