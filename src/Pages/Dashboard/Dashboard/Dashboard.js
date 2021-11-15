import React from 'react';
//react font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AddProducts/AddProducts';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from '../../Payment/Payment';
import Reviews from '../../Reviews/Reviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

//css
import './Dashboard.css';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
const Dashboard = () => {
    const { path, url } = useRouteMatch();

    const { user, admin, logOut } = useAuth();
    // react font awesome
    const dashIcon = <FontAwesomeIcon icon={faBars} />
    return (
        <div>
            <div className="dashboard-container">
                <div className="row container">
                    <div className="col-md-3 col-lg-3 col-sm-12">
                        <div className="dashboard">
                            <h4 className="pt-5 fw-bold"><span className="dashIcon me-2 px-1">{dashIcon}</span>Dashboard</h4>
                            <div className="dash-btn-holder">
                                <Link to="/">
                                    <button className="btn-visit-front">Visit Site</button>
                                </Link>
                            </div>
                            <div className="logged-user pt-2">
                                <p>Welcome! {user?.displayName}</p>
                            </div>
                            {
                                !admin && <div>


                                    <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu mt-3">Pay</li>
                                    </Link>

                                    <Link to={`${url}/myOrders`}>
                                        <li className="dashboard-menu mt-3">My Order</li>
                                    </Link>

                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu mt-3">Review</li>
                                    </Link>
                                </div>
                            }

                            {
                                admin && <div>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu mt-3">Make Admin</li>
                                    </Link>

                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-menu mt-3">Add a Product</li>
                                    </Link>

                                    <Link to={`${url}/manageProduct`}>
                                        <li className="dashboard-menu mt-3">Manage Products</li>
                                    </Link>

                                    <Link to={`${url}/manageOrders`}>
                                        <li className="dashboard-menu mt-3">Manage all Order</li>
                                    </Link>
                                </div>
                            }

                            <Link to={`${url}/logout`}>
                                <li
                                    onClick={logOut}
                                    className="dashboard-menu mt-3">Logout</li>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Reviews></Reviews>
                            </Route>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addProduct`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/manageProduct`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/manageOrders`}>
                                <ManageAllOrder></ManageAllOrder>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;