/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";

const Output = ({ title, info, img, img1, img2 }) => (
  <div css={styles} className="output">
    <img src={img} alt="class" />
    <img src={img1} alt="class" />
    <img src={img2} alt="class" />


    
    <br></br>
    <h2>{title}</h2>
    <p>{info}</p>
    <Button text="VIEW SCHEDULE" />
  </div>
);

const styles = css`
  text-align: left;
  img {
    
    display: block;
    float: left;
    width: 220px;
    height: 210px;
    padding: 6px;
    border-radius: 10px;
    filter: grayscale(100%);
    transition: .2s;
    &:hover {
      filter: grayscale(0);
      transform: scale(0.9);
    }


  }
  h2 {
    margin: 250px 0 0 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 1;
    color: rgb(214, 124, 101);
  }
  p {
    margin: 20px 0;
  }
  .btn {
    padding: 14px 26px;
  }
  @media(max-width: 900px){
    img{
      height: 260px;
    }
  }
`;

export default Output;
