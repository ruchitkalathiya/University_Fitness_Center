/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

const Gallary = () => (
  <div css={styles} className="row">
    <h2>
        GYM <span>GALLARY</span>
      </h2>
    <div id="body">
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <main id="carousel">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </main>
    </div>
  </div>
);

const styles = css`
h2 {
  font-weight: 800;
  font-size: 30px;
  width:500px;
  margin: 0 auto;
  margin-top: 45px;
  text-align: center;
  letter-spacing: 1.3px;
  line-height: 1;
  span {
    color: #ed563b;
  }
}
#body{
  height: 600px;
margin: 0;
display: grid;
grid-template-rows: 500px 100px;
grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
align-items: center;
justify-items: center;
}
main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: none;
}

div.item {
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: coral;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

div.item:nth-of-type(1) {
  --offset: 1;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqhGw9ZZnCvG2eQ2X15gPDiCycZBIxgOvGg&usqp=CAU);
  background-repeat: no-repeat;
  background-size: cover;
}
div.item:nth-of-type(2) {
  --offset: 2;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWrcdBxFUPxyatHy31ry4is4FRt7FdGZDjw&usqp=CAU);
  background-repeat: no-repeat;
  background-size: cover;
}
div.item:nth-of-type(3) {
  --offset: 3;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qZpo_dgHj3uBJ7t4JKGNoT214DHdT1hKzg&usqp=CAU);
  background-repeat: no-repeat;
  background-size: cover;
}
div.item:nth-of-type(4) {
  --offset: 4;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26jaHaMummxh7R2defSWOU9VWw2IcLUiljg&usqp=CAU);
  background-repeat: no-repeat;
  background-size: cover;
}
div.item:nth-of-type(5) {
  --offset: 5;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYslFrkdmDrt8Ro53tj1yn2hUYrF7_wJprQ&usqp=CAU);
  background-repeat: no-repeat;
  background-size: cover;
}

input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#carousel {
  --position: 3;
}

input:nth-of-type(4) {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
input:nth-of-type(4):checked ~ main#carousel {
  --position: 4;
}

input:nth-of-type(5) {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}
input:nth-of-type(5):checked ~ main#carousel {
  --position: 5;
}
`;

export default Gallary;