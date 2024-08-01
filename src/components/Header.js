import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import moment from "moment";

const Header = () => {
  const [dateTime, setDateTime] = useState(
    moment().format("DD MMMM YYYY hh:mm:ss A")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(moment().format("DD MMMM YYYY hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <img
          src="https://orbisvacation.us/img/img_orbis_logo.png"
          alt="Logo"
          height="30"
        />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>{dateTime}</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
