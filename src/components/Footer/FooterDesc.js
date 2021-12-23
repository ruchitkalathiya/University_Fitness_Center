/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

const FooterDesc = () => (
    <section css={styles} className="footerDesc" id="footerDesc">
        <div class="site-footer">
            <div class="first-col">
                <h6>About</h6>
                <p class="text-justify">Gymnasium with Multi Gym facilities is available at campus for utilization by students and staff from 7:00 am to 7:00 pm. It has an area of about 275 sq. m. Another Fitness Centre is also in the physiotherapy institute building in the healthcare zone of the campus. </p>
            </div>

            <div class="second-col">
                <h6>Developers</h6>
                <ul class="footer-links">
                    <li>Brijesh Ladaviya - 19CE064</li>
                    <li>Deep Rana - 19CE117</li>
                    <li>Kishan Sadhariya - 19CE123</li>
                    <li>Krenil Sapariya - 19CE125</li>
                    <li>Darshit Shah - 19CE130</li>
                </ul>
            </div>

            <div class="third-col">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">CLASSES</a></li>
                    <li><a href="/">SCHEDULES</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </section>
);

const styles = css`
.first-col{
    width: 30%;
}
p{
    color: #cfc5c5;
}
ul{
    margin: 0;
    padding:0;
}
h6{
    color: #fff;
    font-size: 1.5rem;
}
.second-col{
    width: 30%;
}
.third-col{
    width: 30%;
}

.site-footer
{
  display: flex;
  background-color:#181818;
  padding:45px;
  font-size: 20px;
  justify-content: space-between;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block;
  color: #cfc5c5;
}
.footer-links li a
{
  display:block;
  color: #cfc5c5;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
`;

export default FooterDesc;