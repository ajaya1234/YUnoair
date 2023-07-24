import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { MdDescription, MdOutlineRotate90DegreesCw } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import "../setting.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Setting = () => {
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [channelname, setChannelname] = useState("");
  const [lists, setLists] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const usered = localStorage.getItem("_id");

  const handleProfileImageSelect = (event) => {
    setSelectedProfileImage(event.target.files[0]);
  };

  const handleCoverImageSelect = (event) => {
    setSelectedCoverImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    if (!selectedProfileImage || !selectedCoverImage) {
      setError('Please select both profile and cover images.');
      return;
    }
    if (!channelname.trim()) {
      setError('Please enter a channel name.');
      return;
    }
    if (!description.trim()) {
      setError('Please enter a description.');
      return;
    }


   
    const formData = new FormData();
    formData.append("profile_image", selectedProfileImage);
    formData.append("cover_image", selectedCoverImage);
    formData.append("user_id", usered);
    formData.append("channel_name", channelname);
    formData.append("handle", description);

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/create_channel",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Api-Key": "your-api-key", // Replace with your actual API key
          },
        }
      );
      
      
      setSelectedProfileImage(null);
      setSelectedCoverImage(null);
      setChannelname('');
      setDescription('');
      setError('');
      setSuccessMessage('Channel create successfully!');
    } catch (error) {
      console.error("Error creating channel:", error.response.data);
    }
  };
  


  useEffect(() => {
    getHomeData2();
  }, []);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_my_channel",
        data,
        options
      );
      if (response.data.data && response.data.data.length > 0) {
        setLists(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h6>Setting</h6>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <a data-toggle="modal" data-target="#myModal" href>
                      <img className="img-fluid" src="img/profile.png" alt="" />
                      <h5 data-toggle="modal" data-target="#myModal">
                        Create Channel{" "}
                        <span
                          data-toggle="modal"
                          data-target="#myModal"
                          title
                          data-placement="top"
                          data-original-title="Verified"
                        />
                      </h5>
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to='/updatechannel' data-toggle="modal" data-target="#myModalupdate" href>
                      <img className="img-fluid" src="img/update.png" alt="" />
                      <h5 data-toggle="modal" data-target="#myModalupdate">
                        Update Channel{" "}
                        <span
                          data-toggle="modal"
                          data-target="#myModal"
                          title
                          data-placement="top"
                          data-original-title="Verified"
                        />
                      </h5>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to='/watchlater'>
                      <img className="img-fluid" src="img/data.png" alt="" />
                      <h5>
                        Watchlater
                        <span
                          title
                          data-placement="top"
                          data-toggle="tooltip"
                          data-original-title="Verified"
                        />
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to="/myvideo">
                      <img
                        className="img-fluid"
                        src="img/download.png"
                        alt=""
                      />
                      <h5>Download</h5>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to='/blockuser'>
                      <img className="img-fluid" src="img/chat.png" alt="" />
                      <h5>Blocked Users</h5>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to="/notification">
                      <img
                        className="img-fluid"
                        src="img/notification.jpg"
                        alt=""
                      />
                      <h5>Notification</h5>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to="/refer">
                      <MdOutlineRotate90DegreesCw
                        style={{ color: "black", fontSize: "45px" }}
                      />
                      <h5>Refer And Earn</h5>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to="/about">
                      <img className="img-fluid" src="img/see.png" alt="" />
                      <h5>About</h5>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to="/changepassword">
                      <img style={{height:'59px', width:'50px'}} className="img-fluid" src="img/changep.png" alt="" />
                      <h5>Change Password</h5>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <Link to="/changeprofile">
                      <img style={{height:'59px', width:'50px'}} className="img-fluid" src="img/changepro.jpeg" alt="" />
                      <h5> Profile Picture</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Create Your Channel</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>

          <div className="card-footer">
          <font style={{color:'blue'}}><p >{successMessage}</p></font>
          <font style={{color:'blue'}}>{error && <p >{error}</p>}</font>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="profile-picture-input">
                  <span className="btn btn-info">Profile picture</span>
                  <input
                    id="profile-picture-input"
                    type="file"
                    onChange={handleProfileImageSelect}
                    style={{ display: "none" }}
                  />
                </label>
                <br />
                <br />
                <label htmlFor="cover-image-input">
                  <span className="btn btn-info">Cover Photo</span>
                  <input
                    id="cover-image-input"
                    type="file"
                    onChange={handleCoverImageSelect}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="channelname">Channel Name:</label>
                <input
                  type="text" placeholder={localStorage.getItem("channel_name")}
                  value={channelname}
                  onChange={(e) => setChannelname(e.target.value)}
                  className="form-control profile1"
                  id="channelname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control profile2"
                  id="description"
                />
              </div>
              <br />
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>

            <div></div>
          </div>
        </div>
      </div>
    </div>

























    </>
  );
};

export default Setting;
