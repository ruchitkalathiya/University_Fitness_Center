/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #98a0a7;
  z-index : -1;
`;

export default Overlay;