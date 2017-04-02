import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import {FormGroup,FormControl,ControlLabel,Button,Radio,Checkbox,HelpBlock} from 'react-bootstrap';
import './Account.css';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
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
                <form>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                  />
                  <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                  />
                  <FieldGroup
                    id="formControlsPassword"
                    label="Password"
                    type="password"
                  />
                  <FieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."
                  />

                  <Checkbox checked readOnly>
                    Checkbox
                  </Checkbox>
                  <Radio checked readOnly>
                    Radio
                  </Radio>

                  <FormGroup>
                    <Checkbox inline>
                      1
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                      2
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                      3
                    </Checkbox>
                  </FormGroup>
                  <FormGroup>
                    <Radio inline>
                      1
                    </Radio>
                    {' '}
                    <Radio inline>
                      2
                    </Radio>
                    {' '}
                    <Radio inline>
                      3
                    </Radio>
                  </FormGroup>

                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option value="select">select (multiple)</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControl.Static>
                      email@example.com
                    </FormControl.Static>
                  </FormGroup>

                  <Button type="submit">
                    Submit
                  </Button>
                </form>
            </div>
        </div>
    );
};

export default Account;
