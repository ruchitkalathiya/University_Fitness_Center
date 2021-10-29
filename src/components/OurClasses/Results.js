/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.gif";
import ClassOneBg1 from "../Image/classOne1.gif";
import ClassOneBg2 from "../Image/classOne2.gif";
import ClassTwoBg from "../Image/classTwo.gif";
import ClassTwoBg1 from "../Image/classTwo1.gif";
import ClassTwoBg2 from "../Image/classTwo2.gif";
import ClassThreeBg from "../Image/classThree.gif";
import ClassThreeBg1 from "../Image/classThree1.gif";
import ClassThreeBg2 from "../Image/classThree2.gif";
import ClassFourBg from "../Image/classFour.gif";
import ClassFourBg1 from "../Image/classFour1.gif";
import ClassFourBg2 from "../Image/classFour2.gif";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="At-Home Workout"
        info="If the idea of a home workout makes you yawn, think again!
        When executed correctly, using just your body weight can give you a run for your money.
        So, whether the gym isn’t your thing or you’re short on time, clear out a space in the living room and prepare to sweat."
        img={ClassOneBg}
        img1={ClassOneBg1}
        img2={ClassOneBg2}
       
        
        
      />
    )}

    {training === "SecondClass" && (
      <Output
        title=" Resistance band Abs Workout"
        info="Pressing into the band helps to activate the hip abductors, which are important stabilizers of the hip joint and lower back."
        img={ClassTwoBg}
        img1={ClassTwoBg1}
        img2={ClassTwoBg2}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Pilates Workout"
        info="'Pilates emphasises correct postural alignment, core strength and muscle balance. It is great for ironing out muscular imbalances, injury rehabilitation and injury prevention.'"
        img={ClassThreeBg}
        img1={ClassThreeBg1}
        img2={ClassThreeBg2}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="Regularly performing quad-strengthening exercises may help make it easier to extend your knee and flex your hip. Building strength in your quads may also improve the stability of your kneecap"
        img={ClassFourBg}
        img1={ClassFourBg1}
        img2={ClassFourBg2}

      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
