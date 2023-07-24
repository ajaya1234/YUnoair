import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [output, setOutput] = useState("");
  const storedPassword = localStorage.getItem("password");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const _id = localStorage.getItem("_id");

    if (password !== storedPassword) {
      setOutput("Invalid password. Please enter your current password correctly.");
      return;
    }

    axios
      .patch("http://16.16.91.234:3003/api/change_password", {
        _id: _id,
        password: password,
        new_password: newPassword,
      })
      .then((response) => {
        if (response.data.result === "true") {
          setOutput("Password changed successfully.");
        } else {
          setOutput(response.data.message);
        }

        setPassword("");
        setNewPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div className="">
                  <div className="main-title"></div>
                  <div
                    className="row justify-content-center"
                    // style={{ marginLeft: "170px", marginRight: "170px" }}
                  >
                    <div className="col-sm-8 col-lg-6 bg-light shadow p-4">
                      <div>
                        <img
                          width={"100%"}
                          src="https://i.pinimg.com/736x/76/38/69/763869a33c8ac9e99a59500992c11127.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <h6
                          className="p-3 shadow"
                          style={{ borderRadius: "10px" }}
                        >
                          Change password
                        </h6>
                      </div>
                      <font style={{"color":"blue"}}>{output && <div>{output}</div>}</font>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your old password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                      {/* {output && <div>{output}</div>}  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
