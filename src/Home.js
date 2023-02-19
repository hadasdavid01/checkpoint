import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div><center>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/employees">Employees List</Link></Button>
                </Container>
                </center>
            </div>
        );
    }
}
export default Home;