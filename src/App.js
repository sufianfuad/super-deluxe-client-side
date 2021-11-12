
import './App.css';
//react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Home/Products/Products';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ErrorFound from './Pages/ErrorFound/ErrorFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
//import react router dom V5
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/AddProducts/AddProducts';
import MyOrders from './Pages/MyOrders/MyOrders';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Payment/Payment';
import Review from './Pages/Home/Review/Review';





function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>

            <PrivateRoute exact path="/placeOrder/:purchaseId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>

            <Route path="/reviews">
              {/* <Review></Review> */}
            </Route>

            <Route exact path="*">
              <ErrorFound></ErrorFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
