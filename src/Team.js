import React from "react";

const Team = () => {
  return (
    <div className="team">
      <div className="team-heading">
        <p className="team-color">
          <u>MOUNTAINS 1</u>
        </p>
        <p>MOUNTAINS 2</p>
      </div>
      <div className="team-main">
        <p>SCHEDULE</p>
        <table>
          <tr>
            <td>25 Nov 2016</td>
            <td>Vestibullum viverra</td>
          </tr>
          <tr>
            <td>28 Nov 2016</td>
            <td>Vestibullum viverra</td>
          </tr>
          <tr>
            <td>18 Dec 2016</td>
            <td>Vestibullum viverra</td>
          </tr>
          <tr>
            <td>07 Jan 2017</td>
            <td>Vestibullum viverra</td>
          </tr>
        </table>
      </div>
      <div className="footer">
        <p className="footer-tag">
          LOSANGELES
          <br />
          MOUNTAINS
        </p>
        <p className="copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Team;
