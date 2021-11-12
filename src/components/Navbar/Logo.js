/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Logo = () => (
  <h2 css={styles}>
    UNIVERSITY <span>FITNESS</span> CENTER
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  margin-top: 10px;
  cursor: pointer;
  span {
    color:rgb(196, 40, 40);
  }
`;

export default Logo;
