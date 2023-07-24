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

import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";

const Myprofile = () => {
  const [lists, setLists] = useState([]);
  const [listss, setListss] = useState([]);

  const [liked, setLiked] = useState([]);

  const [getdownloadd, setGetdownloadd] = useState([]);
  const [getcommt, setgetcomment] = useState([]);

  const [getvideoplaylist, setgetvideoplaylist] = useState([]);
  const [getmyvideo, setgetmyvideo] = useState([]);

const  [ getmyupload  , setGetmyupload ] = useState([]);
const  [ getmyuploadmusic  , setGetmyuploadmusic ] = useState([]);


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  
  const timeDiff = Math.abs(now - date);
  
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
  
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  }
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  }
  
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }
  
  const minutes = Math.floor(timeDiff / (1000 * 60));
  if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  }
  
  return 'Just now';
};



  useEffect(() => {
    getlikevideo();
  }, []);

  const getlikevideo = async () => {
    const idddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_like_video_list", data, options)
      .then((res) => {
        setLiked(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };





  const removeuploadmusic = (item) => {
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      _id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_music", data, options)
      .then((res) => {
        getmyuploadmusics();
      })
      .catch((err) => {
        console.error(err);
      });
  };






  const removeCartitem = (item) => {
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      video_id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_download_video", data, options)
      .then((res) => {
        getdownload();
      })
      .catch((err) => {
        console.error(err);
      });
  };


  const removelikevideo = (item) => {
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      video_id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_like_video", data, options)
      .then((res) => {
        getlikevideo();
      })
      .catch((err) => {
        console.error(err);
      });
  };



  const myplaylistvideo = (item) => {

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
      .post("http://16.16.91.234:3003/api/delete_my_playlist_video", data, options)
      .then((res) => {
        getmyplaylist();
      })
      .catch((err) => {
        console.error(err);
      });
  };










  const removeuploadvideo = (item) => {
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      video_id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_my_video", data, options)
      .then((res) => {
        getmyvideos();
      })
      .catch((err) => {
        console.error(err);
      });
  };


  useEffect(() => {
    gethistory();
    
  }, []);

  const gethistory = async () => {
    const idddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_history", data, options)
      .then((res) => {
        setgetcomment(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };


  useEffect(() => {
    getmyplaylist();
  }, []);

  const getmyplaylist = async () => {
    const idddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_my_playlist", data, options)
      .then((res) => {
        setgetvideoplaylist(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };






  useEffect(() => {
    getdownload();
  }, []);

  const getdownload = async () => {
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
        "http://16.16.91.234:3003/api/get_download_video",
        data,
        options
      );
      setGetdownloadd(response.data.data);
      //console.log("response of download",response.data.data)
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
        const channelName = response.data.data[0].channel_name;
        const channelid = response.data.data[0]._id;
        //const profileimage = response.data.data[0].image[0].filename
        //const coverimage = response.data.data[0].image[1].filename
        //const handdle = response.data.data[0].image[1].filename
        localStorage.setItem("channel_name", channelName);
        localStorage.setItem("channel_id", channelid);
        //localStorage.setItem("channel_image", profileimage);
        //localStorage.setItem("channel_cover", coverimage);

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
        
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getmyvideos();
  }, []);

  const getmyvideos = async () => {
    const userid = localStorage.getItem("_id");
    const chanelid = localStorage.getItem("channel_id");

    
    //console.log("usertdddd", userid);

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      "user_id": userid,
      "channel_id":chanelid,

    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_my_channel_video",
        data,
        options
      );

      if (response.data.data && response.data.data.length > 0) {
        setGetmyupload(response.data.data);
        
      }
    } catch (err) {
      console.error(err);
    }
  };




  useEffect(() => {
    getmyuploadmusics();
  }, []);

  const getmyuploadmusics = async () => {
    const userid = localStorage.getItem("_id");
    //const chanelid = localStorage.getItem("channel_id");

    


    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      "user_id": userid,
      //"channel_id":chanelid,

    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_audio",
        data,
        options
      );

      if (response.data.data && response.data.data.length > 0) {
        setGetmyuploadmusic(response.data.data);
        
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
          <div className="single-channel-image">
            {lists.length > 0 &&
            lists[0].image &&
            lists[0].image[0] &&
            lists[0].image[0].filename ? (
              <img
                style={{ height: "250px" }}
                className="img-fluid"
                alt="Channel Image"
                src={
                  "http://16.16.91.234:3003/uploads/" +
                  lists[0].image[0].filename
                }
              />
            ) : (
              <img
                style={{ height: "250px" }}
                className="img-fluid"
                alt="Channel Image"
                src="img/logo.png"
              />
            )}

            <div className="channel-profile">
              {lists.length > 0 &&
              lists[0].image &&
              lists[0].image[1] &&
              lists[0].image[1].filename ? (
                <img
                  className="channel-profile-img"
                  alt="Avatar"
                  src={
                    "http://16.16.91.234:3003/uploads/" +
                    lists[0].image[1].filename
                  }
                />
              ) : (
                <img
                  className="channel-profile-img"
                  alt="Avatar"
                  src="img/logo.png" // Replace with your default image URL
                />
              )}

              {/* <div className="social hidden-xs">
                <Link to="/setting">
                  <AiFillSetting style={{ fontSize: 35, color: "white" }} />
                </Link>
                <a href>
                  <FaRegEdit style={{ fontSize: 35, color: "white" }} />
                </a>
              </div> */}
            </div>
          </div>

          <Tabs className="mt-2">
            {lists.length > 0 && (
              <Link
                style={{ marginLeft: "15px" }}
                className="channel-brand"
                to="#"
              >
                {lists[0].channel_name}{" "}
               
              </Link> 
              
            )}

{lists && lists.length > 0 ? (
  <button
    style={{ float: 'right' }}
    className="btn-danger"
    type="button"
  >
    Subscribe <strong>{lists[0].subscribe_count}</strong>
  </button>
) : null}


              {/* <button
             style={{ float:'right'}}
            className="btn-danger"
            type="button"
          >
            Subscribe <strong>{lists[0].subscribe_count}</strong>
          </button> */}
            <hr />

            <TabList className="single-channel-nav p-3">

            <Tab style={{ marginLeft: "15px" }}>My-Uploads Videos</Tab>              
            <Tab style={{ marginLeft: "15px" }}>My-Uploads Music</Tab>
            <Tab style={{ marginLeft: "15px" }}>Video Playlist</Tab>  
              <Tab style={{ marginLeft: "15px" }}>My-Download</Tab>
              <Tab style={{ marginLeft: "15px" }}>My Liked Video</Tab>
              <Tab style={{ marginLeft: "15px" }}>History</Tab>
              <Tab style={{ marginLeft: "15px" }}>My Subscribe</Tab>
              {/* <Tab style={{ marginLeft: "20px" }}>My Videos</Tab> */}
             
            </TabList>

            <TabPanel>
              <div className="container-fluid">
                <h4>My Upload Video </h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                        {getmyupload && getmyupload.length > 0 ? (
                          getmyupload.map((list) => (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "-6px",
                              }}
                            >
                              <button
                                style={{ borderRadius: "15px" }}
                                className="fas fa-times-circle btn "
                                onClick={() =>
                                  removeuploadvideo(list._id)
                                }
                              ></button>
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >

                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link  onClick={() => {
                                localStorage.setItem("videoiid", list._id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem(
                                  "categorytpee",
                                  list.category_type
                                );
                              }}
                                    className="play-icon"
                                    to="/video_page"
                                  >
                                    
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link to="/video_page"  onClick={() => {
                                localStorage.setItem("videoiid", list._id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                              }}>
                                    <img
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.video[1].filename
                                      }
                                      alt
                                    />
                                  </Link>
                                  
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <Link to="/video_page">
                                      {list.video_name}
                                    </Link>
                                  </div>
                                  <div
                                    className="single-video-author box mb-3"
                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                  >
                                    <div className="float-right">
                                      <p>
                                        <i className="fas fa-eye" /> {list.video_views}
                                      </p>
                                      <p>
                                        <i className="fa fa-thumbs-up" /> {list.video_likes}
                                      </p>
                                    </div>
                                    <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
              }} to="/view_profile">
                                      {" "}
                                      <img
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[1].filename
                                        }
                                        alt
                                      />
                                    </Link>
                                    <p>
                                      <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
              }} to="/view_profile">
                                        <strong>
                                          {list.channel_name}
                                        </strong>
                                      </Link>{" "}
                                      
                                    </p>
                                    <p>{formatDate(list.current_date)}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">No Data found.</div>
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
                <h4>My Upload Music  </h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                        {getmyuploadmusic && getmyuploadmusic.length > 0 ? (
                          getmyuploadmusic.map((list) => (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "-6px",
                              }}
                            >
                              <button
                                style={{ borderRadius: "15px" }}
                                className="fas fa-times-circle btn "
                                onClick={() =>
                                  removeuploadmusic(list._id)
                                }
                              ></button>
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >

                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link
                                    className="play-icon"
                                    onClick={() => {
                                      localStorage.setItem("getsingleaudio", list._id); }} to="/audio">
                                  
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/audio">
                                    <img
                                      className="img-fluid"
                                      src='img/logo.png'
                                      alt
                                    />
                                  </Link>
                                  
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <a href="video-page.html">
                                      {list.music_title}
                                    </a>
                                  </div>
                                 
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">No Data found.</div>
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
              <div className="container-fluid">
                <h4>My Video Playlist</h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                        {getvideoplaylist && getvideoplaylist.length > 0 ? (
                          getvideoplaylist.map((list) => (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "-6px",
                              }}
                            >
                              <button
                                style={{ borderRadius: "15px" }}
                                className="fas fa-times-circle btn "
                                onClick={() =>
                                  myplaylistvideo(list._id)
                                }
                              ></button>
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >

                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link
                                    className="play-icon"
                                    to='/videoplaylist'
                                    
                                    onClick={() => {
                                      localStorage.setItem(
                                        "getsinglevideo",
                                        list._id)}}
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link  to='/videoplaylist'
                                    
                                    onClick={() => {
                                      localStorage.setItem(
                                        "getsinglevideo",
                                        list._id)}}>
                                    <img
                                      className="img-fluid"
                                     

                                      src={list.image && list.image.filename ? "http://16.16.91.234:3003/uploads/" + list.image.filename : ""}
                                      alt
                                    />
                                  </Link>
                                  
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <Link  to='/videoplaylist'
                                    
                                    onClick={() => {
                                      localStorage.setItem(
                                        "getsinglevideo",
                                        list._id)}}>
                                      {list.name}
                                    </Link>
                                  </div>
                                 
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">No Data found.</div>
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
              <div className="container-fluid">
                <h4>My Download </h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                        {getdownloadd && getdownloadd.length > 0 ? (
                          getdownloadd.map((list) => (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "-6px",
                              }}
                            >
                              <button
                                style={{ borderRadius: "15px" }}
                                className="fas fa-times-circle btn "
                                onClick={() =>
                                  removeCartitem(list.video_data._id)
                                }
                              ></button>
                              
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >

                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                 


<Link  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.video_data.category_type);
                              }}
                                    className="play-icon"
                                    to="/video_page"
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link to="/video_page"  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.video_data.category_type);
                              }}>


                                    <img
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.video_data.video[1].filename
                                      }
                                      alt
                                    />
                                  </Link>
                                  
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <Link to="/video_page"  onClick={() => {
                                localStorage.setItem("videoiid", list._id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.video_data.category_type);
                              }}>
                                      {list.video_data.video_name}
                                    </Link>
                                  </div>
                                  <div
                                    className="single-video-author box mb-3"
                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                  >
                                    
                                    <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
                localStorage.setItem("categorytpee", list.video_data.category_type);
              }} to="/view_profile">
                                      {" "}
                                      <img
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video_data.video[1].filename
                                        }
                                        alt
                                      />
                                    </Link>
                                    <p>
                                      <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
                localStorage.setItem("categorytpee", list.video_data.category_type);
              }} to="/view_profile">
                                        <strong>
                                          {list.video_data.channel_name}
                                        </strong>
                                      </Link>{" "}
                                     
                                    </p>
                                    <p>{formatDate(list.current_date)}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">No Data found.</div>
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
              <div id="content-wrapper">
                <div className="container-fluid pb-0">
                  <h4>My Liked Videos</h4>
                  <div className="top-category section-padding mb-4">
                    <div className="row">
                    {liked && liked.length > 0 ? (
                          liked.map((list) => (
                            <div
                              className="col-sm-4 mb-4"
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "",
                              }}
                            >
                              <button
                                style={{ borderRadius: "15px" }}
                                className="fas fa-times-circle btn "
                                onClick={() =>
                                  removelikevideo(list.video_id)
                                }
                              ></button>
                              
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >


                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.video_data[0].category_type);
                              }}
                                    className="play-icon"
                                    to="/video_page"
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link to="/video_page" onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.video_data[0].category_type);
                              }}>
                                     {/* <img
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.channel_data[0].image[1].filename
                                        }
                                      alt
                                    />  */}

                                    {list &&
                      list.channel_data[0].image &&
                      list.channel_data[0].image[1] ? (
                        <img className="img-fluid" 
                          alt="Avatar"
                          src={
                            "http://16.16.91.234:3003/uploads/" +
                            list.channel_data[0].image[1].filename
                          }
                        />
                      ) : (
                        <img alt="Avatar" src='img/logo.png' />
                      )}


                                  </Link>
                                  
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <a href="video-page.html">
                                      {list.channel_data.originalname} 
                                    </a>
                                  </div>
                                  <div
                                    className="single-video-author box mb-3"
                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                  >
                                    
                                    <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
                localStorage.setItem("categorytpee", list.video_data[0].category_type);
              }} to="/view_profile">
                                      {" "}
                                       {/* <img
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.channel_data[0].image[0].filename
                                        }
                                        alt
                                      />  */}


