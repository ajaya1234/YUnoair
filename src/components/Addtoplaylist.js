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
import { SiAddthis } from 'react-icons/si'



const Addtoplaylist = () => {
  
  
  
  const [channelname, setChannelname] = useState("");
  const [ getplaylist , setGetplaylist] = useState([])
  const [lists, setLists] = useState([]);
  const [output, setOutput] = useState("");
  const useridd = localStorage.getItem("_id");
  


  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  



  const removeCartitem = (item ,name) => {
    //console.log("Item ID:", item);
  
    const idddd = localStorage.getItem("_id");
    const audioidddd = localStorage.getItem("getsingleaudio");
    //console.log("audio iddddd",audioidddd)
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      
      playlist_id: item,
      user_id:idddd,
      audio_id: audioidddd,
      playlist_name:name,
    });

    axios
      .post("http://16.16.91.234:3003/api/upload_my_playlist_audio", data, options)
      .then((res) => {
        
        
      })
      .catch((err) => {
        console.error(err);
      });
  };









  const handleSubmit = async (evt) => {
    evt.preventDefault();
    
    if (!channelname) {
      
      setErrorMessage("Please enter a name.");
      return;
      
    }
    
    let userDetails = {
      user_id: useridd,
      name: channelname,
    };
  
    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/create_music_playlist",
        userDetails,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "your-api-key", // Replace with your actual API key
          },
        }

      );
      get_my_playlist();
      setSuccessMessage("Music playlist created successfully.");
      
    } catch (error) {
      console.log(error);
    }
  };
  
 

  useEffect(() => {
    get_my_playlist();
  }, []);

  const get_my_playlist = async () => {
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
        "http://16.16.91.234:3003/api/get_my_music_playlist",
        data,
        options
        
      );

      if (response.data.data && response.data.data.length > 0) {
        setGetplaylist(response.data.data);
        
      }
      
      
    } catch (err) {
      console.error(err);
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
     
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
               
                <div className="col-xl-3 col-sm-3 mb-3">
                  <div
                    className="category-item mt-0 mb-0"
                    style={{ background: "#fafafa" }}
                  >
                    <a data-toggle="modal" data-target="#myModal" href>
                      <img className="img-fluid" src="img/profile.png" alt="" />
                      <h5 data-toggle="modal" data-target="#myModal">
                        Add to Playlist{" "}
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
             
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Create New Playlist</h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>

        <div className="card-footer">
        {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
          <form onSubmit={handleSubmit}>
            <div>
              <br />
              <br />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="channelname">Channel Name:</label>
              <input
                type="text"
                value={channelname}
                onChange={(e) => setChannelname(e.target.value)}
                className="form-control profile1"
                id="channelname"
              />
            </div>
            
          

            <br />
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </form>
          <br/>
          <br/>
 {getplaylist.map((list) => {
                          return (
<p onClick={() => removeCartitem(list._id  ,list.name && list.name)}>   <span className="btn btn-info" style={{ color:'white'}}><SiAddthis/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{list.name && list.name}</p>
                            );
                          })}


          <div></div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Addtoplaylist;
