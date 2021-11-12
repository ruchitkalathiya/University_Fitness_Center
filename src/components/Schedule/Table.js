/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState,useEffect } from "react";
import axios from 'axios'

const Table = ({ day }) => {

  const [user,setUser] = useState('')

    useEffect(() => {
        axios.get('/users/gettimetable',{
        }).then((res)=>{        
            console.log(res.data[0])
            setUser(res.data[0])
        }).catch((err)=>{
            console.log('error' + err)
        })
    }, [])
  return (
    <div className="container" css={styles}>
    <h2>Canteen Gym</h2>
    <table css={styles}> 
      <tbody>
        <tr>
          <td>Boys Time</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
               {user.b2monbs} - {user.b2monbe}
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
                {user.b2tuebs} - {user.b2tuebe}
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
                 {user.b2wedbs} - {user.b2wedbe}
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
                 {user.b2thurbs} - {user.b2thurbe}
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
                 {user.b2fribs} - {user. b2fribe}
            </span>
          </td>
        </tr>
        <tr>
          <td>Girls Time </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
                  {user.b2mongs} - {user.b2monge}
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
                  {user.b2tuegs} - {user.b2tuege}
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
                  {user.b2wedgs} - {user.b2wedge}
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
                  {user.b2thurgs} - {user.b2thurge}
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
                  {user.b2frigs} - {user. b2frige}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

const styles = css`
  border-collapse: collapse;
  color: #fff;
  margin: 50px 0 0 0;
  h2 {
    color: #fff;
    font-weight: 800;
    font-size: 30px;
    width:500px;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  td,
  th {
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  tr {
    td {
      padding: 40px 0;
      width: 200px;
      span {
        opacity: 1;
        transition: opacity 900ms ease-in-out;
      }
    }
  }
  .hidden {
    opacity: 0;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    tr {
      td {
        padding: 40px 0;
        width: 200px;
        span {
          font-size: 11px;
        }
      }
    }
  }
`;

export default Table;
