import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import Post from './components/Post'
import Edit from './components/Edit'
import Display from "./components/Display"


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Link to='/'><Navbar.Brand>Retaurants</Navbar.Brand></Link>
                        <Nav className="mr-auto">
                            <Nav.Link href={'/post'}>Create</Nav.Link>
                        </Nav>
                    </Navbar>
                    <br></br>
                    <Switch>
                        <Route exact path='/' component={Display}/>
                        <Route exact path='/post' component={Post}/>
                        <Route exact path='/edit' component={Edit}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App
