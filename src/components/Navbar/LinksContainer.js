/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "./Link";
import Button from "../GlobalComponents/Button";

const LinksContainer = ({ hidden }) => {
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="HOME" linkTo="#home" />
      <Link name="ABOUT" linkTo="#trainers" />
      <Link name="CLASSES" linkTo="#ourClasses" />
      <Link name="SCHEDULES" linkTo="#schedule" />
      <Link name="CONTACT" linkTo="#contact" />
      <Button text="Payment" />
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      font-size: 30px;
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      font-size: 30px;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;
