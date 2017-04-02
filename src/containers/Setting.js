import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import {Button,Panel} from 'react-bootstrap';
import './Setting.css';
function alertClicked() {
  alert('You clicked the third ListGroupItem');
}
class Example extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Panel collapsible expanded={this.state.open}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </Panel>
      </div>
    );
  }
}

const Setting = () => {
    return (
        <div className="SettingPage">
            <div className="SideMenuSetting">
                <ListGroup>
                  <ListGroupItem header="Setting" href="#link1">Link 1</ListGroupItem>
                  <ListGroupItem header="ex1" href="#link2">Link 2</ListGroupItem>
                  <ListGroupItem header="ex2" onClick={alertClicked}>
                    Trigger an alert
                  </ListGroupItem>
                </ListGroup>
            </div>

            <div className="settingspace">
                <Example/>
            </div>
        </div>
    );
};

export default Setting;
