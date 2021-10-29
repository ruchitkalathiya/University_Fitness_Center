/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";



import { FaAws } from 'react-icons/fa';




function Info() {
  return (
    <div css={styles} className="info">
      <p>WORK HARDER, GET STRONGER</p>
      <h3>
        FITNESS IS <span>NOT</span> A OPTION
      </h3>
      <Button text="BECOME A MEMBER" />
     
      
     
      

    </div>

  );
}


const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 1.5em;
    
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h3 {
    font-size: 60px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color:rgb(196, 40, 40);
    }
  }
  .btn {
    padding: 14px 16px;
  }
  
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 25px;
    }
  }
  
 
`;

export default Info;
