import React from 'react'
import {    
    Form,    
    FormControl,
    InputGroup,
    DropdownButton,
    Dropdown, 
    Button,      
  } from "react-bootstrap";

const SearchBox = (props) =>
{
    return(
        <Form className="d-flex">
          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title="Category"
              id="input-group-dropdown-1"
            >
            <Dropdown.Item href="/category/circuit-protection">Circuit Protection</Dropdown.Item>
            <Dropdown.Item href="/category/connectors">Connectors</Dropdown.Item>
            <Dropdown.Item href="/category/electromechanical">Electromechanical</Dropdown.Item>
            <Dropdown.Item href="/category/embedded-solutions">Embedded Solutions</Dropdown.Item>
            <Dropdown.Item href="/category/enclosures">Enclosures</Dropdown.Item>
            <Dropdown.Item href="/category/optoelectronics">Optoelectronics</Dropdown.Item>
            <Dropdown.Item href="/category/passive-components">Passive Components</Dropdown.Item>
            <Dropdown.Item href="/category/power">Power</Dropdown.Item>
            <Dropdown.Item href="/category/semiconductors">Semiconductors</Dropdown.Item>
            <Dropdown.Item href="/category/sensors">Sensors</Dropdown.Item>
            <Dropdown.Item href="/category/test-measurement">Test &amp; Measurement</Dropdown.Item>
            <Dropdown.Item href="/category/thermal-management">Thermal Management</Dropdown.Item>
            <Dropdown.Item href="/category/tools-supplies">Tools &amp; Supplies</Dropdown.Item>
            <Dropdown.Item href="/category/wire-cable">Wire &amp; Cable</Dropdown.Item>
            <Dropdown.Item href="/category/robotics-and-prototyping">Robotics &amp; Protoyping</Dropdown.Item>
            <Dropdown.Item href="/category/unclassified">Unclassified</Dropdown.Item>                                
            <Dropdown.Divider />
            <Dropdown.Item className="Active"  href="/allproducts"><b>All Product Categories</b></Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Text input with dropdown button" />
            <Button className="fa fa-search" variant="outline-secondary" id="button-addon1">
            {/* <i class="bi bi-search"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </Button>
          </InputGroup>
        </Form>
    );
};

export default SearchBox