/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import DumbbellBg from "../Image/dumbbellOrange.png";
import Button from "../GlobalComponents/Button";
import { FaHome } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { FaWalking } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';
import { AiTwotoneFire } from 'react-icons/ai';



const LinksContainer = ({ setTraining, training }) => (
  <div css={styles} className="linksContainer">
    <button
      className={training === "FirstClass" ? "active" : ""}
      onClick={() => setTraining("FirstClass")}
    >
      <FaHome color= "black" size="1.5em" /><p>At-Home Workout</p>  
    </button>
    <button
      className={training === "SecondClass" ? "active" : ""}
      onClick={() => setTraining("SecondClass")}
    >
      <FaHeartbeat color= "black" size="1.5em" /><p>Resistance Band</p>  
    </button>
    <button
      className={training === "ThirdClass" ? "active" : ""}
      onClick={() => setTraining("ThirdClass")}
    >
      <FaWalking color= "black" size="1.5em" /><p>Pilates Workout</p>  
    </button>
    <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
      <AiTwotoneFire color= "black" size="1.5em" /> <p>Squad Training</p>
    </button>
    <Button text="View All Schedules" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    padding: 28px 36px;
    color: rgb(177, 59, 59);
    font-weight: 500;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    border: none;
    outline: none;
    font-size: 24px;
    p:active {
      color: black;
    }
    img {
      margin-right: 20px;
      
    }
    p{
      margin-left: 30px;
      font-family: sans-serif;
      font-size: 24px;
      color:rgb(19, 16, 13);
      font-weight: 600;
      transition: 0.3s;
    }
  }
 p:hover {
  color:rgb(240, 20, 20);
  transform: scale(1.1);
 }
 
  .btn {
    padding: 24px 0;
    border-radius: 4px;
    
  }
  @media (max-width: 900px) {
    max-width: 590px;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 280px;
  }
`;

export default LinksContainer;
