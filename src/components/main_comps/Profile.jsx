import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const userdetails = [
  {
    name: "Bret",
    title: "Username",
  },
  {
    name: "sinsere@april.biz",
    title: "email",
  },
  {
    name: "999-999-999",
    title: "phone",
  },
  {
    name: "leanengraham",
    title: "website",
  },
];
const company_details = [
  {
    title: "Company",
  },
  {
    title: "Name",
    name: "Romaguera-Crona",
  },
  {
    title: "catchPhrase",
    name: "Multi-layered ",
  },
  { title: "bs", name: "harness e-market" },
];
function Profile() {
  const single_user = useSelector((state) => state);

  console.log("single", single_user);
  return (
    <>
      <div>
        <div className="profile_container">
          <div className="profile_header">
            <h4 style={{ marginLeft: "30px" }}>profile</h4>

            <div
              className="profile_img"
              onClick={() =>
                alert(
                  `loged in as ${single_user.users.map((data) => data.name)}`
                )
              }
            >
              <img
                src={single_user.users.map((data) => data.profilepicture)}
                alt="loading"
                width="40px"
                height="40px"
                style={{ borderRadius: "100%" }}
              />

              <div className="profile_name">
                <h6>{single_user.users.map((data) => data.name)} </h6>
              </div>
            </div>
          </div>

          <div className="profile_body_1">
            <img
              src={single_user.users.map((data) => data.profilepicture)}
              alt="loading"
              width="200px"
              height="200px"
              style={{ borderRadius: "100%" }}
            />

            <h3 style={{ color: "#424141" }} className="username">
              {single_user.users.map((data) => data.name)}{" "}
            </h3>

            <div className="user_details">
              <table>
                {single_user.users.map((data) => (
                  <>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "0px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          username :
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.username}{" "}
                        </span>
                      </th>
                    </tr>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "0px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          email:
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.email}{" "}
                        </span>
                      </th>
                    </tr>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "0px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          phone:
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.phone}{" "}
                        </span>
                      </th>
                    </tr>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "0px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          website:
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.website}{" "}
                        </span>
                      </th>
                    </tr>
                  </>
                ))}
              </table>
            </div>
            <div className="company_details">
              <table>
                <tr>
                  <td style={{ marginRight: "10px" }}>
                    <span style={{ color: "grey", fontSize: "25px" }}>
                      company
                    </span>
                  </td>
                </tr>
                {single_user.users.map((data) => (
                  <>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "10px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          Name:
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.company.name}
                        </span>
                      </th>
                    </tr>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "10px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          catchPhrase:
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.company.catchPhrase}
                        </span>
                      </th>
                    </tr>
                    <tr style={{ marginBottom: "10px" }}>
                      <td style={{ marginRight: "10px" }}>
                        <span style={{ color: "grey", fontSize: "25px" }}>
                          bs:
                        </span>
                      </td>
                      <th>
                        <span style={{ color: "#474747", fontSize: "25px" }}>
                          {data.company.bs}
                        </span>
                      </th>
                    </tr>
                  </>
                ))}
              </table>
            </div>
          </div>

          <div className="profile_body_2"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
