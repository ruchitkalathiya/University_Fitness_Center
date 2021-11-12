/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
//import Form from "./Form";

const Contact = () => (
  <section css={styles} className="contact" id="contact">

    
    <Container>
      <Map />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;

  }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;