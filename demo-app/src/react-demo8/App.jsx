import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Home';
// import Products from './Products';
// import Customers from './Customers';
// import Employees from './Employees';

const Products = lazy(() => import('./Products'));
const Customers = lazy(() => import('./Customers'));
const Employees = lazy(() => import('./Employees'));

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-warning">React router demo for lazy loading</h1>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <Link to="/" className="list-group-item">Home</Link>
                            <Link to="/products" className="list-group-item">Products</Link>
                            <Link to="/customers" className="list-group-item">Customers</Link>
                            <Link to="/employees" className="list-group-item">Employees</Link>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Suspense fallback={<h3>Loading...</h3>}>
                            <Route path="/" component={Home} exact={true} />
                            <Route path="/home" component={Home} exact={true} />
                            <Route path="/products" component={Products} exact={true} />
                            <Route path="/customers" component={Customers} exact={true} />
                            <Route path="/employees" component={Employees} exact={true} />
                        </Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

const Root = <Router><App /></Router>;
render(Root, document.getElementById('root'));