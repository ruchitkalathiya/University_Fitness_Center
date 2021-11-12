/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import  { useState,useEffect } from "react";
import axios from 'axios'

const Table1 = ({ day }) => {

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
            <h2>Physiotherapy Gym</h2>
            <table css={styles}>
                <tbody>
                    <tr>
                        <td>Boys Time</td>
                        <td>
                            <span className={day === "Monday" ? "" : "hidden"}>
                                {user.b1monbs} - {user.b1monbe} 
                            </span>
                        </td>
                        <td>
                            <span className={day === "Tuesday" ? "" : "hidden"}>
                                {user.b1tuebs} - {user.b1tuebe}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Wednesday" ? "" : "hidden"}>
                                 {user.b1wedbs} - {user.b1wedbe}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Thursday" ? "" : "hidden"}>
                                  {user.b1thurbs} - {user.b1thurbe}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Friday" ? "" : "hidden"}>
                                  {user.b1fribs} - {user. b1fribe}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Girls Time </td>
                        <td>
                            <span className={day === "Monday" ? "" : "hidden"}>
                                {user.b1mongs} - {user.b1monge}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Tuesday" ? "" : "hidden"}>
                                 {user.b1tuegs} - {user.b1tuege}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Wednesday" ? "" : "hidden"}>
                                 {user.b1wedgs} - {user.b1wedge}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Thursday" ? "" : "hidden"}>
                                 {user.b1thurgs} - {user.b1thurge}
                            </span>
                        </td>
                        <td>
                            <span className={day === "Friday" ? "" : "hidden"}>
                                 {user.b1frigs} - {user. b1frige}
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
    width:300px;
    margin: 0px;
    text-align: center;
    letter-spacing: 1.3px;
    line-height: 1;
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

export default Table1;
