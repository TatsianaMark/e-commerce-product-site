import React, {Component} from 'react';
import { Switch, Route}  from 'react-router-dom';
import './App2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar';
import {ProductList} from "./components/ProductList";
import {Details} from "./components/Details";
import {Cart} from "./components/Cart";
import {Default} from "./components/Default";
import Modal from "./components/Modal";
import {Tours} from "./components/Tours";
import {Blog} from "./components/Blog";
import Hotels from "./components/Hotels/Hotels";
import {Events} from "./components/Events/Events";
import {Apartments} from "./components/Hotels/Apartments";




class App extends Component{

    render(){
        return(
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route exact path="/details" component={Details} />
                    <Route exact path="/tours" component={Tours} />
                    <Route exact path="/hotels" component={Hotels} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/events" component={Events} />
                    <Route exact path="/hotels/:apartments" component={Apartments} />
                    <Route exact path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Modal/>
            </>
        );
    }
}

export default App;


