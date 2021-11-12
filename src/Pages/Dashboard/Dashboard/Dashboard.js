import React from 'react';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Review from '../../Home/Review/Review';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from '../../Payment/Payment';
import Reviews from '../../Reviews/Reviews';
//css
import './Dashboard.css';
const Dashboard = () => {
    const { path, url } = useRouteMatch();

    const { logOut } = useAuth();

    return (
        <div>
            <div className="dashboard-container ">
                <div className="row container">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h4>Dashboard</h4>
                            <Link to={`${url}/payment`}>
                                <li className="dashboard-menu mt-3">Pay</li>
                            </Link>

                            <Link to={`${url}/myOrders`}>
                                <li className="dashboard-menu mt-3">My Order list</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-3">Review</li>
                            </Link>

                            <Link to={`${url}/logout`}>
                                <li
                                    onClick={logOut}
                                    className="dashboard-menu mt-3">Logout</li>
                            </Link>
                            {/* <div className="admin-dashboard">
                                <li className="dashboard-menu mt-5">Orders list</li>

                               
                                    <Link to={`${url}/addService`}>
                                        <li className="dashboard-menu">Add Service</li>
                                    </Link>
                                
                                <Link to={`${url}/makeAdmin`}>
                                    <li className="dashboard-menu">Make Admin</li>
                                </Link>
                                <Link to={`${url}/manageServices`}>
                                    <li className="dashboard-menu">Manage Service</li>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-9">
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
                            {/* <Route exact path={path}>
                                <MyBookings></MyBookings>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/BookingList`}>
                                <MyBookings></MyBookings>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/addService`}>
                                <AddServices></AddServices>
                            </Route>
                            <Route exact path={`${path}/manageServices`}>
                                <ManageServices></ManageServices>
                            </Route> */}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;