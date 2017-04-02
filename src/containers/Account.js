import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import './Account.css';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}


const Account = () => {
    return (
        <div className="AccountPage">
            <div className="SideMenuAccount">
                <ListGroup>
                  <ListGroupItem header="Account" href="#link1">Link 1</ListGroupItem>
                  <ListGroupItem header="ex1" href="#link2">Link 2</ListGroupItem>
                  <ListGroupItem header="ex2" onClick={alertClicked}>
                    Trigger an alert
                  </ListGroupItem>
                </ListGroup>
            </div>

            <div className="accountspace">
                ddddddddddd
            </div>
        </div>
    );
};

export default Account;
