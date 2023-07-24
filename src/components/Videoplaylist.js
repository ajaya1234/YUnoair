import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { AiFillSetting } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FcMusic } from "react-icons/fc";
import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";

const Videoplaylist = () => {
    const [getcommt, setgetcomment] = useState([]);

  useEffect(() => {
    sendcomment();
  }, []);

  const sendcomment = async () => {
    const useriddd = localStorage.getItem("_id");
    const palylist = localStorage.getItem("getsinglevideo");
    //console.log("playlist audiodsdsd",palylist)
    //console.log("useriddd audiodsdsd",useriddd)

    

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: useriddd,
      playlist_id:palylist,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_my_playlist_video", data, options)
      .then((res) => {
        setgetcomment(res.data.data);
        //console.log("response of get_my_playlist_video",res.data.comments)
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  return (
    <>
<Header/>
      <Sidebar />
      <div>
        <div className="single-channel-page" id="content-wrapper">
       

          <Tabs className="mt-2">
           


            <TabList className="single-channel-nav p-3 text-center">
              {/* <Tab style={{ marginLeft: "20px" }}>MUSIC</Tab> */}
              {/* <Tab style={{ marginLeft: "20px" }}>PLAYLIST</Tab> */}
              
            </TabList>

          
            <TabPanel>
            <div className="container-fluid">
                 <h4>Video Playlist </h4> 
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                      {getcommt?.length > 0 ? (
  getcommt.map((list) => {
    return (
      <div
        className="col-sm-4 mb-4"
        style={{
          borderRadius: "10px",
          width: "100%",
          marginLeft: "",
        }}
        key={list.video_id} 
      >
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >
 

                                {list.channel_data[0].channel_name ? (
            <p>{list.channel_data[0].channel_name}</p>
          ) : (
            <p>No songs</p>
          )}



                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link
                                    onClick={() => {
                                      localStorage.setItem(
                                        "getsingleaudio",
                                        list.video_id
                                      );
                                      
                                    }}
                                    className="play-icon"
                                    to="/video_page"
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link
                                    onClick={() => {
                                      localStorage.setItem(
                                        "getsingleaudio",
                                        list.video_id
                                      );
                                      
                                    }}
                                    to="/video_page"
                                  >
                                    <img
                                      style={{ height: "100%" }}
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.channel_data[0].image[0].filename
                                      }
                                      alt=""
                                    />
                                    <FcMusic />
                                  </Link>
                                </div>
                              </div>
                            
                         
                     
                              </div>
    );
  })
) : (

  
  <p>No songs</p>
)}
                     
                      </div>

                      
                    </div>

                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-3"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-3"
                    >
                      <div
                        className="col-xl-3 col-sm-6 mb-3"
                        style={{ paddingLeft: 10, paddingRight: 0 }}
                      >
                        <div className="video-card">
                          <div
                            className="video-card-image"
                            style={{ borderRadius: 15 }}
                          >
                            <a className="play-icon" href="video-page.html">
                              <i className="fas fa-play-circle" />
                            </a>
                            <a href="video-page.html">
                              <img className="img-fluid" src="img/v1.png" alt />
                            </a>
                            <a href="video-page.html">
                              <div
                                className="time"
                                style={{ bottom: 0, right: 0 }}
                              >
                                <h3
                                  style={{
                                    position: "relative",
                                    top: 35,
                                    left: 25,
                                  }}
                                >
                                  10
                                </h3>
                                <svg
                                  viewBox="0 0 24 24"
                                  preserveAspectRatio="xMidYMid meet"
                                  focusable="false"
                                  className="style-scope yt-icon"
                                  style={{
                                    pointerEvents: "none",
                                    display: "block",
                                    width: 100,
                                    height: 120,
                                  }}
                                >
                                  <g className="style-scope yt-icon">
                                    sddfdf
                                    <path
                                      d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"
                                      className="style-scope yt-icon"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <a href="video-page.html">
                                There are many variations of passages of Lorem
                              </a>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: 0, paddingRight: 0 }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <a href="viewprofile.html">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt
                                />
                              </a>
                              <p>
                                <a href="viewprofile.html">
                                  <strong>History</strong>
                                </a>{" "}
                                <span
                                  title
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i className="fas fa-check-circle text-success" />
                                </span>
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Videoplaylist;
