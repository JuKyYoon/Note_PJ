import React from 'react';
import Neditor from '../components/neditor'
import './Home.css'
import {Button,ButtonGroup,PageHeader} from 'react-bootstrap';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import {FormGroup,FormControl} from 'react-bootstrap';
function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

const Home = () => {
    return (
        <div className="HomePage">
            <div className="SideMenu">
                <ButtonGroup vertical block>
                    <ListGroup>
                      <div className="home_search">
                        <FormControl className="home_input_search" type="text" placeholder="Search" />
                        <button className="homesearchsubmit" type="submit">Submit</button>
                      </div>
                      <ListGroupItem header="New Memo" href="#link1">Link 1</ListGroupItem>
                      <ListGroupItem header="memo 1" href="#link2">Link 2</ListGroupItem>
                      <ListGroupItem header="memo 2" onClick={alertClicked}>
                        Trigger an alert
                      </ListGroupItem>
                    </ListGroup>
                </ButtonGroup>
            </div>

            <div className="editspace">
                

                <Neditor/>
            </div>
        </div>


    );
};

export default Home;
