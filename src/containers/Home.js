import React from 'react';
import Neditor from '../components/neditor'
import './Home.css'
import {Button,ButtonGroup,PageHeader} from 'react-bootstrap';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

const Home = () => {
    return (
        <div className="HomePage">
            <div className="SideMenu">
                <ButtonGroup vertical block>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button<  /Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                </ButtonGroup>
            </div>

            <div className="editspace">
                <div className="savebutton">
                    <PageHeader>
                        <input type="text" name="name" placeholder="Enter a title"/>
                        <small>Writer</small>
                        <Button bsStyle="success">Save</Button>
                    </PageHeader>
                </div>

                <Neditor/>
            </div>
        </div>


    );
};

export default Home;
