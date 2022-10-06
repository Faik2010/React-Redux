// import React from "react";
// import { Link } from "react-router-dom";

// import {

// Collapse,

// Navbar,

// NavbarToggler,

// NavbarBrand,

// Nav,

// NavItem,

// NavLink,


// NavbarText,

// } from "reactstrap";
// import CartSummary from "../cart/CartSummary";

// export default class Navi extends React.Component {

// render() {

// return (

// <div>

// <Navbar color="light" light expand="md">

// {/* <NavbarBrand><Link to="/">Northwind falan</Link></NavbarBrand> */}

// <NavbarToggler />

// <Collapse navbar>

// <Nav className="ml-auto" navbar>

// <NavItem>

// <NavLink id="RouterNavLink" style={None} to="/">anywords</NavLink>

// {/* <NavLink to="/saveproducts">  kaydet</NavLink> */}

// {/* <NavLink><Link to="/saveproduct">Ürün Kayıt</Link></NavLink> */}

// {/* <NavLink as={Link} to="/">falan</NavLink> */}

// </NavItem>

// <NavItem>



// </NavItem>

// <CartSummary/>

// </Nav>



// </Collapse>

// </Navbar>

// </div>

// );

// }

// }


import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">Northwind Mağazası</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                
                  <Link to="/saveproduct">Ürün ekle</Link>
                
              </NavItem>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
