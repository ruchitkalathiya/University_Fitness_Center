/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Socials = () => (
  <div css={styles} className="socials">
    <i className="fab fa-instagram"></i>
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-twitter"></i>
  </div>
);

const styles = css`
  display: flex;
  flex-direction: column;
  float: right;
  margin-top: -170px;
  i {
    margin-right: -560px;
    font-size: 1.9em;
    margin-top: 15px;
    transition: color 600ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: #ed563b;
    }
  
`;

export default Socials;
