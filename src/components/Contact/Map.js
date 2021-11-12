/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1548.671255855449!2d72.81945441312867!3d22.602215291161638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c6e18ec1df%3A0x9c08176dd10e182a!2sCHARUSAT%20University%20Fitness%20Center!5e0!3m2!1sen!2sin!4v1634361699019!5m2!1sen!2sin"
    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 100%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;