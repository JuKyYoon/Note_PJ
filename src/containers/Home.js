import React from 'react';
import Neditor from '../components/neditor'
import './Home.css'
import {Button,ButtonGroup} from 'react-bootstrap';
const Home = () => {
    return (
        <div className="HomePage">
            <div className="SideMenu">
                <ButtonGroup vertical block>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                    <Button>Full width button</Button>
                </ButtonGroup>
            </div>

            <div className="editspace">
                <div className="savebutton">
                    <Button bsStyle="success">Save</Button>
                </div>

                <Neditor/>
            </div>
        </div>


    );
};

export default Home;
