import React, { Component } from 'react';
// import { SplitButton, MenuItem } from 'react-bootstrap';
// import { Form, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button.js';


class ThemeSwitcher extends Component {

  state = { theme: null }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'default';
    
    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };
    
    return (
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>
        
          <span className={`h1 center-block text-center text-${theme ? themeClass : 'muted'}`} style={{ marginBottom: 25 }}>{theme || 'Default'}</span>
          
          <div className="center-block text-center">
            {/* <SplitButton bsSize="large" bsStyle={themeClass} title={`${theme || 'Default'} Theme`}>
              <MenuItem eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</MenuItem>
              <MenuItem eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</MenuItem>
              <MenuItem eventKey="Success" onSelect={this.chooseTheme}>Success Theme</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</MenuItem>
            </SplitButton> */}
{/* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
{/* </Form> */}
          </div>
          
        </div>
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;
