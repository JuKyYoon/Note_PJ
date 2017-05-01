import React from 'react';
import Neditor from '../components/neditor'
import './Home.css'
import {Button,ButtonGroup,PageHeader} from 'react-bootstrap';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import {FormGroup,FormControl} from 'react-bootstrap';

const Home = () => {
    return (
        <div className="HomePage">
          
          <div className="editspace">
                <Neditor/>
          </div>
        </div>


    );
};

export default Home;