{list &&
                      list.channel_data[0].image &&
                      list.channel_data[0].image[0] ? (
                        <img className="img-fluid" 
                          alt="Avatar"
                          src={
                            "http://16.16.91.234:3003/uploads/" +
                            list.channel_data[0].image[0].filename
                          }
                        />
                      ) : (
                        <img alt="Avatar" src='img/logo.png' />
                      )}


                                    </Link>
                                    <p>
                                      <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
                localStorage.setItem("categorytpee", list.video_data[0].category_type);
              }} to="/view_profile">
                                        <strong>
                                          {list.channel_data[0].channel_name}
                                        </strong>
                                      </Link>{" "}
                                      
                                    </p>
                                    <p>{formatDate(list.current_date)}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">No Data found.</div>
                        )}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </TabPanel> 
            <TabPanel>
              <div className="container-fluid">
                <h4>History</h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                      {getcommt && getcommt.length > 0 ? (
  getcommt.map((list) => (
    <div
      className="col-lg-6 col-sm-6 mb-3"
      style={{ paddingLeft: 10, paddingRight: 0 }}
      key={list._id} 
    >
      <div className="row m-0">
        <div className="col-sm-4 video-card">
          <div
            className="mt-2 video-card-image"
            style={{ height: "100px", borderRadius: 15 }}
          >
            <Link  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                  );
                                localStorage.setItem("categorytpee",list.data && list.data[0]?.category_type
                                );
                              }} className="play-icon" to="/video_page">
              <i className="fas fa-play-circle" />
            </Link>
            <Link to="/video_page">
              {list.data && list.data[0]?.video && list.data[0].video[1]?.filename && (
                <img
                  className="img-fluid"
                  src={`http://16.16.91.234:3003/uploads/${list.data[0].video[1].filename}`}
                  alt=""
                />
              )}
            </Link>
          </div>
        </div>

        <div
          className="col-sm-8 video-card-body"
          style={{ backgroundColor: "white" }}
        >
          <div className="video-title">
            <a href="video-page.html">
              {list.data && list.data[0]?.description}


            </a>
          </div>
          <div
            className="single-video-author mb-3 pr-5 mr-3"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            
            <p>{list.data && list.data[0]?.video_views}  views</p>
          </div>
        </div>
      </div>
    </div>
  ))
) : (
  <div className="col-md-12">No Data found.</div>
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
                              className="single-video-author mb-3"
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
                <h4>My Subscribe Channel </h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="row">
                        {listss.length > 0 ? (
                          listss.map((list, index) => (
                            <div
                              className="col-sm-4 mb-4"
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                marginLeft: "",
                              }}
                              key={index}
                            >
                              <div
                                className="video-card"
                                style={{ width: "100%", borderRadius: "10px" }}
                              >
                                <div
                                  className="video-card-image"
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "160px",
                                  }}
                                >
                                  <Link  onClick={() => {
                                localStorage.setItem("videoiid", list.video_data[1]._id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                              }} 
                                    className="play-icon"
                                    to="/video_page"
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  {list.video_data &&
                                  Array.isArray(list.video_data) &&
                                  list.video_data.length > 1 &&
                                  list.video_data[0].video &&
                                  Array.isArray(list.video_data[0].video) &&
                                  list.video_data[0].video.length > 1 &&
                                  list.video_data[0].video[1].filename ? (
                                    <Link to="/video_page"  onClick={() => {
                                      localStorage.setItem("videoiid", list.video_data[1]._id);
                                      localStorage.setItem("useridd", list.user_id);
                                      localStorage.setItem(
                                        "channelid",
                                        list.channel_id
                                      );
                                    }}>
                                      <img
                                        style={{ height: "300px" }}
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video_data[0].video[1].filename
                                        }
                                        alt
                                      />
                                    </Link>
                                  ) : (
                                    <div>
                                       <img
                                    style={{ height: "300px" }}
                                    className="img-fluid"
                                    src={
                                      "http://16.16.91.234:3003/uploads/" +
                                      list.video_data[0].video[1].filename
                                    }
                                    alt
                                  /> 
                                  </div>
                                  )}
                                
                                </div>
                                <div className="video-card-body">
                                  <div
                                    className="single-video-author box mb-3"
                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                  >
                                    <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
              }} to="/view_profile">
                                      {" "}
                                      {/* <img
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          (list.video_data &&
                                          Array.isArray(list.video_data) &&
                                          list.video_data.length > 1 &&
                                          list.video_data[1].video &&
                                          Array.isArray(
                                            list.video_data[1].video
                                          ) &&
                                          list.video_data[1].video.length > 1 &&
                                          list.video_data[1].video[1].filename
                                            ? list.video_data[1].video[1]
                                                .filename
                                            : "")
                                        }
                                        alt
                                      /> */}
                                      <img
                                        className="img-fluid" src={
                                      "http://16.16.91.234:3003/uploads/" +
                                      list.data[0].image[0].filename
                                    }alt
                                    />
                                    </Link>
                                    <p>
                                      <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
              }} to="/view_profile">
                                        <strong>
                                          {list.data &&
                                          Array.isArray(list.data) &&
                                          list.data.length > 0 &&
                                          list.data[0].channel_name
                                            ? list.data[0].channel_name
                                            : "Unknown Channel"}
                                        </strong>
                                      </Link>{" "}
                                      
                                    </p>
                                    <p>{formatDate(list.current_date)}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-md-12">No data found.</div>
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

           
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Myprofile;
