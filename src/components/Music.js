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
import { FcMusic } from 'react-icons/fc'
import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";

const Music = () => {
  const [lists, setLists] = useState([]);
  const [ getplaylist , setGetplaylist] = useState([])
  const [listss, setListss] = useState([]);
  const [getmusicc, setGetmusicc] = useState([]);
  const [getcommt, setgetcomment] = useState([]);

  const[successMessage , setSuccessMessage] = useState('');

  //   const removeCartitem = (item) => {
  //     const idddd = localStorage.getItem("_id");
  //     const options = {
  //       headers: {
  //         "content-type": "application/json; charset=utf-8",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     };

  //     const data = JSON.stringify({
  //       user_id: idddd,
  //       video_id: item,
  //     });

  //     axios
  //       .post("http://16.16.91.234:3003/api/delete_download_video", data, options)
  //       .then((res) => {
  //         getdownload();
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };

  //   useEffect(() => {
  //     gethistory();
  //   }, []);

  //   const gethistory = async () => {
  //     const idddd = localStorage.getItem("_id");

  //     const options = {
  //       headers: {
  //         "content-type": "application/json; charset=utf-8",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     };

  //     const data = JSON.stringify({
  //       user_id: idddd,
  //     });

  //     await axios
  //       .post("http://16.16.91.234:3003/api/get_history", data, options)
  //       .then((res) => {
  //         setgetcomment(res.data.data);

  //       })
  //       .catch((err) => {
  //         console.error("API Error:", err);
  //       });
  //   };

  const removeCartitem = (item) => {
    //console.log("Item ID:", item);
  
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      
      _id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_my_playlist_audio", data, options)
      .then((res) => {
        setSuccessMessage('Delete successfully!');
        get_my_playlist();

        
      })

      .catch((err) => {
        console.error(err);
      });
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
      //console.log("response of get my playlist",response.data.data )
    } catch (err) {
      console.error(err);
    }
  };








  useEffect(() => {
    getmusic();
  }, []);

  const getmusic = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await axios.get(
        "http://16.16.91.234:3003/api/get_music",

        options
      );
      setGetmusicc(response.data.data);
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

  useEffect(() => {
    get_subscribe();
  }, []);

  const get_subscribe = async () => {
    const userid = localStorage.getItem("_id");
    //console.log("usertdddd", userid);

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
        "http://16.16.91.234:3003/api/get_subscribe_channel",
        data,
        options
      );

      if (response.data.data && response.data.data.length > 0) {
        setListss(response.data.data);
        //console.log("response checkinggg", response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
<Header/>
      <Sidebar />
      <div>
        <div className="single-channel-page" id="content-wrapper">
       
          <Tabs className="mt-2">
           
            {/* <hr /> */}

            <TabList className="single-channel-nav p-3 text-center">
              <Tab style={{ marginLeft: "20px" }}>MUSIC</Tab>
              <Tab style={{ marginLeft: "20px" }}>PLAYLIST</Tab>
              
            </TabList>

            <TabPanel>
              <div className="container-fluid">
                {/* <h4>Music </h4> */}
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                        {getmusicc.map((list) => {
                          return (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "",
                              }}
                            >
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >
                                {/* <button style={{borderRadius:'15px' }}
                                    className="fas fa-times-circle btn "
                                    onClick={() => removeCartitem(list.video_data._id)}
                                  ></button> */}


<p>  {list.music && list.music.originalname}</p>

                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "87px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }}
                                    className="play-icon"
                                    to="/audio"
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/audio">
                                  <img style={{height:'100%'}} className="img-fluid" src='img/logo.png' alt="" />
                                   <FcMusic/> 
                                  </Link>
                                  
                                </div>
                               
                              </div>
                            </div>
                          );
                        })}
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
            <div className="container-fluid">
                {/* <h4>Music </h4> */}
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    ><font style={{color:'blue'}}>{successMessage && <p>{successMessage}</p>}</font>

                      <div className="row">
                        
                        {getplaylist.map((list) => {
                          return (
                            <div
                              className="col-sm-2 mb-2  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "",
                              }}
                            >
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >
                                {/* <button style={{borderRadius:'15px' }}
                                    className="fas fa-times-circle btn "
                                    onClick={() => removeCartitem(list.video_data._id)}
                                  ></button> */}


<p>  {list.name && list.name}</p>
{/* <p>  {list._id && list._id}</p> */}

<button style={{borderRadius:'15px' }}
                                    className="fas fa-times-circle btn "
                                    onClick={() => removeCartitem(list._id)}
                                  ></button>
                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }}
                                    className="play-icon"
                                    to="/musiclist"
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/musiclist">
                                  <img style={{height:'100%'}} className="img-fluid" src='img/music.png' alt="" />
                                   <FcMusic/> 
                                  </Link>
                                  
                                </div>
                               
                              </div>
                            </div>
                          );
                        })}
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

export default Music;
