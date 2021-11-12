/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import FooterDesc from './FooterDesc';

const Footer = () => (
    <section css={styles} className="footer" id="footer">
        <FooterDesc />
        <footer>
            <p>
                <a href="https://templatemo.com/" target="_blank">
                    CSPIT-CE developers
                </a>
            </p>
        </footer>
    </section>
);

const styles = css`
footer {
    text-align: center;
    padding: 5px 0;
    p {
      font-size: 14px;
      color: #fff;
      a {
        text-decoration: none;
        color: #ed563b;
        font-weight: 500;
        &:hover {
          color: #ed563b;
        }
      }
    }
  }
`;

export default Footer;