import React from 'react';
import "./form.css";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState } from 'react';
import { Button } from "react-bootstrap"
import { InputGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';



function RegForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="RegForm">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

    <Link className="btn btn-outline btn-lg" role="button" to="/">Back</Link>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type="invalid">please enter your firstname</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Middle name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Middle name"
          />
          <Form.Control.Feedback type="invalid" >please enter your middlename</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type="invalid">please enter your lastname</Form.Control.Feedback>
        </Form.Group>
        <Col>
          <Form.Group className="mb-3" controlId="formSignatutrePhoto">
            <Form.Label>Signature Photo</Form.Label>
            <Form.Control type="file" required />
          </Form.Group>
        </Col>
      </Row>
      
      <Form.Group className="mb-3" controlId="formDepartmentNmae">
        <Form.Label>Institute Name</Form.Label>
        <Form.Select defaultValue="Institute">
          <option disabled>Institute</option>
          <option>CSPIT</option>
          <option>DEPSTAR</option>
          <option>I2IM</option>
          <option>CMPICA</option>
          <option>RMPCP</option>
          <option>PDPIAS</option>
          <option>CIPS</option>
          <option>ARPIT</option>
          <option>MTIN</option>
          <Form.Control
            type="invalid"
            Please select Institute
          />
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDepartmentNmae">
        <Form.Label>Department Name</Form.Label>

        <Form.Select defaultValue="Department">
          <option disabled>Department</option>
          <option>CSPIT</option>
          <option>DEPSTAR</option>
          <option>I2IM</option>
          <option>CMPICA</option>
          <option>RMPCP</option>
          <option>PDPIAS</option>
          <option>CIPS</option>
          <option>ARPIT</option>
          <option>MTIN</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select Department
        </Form.Control.Feedback>
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formId">
        <Row>
          <Col>
            <Form.Label>StudentId/FacultyId</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="19ce000"
            />
          </Col>
          <Col>
            <Form.Label>Type</Form.Label>
            <Form.Select>
              <option disabled>choose</option>
              <option>Student</option>
              <option>faculty</option>
              <option>Staff</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Residential Address</Form.Label>
        <Form.Control as="textarea" rows={4} type="address" required placeholder="Enter your Address" />
        <Form.Control.Feedback type="invalid">please enter your address</Form.Control.Feedback>
      </Form.Group>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            required
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            required
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formdob">
        <Form.Label>Date of Birth</Form.Label>

        <Form.Control type="date" name="dob" required placeholder="Date of Birth" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBloodGroup">
            <Form.Label>Blood Group</Form.Label>

            <Form.Select defaultValue="Blood Group">
              <option disabled>choose</option>
              <option>A+</option>
              <option>B+</option>
              <option>A-</option>
              <option>B-</option>
              <option>AB+</option>
              <option>O+</option>
              <option>O+</option>
              <option>AB-</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formMobileNo">
        <Form.Label>Contact No</Form.Label>

        <Form.Control type="Integer" required placeholder="Contact Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label column sm={2}>Email</Form.Label>

        <Form.Control type="Email" required placeholder="Email" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Emergency contact person name</Form.Label>
          <Form.Control type="text" placeholder="name" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid contact person name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Emergency person No</Form.Label>
          <Form.Control type="text" placeholder="number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Emergency person email</Form.Label>
          <Form.Control type="text" placeholder="email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" required controlId="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="I here by declare that the information given above  is correct
               and that i will by the rules and regulations of the fittness center
                notified to me from time to time"
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formRegistrationDate">

            <Form.Label>Date</Form.Label>

            <Form.Control type="date" name="Date" type="invalid" required placeholder="Date" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formSignatutrePhoto">
            <Form.Label>Signature Photo</Form.Label>
            <Form.Control type="file" required />
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
  
}

export default RegForm;
