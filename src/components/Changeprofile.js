import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { MdOutlineRotate90DegreesCw } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import "../setting.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Changeprofile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lists, setLists] = useState([]);

  const usered = localStorage.getItem("_id");

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile_image", selectedImage);
    formData.append("_id", usered);

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/upload_user_image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error updating profile picture:", error.response.data);
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
      _id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/view_profile",
        data,
        options
      );
      setLists([response.data.data]);
      getHomeData2()
    } catch (err) {
      console.error(err);
    }
  };


  const label = { inputProps: { "aria-label": "Switch demo" } };
  const imageurl = localStorage.getItem("imageurl")
  
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
                {lists && lists.length > 0 ? (
                  <>
                    {lists.map((list) => (
                      <React.Fragment key={list?._id}>
                        {list.profile_image && list.profile_image.filename ? (
                          <img
                            className="img-fluid"
                            alt="Avatar"
                            src={"http://16.16.91.234:3003/uploads/" + list.profile_image.filename}
                          />
                        ) : (
                          <img className="img-fluid" alt="Avatar" src="img/logo.png" />
                        )}
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <img
                          alt="Avatar"
                          src={imageurl} 
                        />

                )}
               
              </a>
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
            <h4 className="modal-title">Your Profile</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>


         




          {lists.map((list) => {
                        return (
          <div className="modal-body">
            <div className="single-channel-image">
            

{list.profile_image && list.profile_image.filename ? (
        <img style={{height:'100px'}}
        className="img-fluid"
          alt="Avatar"
          src={"http://16.16.91.234:3003/uploads/" + list.profile_image.filename}
        />
      ) : (
        <img style={{height:'100px'}}
        className="img-fluid"
          alt="Avatar"
          src="img/logo.png" // Replace with your default image URL
        />
      )}



              <div className="channel-profile">
              
              
              
              
               


{lists.map((list) => {
  return (
    <>
      {list.profile_image && list.profile_image.filename ? (
        <img className="channel-profile-img" 
          alt="Avatar"
          src={"http://16.16.91.234:3003/uploads/" + list.profile_image.filename}
        />
      ) : (
        <img className="channel-profile-img"
          alt="Avatar"
          src="img/logo.png" 
        />
      )}
    </>
  );
})}



                <div className="social hidden-xs">
                  <a href="settings.html">
                    <i
                      style={{ fontSize: 35, color: "white" }}
                      className="fa fa-gear"
                    />
                  </a>
                  <a href>
                    <i
                      style={{ fontSize: 35, color: "white" }}
                      className="fa fa-edit"
                    />
                  </a>
                </div>
              </div>
            </div>
           
          </div>
           );
          })}
          <div>             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label  htmlFor="profile-picture-input">
              <span className="btn btn-info">
              Profile picture</span>
              <input
                id="profile-picture-input"
                type="file"
                onChange={handleImageSelect}
                style={{ display: "none" }}
              />
            </label>
            <br/>
              <br/>
            <form onSubmit={handleFormSubmit}>
            &nbsp;&nbsp;&nbsp;&nbsp; <button
                onClick={getHomeData2}
                className="btn btn-info"
                type="submit"
              >
                Updated
              </button>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
            </form>
          
          </div>
          
          
        </div>
      </div>
    </div>
  </>
  )
}

export default Changeprofile
