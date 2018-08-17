import React from 'react';
import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container
} from 'reactstrap';
class AppNavbar extends React.Component {
     state = {
        isOpen: false
      }

      toggle  = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


	render() {
		return (
			<div className="AppNavbar">
        <Navbar color="dark" dark expand="sm" className="md-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="https:\\github.com\aroicx" target="_blank">GitHub</NavLink>
                
                </NavItem>
              </Nav>
            </Collapse>

          </Container>
        </Navbar>
      </div>
		);
	}
}



export default AppNavbar;
