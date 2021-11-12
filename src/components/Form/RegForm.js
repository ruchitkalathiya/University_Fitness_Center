import React from 'react';
import "./form.css";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState } from 'react';
import { Button } from "react-bootstrap"
import { InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


function RegForm() {
  
  const [validated, setValidated] = useState(false);
  const [memberType, setMemberType] = useState('')
  const [bloodgrp, setBloodgrp] = useState('')

  /*const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };*/

  const [selected, setSelected] = React.useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    setInstitute(event.target.value);
  };

  const Cspit = ["BTECH(CE)", "BTECH(CL)", "BTECH(CS)", "BTECH(EC)", "BTECH(EE)", "BTECH(IT)", "BTECH(ME)", "DRCE", "DRCL", "DREC", "DREE", "DRME", "MTECH(AMT)", "MTECH(CE)", "MTECH(CL)", "MTECH(CSE)", "MTECH(EC)", "MTECH(EE)", "MTECH(EVD)", "MTECH(ICT)", "MTECH(IT)", "MTECH(ME)", "MTECH(PE)", "MTECH(TE)", "MTM", "PGDCS"];
  const Depstar = ["BTECH(CE)", "BTECH(CS)", "BTECH(IT)", "DRCE"];
  const Rpcp = ["B.Pharm", "CPCT", "CPPAT", "CPPT", "CPPV", "DRFPH", "DRPC", "DRPHC", "DRPHCOG", "DRPHCOL", "DRPHT", "M.PHARM(CT)", "M.PHARM(DRA)", "M.PHARM(CP)", "M.PHARM(PT)", "M.PHARM(QA)", "MPHPCL", "MPHPPP", "MPHPQA", "MPHRGA", "MPHTCH", "MPM", "PGDCT", "PGDPT"];
  const Cmpica = ["B.Sc(IT)", "BCA", "DRMCA", "M.Sc(IT)", "MCA", "MCAL", "PGDCA"];
  const I2im = ["BBA", "DRLSC", "DRMBA", "MBA-CH", "PGDM"];
  const Pdpias = ["B.SC", "BSC(CHEM)", "BSCPHY", "DRBC", "DRBIO", "DRCHEM", "DRCSMCRI", "DRMTH", "DRNST", "DRPHY", "M.Phil", "M.Sc(AOC)", "M.Sc(BC)", "M.Sc(BT)", "M.Sc(MI)", "M.Sc(MTH)", "M.Sc(NST)", "M.Sc(PHY)"];
  const Arip = ["BPT", "CCAPT", "DRPT", "MPT(CS)", "MPT(MS)", "MPT(NS)", "MPT(PA)", "MPT(RE)", "MPT(SS)", "MPT(WH)"];
  const Mtin = ["BSC.Nursing", "DNR", "GNM", "MNCH", "MNMH", "MNMS", "MNOG", "MNPN"];
  const Cips = ["BMIT", "BOP", "BOTAT", "BSMT", "DRMLT", "DROTAT", "M.Sc.MIT", "MSMLT", "PGDCH", "PGDHAT", "PGDMLT"];

  const [gender, setGender] = useState('');
  const [institute, setInstitute] = useState('')
  const [department, setDepartment] = useState('')

  const [user, setUser] = useState({// *
    firstname: '',
    middlename: '',
    lastname: '',
    nameofinstitute: '',
    nameofDepartment: '',
    studentIDEmployeeID: '',
    residentialAddress: '',
    city: '',
    state:'',
    zip: '',
    telephone: '',
    mobileno: '',
    email: '',
    dob: '',
    gender: '',
    emergencyContactPerson: '',
    relation: '',
    telephone1: '',
    mobileNo1: '',
    state:'',        
    email1: ''
  });

  let name, value;
  // handling the values that are changed
  const handleinputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }
 
  const [base64Image, setbase64Image] = useState('')
  const [previewSource, setPreviewSource] = useState('')

    const uploadImage = async (base64EncodedImage) => {
        setbase64Image(base64EncodedImage)
    }
    const handleFileInputChange = (e) =>{
      const file = e.target.files[0]
      previewFile(file)
  }

    const previewFile = (file) =>{
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () =>{
          setPreviewSource(reader.result)
      }
  }
    
  const submitForm = async (e) => {    
    e.preventDefault();
    const { firstname, middlename, lastname, nameofinstitute, nameofDepartment, studentIDEmployeeID, residentialAddress, city, zip, telephone, mobileno, email, dob, emergencyContactPerson, relation, telephone1, mobileNo1, email1 ,state } = user;    

    uploadImage(previewSource)
    
    if (base64Image == null) {
      await axios.post(`/users/member`, {
        firstname, middlename, lastname, nameofinstitute: institute, nameofDepartment: department, studentIDEmployeeID, residentialAddress, city, zip, telephone, mobileno, email, dob, gender: gender, emergencyContactPerson, relation, telephone1,mobileno1:mobileNo1, email1, pimg: base64Image, memberType,bloodgrp,state 
      }).then((res) => {
        if (res.data === "error") 
          alert('already Member')
        else alert('done');
      }).catch((err) => {
        alert('err');
        console.log(err);
      });
    } else {
      await axios.post(`/users/member`, {
        firstname, middlename, lastname, nameofinstitute: institute, nameofDepartment: department, studentIDEmployeeID, residentialAddress, city, zip, telephone, mobileno, email, dob, gender: gender, emergencyContactPerson, relation, telephone1, mobileno1:mobileNo1, email1, pimg: base64Image, memberType,bloodgrp,state
      }).then((res) => {                
        if (res.data === "error") 
          alert('already Member')      
        else alert('done');
      }).catch((err) => {
        alert('err');
        console.log(err);
      });
    }
  }

  return (
    <div className="RegForm">
      <Form noValidate validated={validated} onSubmit={submitForm}>

        <Link className="btn btn-outline btn-lg" role="button" to="/">Back</Link>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstname"
              onChange={handleinputs}
              placeholder="First name"
            />
            <Form.Control.Feedback type="invalid">please enter your firstname</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Middle name</Form.Label>
            <Form.Control
              required
              type="text"
              name="middlename"
              onChange={handleinputs}
              placeholder="Middle name"
            />
            <Form.Control.Feedback type="invalid" >please enter your middlename</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastname"
              onChange={handleinputs}
              placeholder="Last name"
            />
            <Form.Control.Feedback type="invalid">please enter your lastname</Form.Control.Feedback>
          </Form.Group>
          
        </Row>

        <Form.Group className="mb-3" controlId="formDepartmentNmae" >
          <Form.Label>Institute Name</Form.Label>
          <Form.Select defaultValue="institute"  onChange={changeSelectOptionHandler}>
            <option>Institute</option>
            <option value="cspit" selected={institute === "cspit"}>CSPIT</option>
            <option value="depstar" selected={institute === "depstar"}>DEPSTAR</option>
            <option value="rpcp" selected={institute === "rpcp"}>RMPCP</option>
            <option value="cmpica" selected={institute === "cmpica"}>CMPICA</option>
            <option value="i2im" selected={institute === "i2im"}>I2IM</option>
            <option value="pdpias" selected={institute === "pdpias"}>PDPIAS</option>
            <option value="arip" selected={institute === "arip"}>ARPIT</option>
            <option value="mtin" selected={institute === "mtin"}>MTIN</option>
            <option value="cips" selected={institute === "cips"}>CIPS</option>
            <Form.Control
              type="invalid"
              Please select Institute
            />
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDepartmentNmae">
          <Form.Label>Department Name</Form.Label>

          <Form.Select defaultValue="department"   onChange={(e) => { setDepartment(e.target.value) }}>
            <option disabled>Department</option>
            {
              institute === "cspit" ? Cspit.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "depstar" ? Depstar.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "cmpica" ? Cmpica.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "rpcp" ? Rpcp.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "i2im" ? I2im.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "pdpias" ? Pdpias.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "arip" ? Arip.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "mtin" ? Mtin.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
            {
              institute === "cips" ? Cips.map((dept) => {
                return <option value={dept} selected={
                  department === dept
                }>{dept}</option>
              }) : null
            }
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
                name="studentIDEmployeeID" 
                onChange={handleinputs}
                placeholder="19ce000"
              />
            </Col>
            <Col>
              <Form.Label >Type</Form.Label>
              <Form.Select name="membertype"  onChange={(e) => { setMemberType(e.target.value) }}>
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
          <Form.Control as="textarea" rows={4} type="address" required   name="residentialAddress" value={user.residentialAddress} onChange={handleinputs} placeholder="Enter your Address" />
          <Form.Control.Feedback type="invalid">please enter your address</Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" onChange={handleinputs} name="city" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" onChange={handleinputs} name="state" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip"  name="zip" onChange={handleinputs}   required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formMobileNo">
          <Form.Label>Contact No</Form.Label>

          <Form.Control type="Integer" required placeholder="Contact Number"  name="mobileno" onChange={handleinputs}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form=TelephoneNo">
          <Form.Label>Telephone No</Form.Label>

          <Form.Control type="Integer" required placeholder="Telephone Number" name="telephone" onChange={handleinputs} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>Email</Form.Label>

          <Form.Control type="Email" required placeholder="Email"  name="email" onChange={handleinputs}/>
        </Form.Group>

        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              required
              label="Male"
              name="gender"              
              onChange={(e) => {setGender(e.target.value)}}
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              required              
              label="Female"
              name="gender"
              type={type}
              onChange={(e) => {setGender(e.target.value)}}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        
        <Form.Group className="mb-3" controlId="formdob">
          <Form.Label>Date of Birth</Form.Label>

          <Form.Control type="date" name="dob" required  onChange={handleinputs} placeholder="Date of Birth" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3"  controlId="formBloodGroup">
              <Form.Label>Blood Group</Form.Label>

              <Form.Select name="bloodgrp" defaultValue="Blood Group" 
               onChange={(e) => { setBloodgrp(e.target.value) }}>
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
        

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Emergency contact person name</Form.Label>
            <Form.Control type="text" placeholder="name"  name="emergencyContactPerson" required  onChange={handleinputs} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid contact person name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Emergency contact person relation</Form.Label>
            <Form.Control type="text" placeholder="relation"  name="relation"  required  onChange={handleinputs} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid contact person name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Emergency person TelephoneNo</Form.Label>
            <Form.Control type="text" placeholder="number" name="telephone1" required   onChange={handleinputs}/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid telephonenumber.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Emergency person No</Form.Label>
            <Form.Control type="text" placeholder="number"  name="mobileNo1" required     onChange={handleinputs} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Emergency person email</Form.Label>
            <Form.Control type="text" placeholder="email"  name="email1" required   onChange={handleinputs} />
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

        <Col>
            <Form.Group className="mb-3" controlId="formSignatutrePhoto">
              <Form.Label>Signature Photo</Form.Label>
              <Form.Control type="file" required id="pimg" name="pimg"
              onChange={handleFileInputChange} />
            </Form.Group>
        </Col>

        {previewSource && (
            <>
                <div style={{"margin-top":"20px"}}>
                <h5> Profile Image</h5>
                <img src={previewSource} alt="chosen"
                style={{height:"200px",margin:"5px"}}/>
                </div>
            </>
        )}


        <Button type="submit" name="submit">Submit form</Button>
      </Form>
    </div>
  );

}

export default RegForm;
