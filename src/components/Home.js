import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaShare } from "react-icons/fa";
import "./home.css";
import { BsFacebook } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Slider from "react-slick";
import Header from "./Header";
import { MdExplore } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import axios from "axios";
import Slider_1 from "./Slider_1";
import Sidebar from "./Sidebar";
import "./home.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TfiSave } from "react-icons/tfi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import { ImNotification } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { MdBugReport } from "react-icons/md";

function Home() {
  const [lists, setLists] = useState([]);
  const [live, setLive] = useState([]);
  const [gettop, setgettop] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [successMessageee, setSuccessMessageee] = useState('');

  const [selectedOption, setSelectedOption] = useState('');

  const ShareButtons = ({ url }) => {
    const urlObject = new URL(url);
    const fbclid = urlObject.searchParams.get("fbclid");
    const formattedShareUrl = `http://example.com/${fbclid}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const timeDiff = Math.abs(now - date);

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    if (years > 0) {
      return years === 1 ? "1 year ago" : `${years} years ago`;
    }

    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    if (months > 0) {
      return months === 1 ? "1 month ago" : `${months} months ago`;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }

    const minutes = Math.floor(timeDiff / (1000 * 60));
    if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    }

    return "Just now";
  };


  const reportVideo = async () => {
    const useriddd = localStorage.getItem('_id');
    const idddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = {
      user_id: useriddd,
      video_id: idddd,
      report: selectedOption,
    };

    try {
      const response = await axios.post(
        'http://16.16.91.234:3003/api/report_single_video',
        data,
        options
      );
      //console.log("sadasddddd",response)
      setSuccessMessageee('Submit successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };





  const savewatchlater = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");
    //console.log("response gettingfff", idddd, useriddd, channeliddd);

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: useriddd,
      channel_id: channeliddd,
      video_id: idddd,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/save_watch_later",
        data,
        options
      );

      setSuccessMessage("Saved successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const blockuser = async () => {
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: useriddd,
      channel_id: channeliddd,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/block_user",
        data,
        options
      );
      setSuccessMessage("User blocked successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const dontrecommend = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");
    //console.log("response gettingfff", idddd, useriddd, channeliddd);

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: useriddd,
      channel_id: channeliddd,
      video_id: idddd,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/dont_recommend_channel",
        data,
        options
      );

      setSuccessMessage("Dont Recommend!");
    } catch (err) {
      console.error(err);
    }
  };

  const notinterested = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: useriddd,

      video_id: idddd,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/not_interested_video",
        data,
        options
      );

      setSuccessMessage("Not interrested!");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getHomeData();
  }, [0]);
  const getHomeData = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({});

    await axios
      .post("http://16.16.91.234:3003/api/get_latest_video", data, options)
      .then((res) => {
        setLists(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    gettopvideo();
  }, [0]);

  const gettopvideo = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({});

    await axios
      .get("http://16.16.91.234:3003/api/get_top_video", data, options)
      .then((res) => {
        setgettop(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getlivevideo();
  }, []);

  const getlivevideo = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({});

    await axios
      .get("http://16.16.91.234:3003/api/get_live_video", data, options)
      .then((res) => {
        setLive(res.data.data);
        //console.log("liveeeeeeeeee", res.data.data);
      })
      .catch((err) => {});
  };

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    margin: "30px",
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    arrow: true,
  };

  return (
    <>
    <Header/>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <Slider_1 />
            <div className="top-category section-padding mb-4">
              <hr />
              <div className="row">
                <div className="video-block section-padding">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-title">
                         
                      </div>
                      {/* <h3>Live Videos</h3>  */}
                    </div>
                    <div className="col-md-12">
                      <div
                        id="recipeCarousel"
                        className="carousel slide"
                        data-bs-interval="false"
                      >
                        <div className="carousel-inner" role="listbox">
                          <div className="row justify-content-left">
                          {live && live.map((list) => {
                          
    
    return (
                                <div
                                  className="col-lg-4 mb-4  "
                                  style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                   
                                  }}
                                >
                                  <div
                                    className="video-card  boxdoticons"
                                    style={{
                                      width: "100%",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <div
                                      className="video-card-image"
                                      style={{
                                        borderRadius: "10px",
                                        width: "100%",
                                        height: "160px",
                                      }}
                                    >
                                      <Link onClick={() => {
                                        localStorage.setItem(
                                          "livetoken",
                                          list.token
                                        );
                                        localStorage.setItem(
                                          "livechanennelname",
                                          list.channel_name
                                        );
                                      }}
                                        
                                        className="play-icon"
                                        to="/video_live"
                                      >
                                        <i className="fas fa-play-circle" />
                                      </Link>

                                      <Link onClick={() => {
                                        localStorage.setItem(
                                          "livetoken",
                                          list.token
                                        );
                                        localStorage.setItem(
                                          "livechanennelname",
                                          list.channel_name
                                        );
                                    
                                      }}
                                       
                                        to="/video_live"
                                      >
                                         <img
                                         
                                           className="img-fluid"
                                           src={
                                             "http://16.16.91.234:3003/uploads/" +
                                             list.channel_data[0].image[0].filename
                                           }
                                          alt=""
                                        />
                                      </Link>
                                      
                                    </div>
                                    <div className="video-card-body">
                                      <div className="video-title">
                                        <Link
                                         
                                          to="/video_live"
                                        >
                                          {list.video_name} 
                                        </Link>
                                      </div>
                                      <div
                                        className="single-video-author box mb-3"
                                        style={{ paddingLeft: "0px" }}
                                      >
                                        <div className="float-right">
                                          <p>
                                            <i className="fas fa-eye" />{" "}
                                            {list.total_views}
                                          </p>
                                          
                                        </div>
                                        <Link
                                          
                                          to="/video_live"
                                        >
                                          {" "}
                                           <img
                                             className="img-fluid"
                                             src={
                                               "http://16.16.91.234:3003/uploads/" +
                                               list.channel_data[0].image[1].filename
                                             }
                                            alt=""
                                          />
                                        </Link>
                                        <p>
                                          <Link
                                            
                                            to="/view_profile"
                                          >
                                            <strong
                                             
                                              to="/view_profile"
                                            >
                                              {list.channel_name}
                                            </strong>
                                          </Link>{" "}
                                        </p>
                                        <p>{formatDate(list.current_date)}</p>
                                      </div>
                                    </div>
                                  </div>
                                  

                                  
                                </div>
                              );
                            })}
                          </div>

                          <div className="carousel-item">
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v2.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
                                  </p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v3.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v4.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v5.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                          <div className="carousel-item">
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v3.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v4.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v5.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v1.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                          <div className="carousel-item">
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v4.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v5.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v1.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v2.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                          <div className="carousel-item">
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v5.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v1.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v2.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                            <div
                              className="video-card"
                              style={{ margin: "5px" }}
                            >
                              <div
                                className="video-card-image"
                                style={{ borderRadius: "15px" }}
                              >
                                <Link className="play-icon" to="/video_page">
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    className="img-fluid"
                                    src="img/v3.png"
                                    alt=""
                                  />
                                </Link>
                                {/* <div className="time">3:50</div> */}
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">
                                    There are many variations of passages of
                                    Lorem
                                  </Link>
                                </div>
                                <div
                                  className="single-video-author box mb-3"
                                  style={{ paddingLeft: "0px" }}
                                >
                                  <div className="float-right">
                                    <p>
                                      <i className="fas fa-eye" /> 10.4M
                                    </p>
                                    <p>
                                      <i className="fa fa-thumbs-up" /> 131K
                                    </p>
                                  </div>
                                  <Link to="/view_profile">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src="img/s4.png"
                                      alt=""
                                    />
                                  </Link>
                                  <p>
                                    <Link to="/view_profile">
                                      <strong>History</strong>
                                    </Link>{" "}
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
                        {/* <Link className="carousel-control-prev bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="prev" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                        {/* <Link className="carousel-control-next bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="next" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-next-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           

            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h3>Latest Videos</h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    id="recipeCarousel"
                    className="carousel slide"
                    data-bs-interval="false"
                  >
                    <div className="carousel-inner" role="listbox">
                      <div className="row justify-content-left">
                        {lists.map((list) => {
                          return (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                margin: "0px -04px 0px -02px",
                              }}
                            >
                              <div
                                className="video-card  boxdoticons"
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
                                    onClick={() => {
                                      localStorage.setItem(
                                        "videoiid",
                                        list._id
                                      );
                                      localStorage.setItem(
                                        "useridd",
                                        list.user_id
                                      );
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

                                  <Link
                                    onClick={() => {
                                      localStorage.setItem(
                                        "videoiid",
                                        list._id
                                      );
                                      localStorage.setItem(
                                        "useridd",
                                        list.user_id
                                      );
                                      localStorage.setItem(
                                        "channelid",
                                        list.channel_id
                                      );
                                      localStorage.setItem(
                                        "categorytpee",
                                        list.category_type
                                      );
                                    }}
                                    to="/video_page"
                                  >
                                    <img
                                      onClick={() => {
                                        localStorage.setItem(
                                          "videoiid",
                                          list._id
                                        );
                                        localStorage.setItem(
                                          "useridd",
                                          list.user_id
                                        );
                                        localStorage.setItem(
                                          "channelid",
                                          list.channel_id
                                        );
                                        localStorage.setItem(
                                          "categorytpee",
                                          list.category_type
                                        );
                                      }}
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.video[1].filename
                                      }
                                      alt=""
                                    />
                                  </Link>
                                  {/* <div className="time"> 3.50 </div> */}
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <Link
                                      onClick={() => {
                                        localStorage.setItem(
                                          "videoiid",
                                          list._id
                                        );
                                        localStorage.setItem(
                                          "useridd",
                                          list.user_id
                                        );
                                        localStorage.setItem(
                                          "channelid",
                                          list.channel_id
                                        );
                                        localStorage.setItem(
                                          "categorytpee",
                                          list.category_type
                                        );
                                      }}
                                      to="#"
                                    >
                                      {list.description}
                                    </Link>
                                  </div>
                                  <div
                                    className="single-video-author box mb-3"
                                    style={{ paddingLeft: "0px" }}
                                  >
                                    <div className="float-right">
                                      <p>
                                        <i className="fas fa-eye" />{" "}
                                        {list.video_views}
                                      </p>
                                      <p>
                                        <i className="fa fa-thumbs-up" />{" "}
                                        {list.video_likes}
                                      </p>
                                    </div>
                                    <Link
                                      onClick={() => {
                                        localStorage.setItem(
                                          "videoiid",
                                          list._id
                                        );
                                        localStorage.setItem(
                                          "useridd",
                                          list.user_id
                                        );
                                        localStorage.setItem(
                                          "channelid",
                                          list.channel_id
                                        );
                                      }}
                                      to="/view_profile"
                                    >
                                      {" "}
                                      <img
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.data[0].image[0].filename
                                        }
                                        alt=""
                                      />
                                    </Link>
                                    <p>
                                      <Link
                                        onClick={() => {
                                          localStorage.setItem(
                                            "videoiid",
                                            list._id
                                          );
                                          localStorage.setItem(
                                            "useridd",
                                            list.user_id
                                          );
                                          localStorage.setItem(
                                            "channelid",
                                            list.channel_id
                                          );
                                        }}
                                        to="/view_profile"
                                      >
                                        <strong
                                          onClick={() => {
                                            localStorage.setItem(
                                              "videoiid",
                                              list._id
                                            );
                                            localStorage.setItem(
                                              "useridd",
                                              list.user_id
                                            );
                                            localStorage.setItem(
                                              "channelid",
                                              list.channel_id
                                            );
                                          }}
                                          to="/view_profile"
                                        >
                                          {list.channel_name}
                                        </strong>
                                      </Link>{" "}
                                    </p>
                                    <p>{formatDate(list.current_date)}</p>
                                  </div>
                                </div>
                              </div>
                              <BiDotsVerticalRounded
                                onClick={() => {
                                  localStorage.setItem("videoiid", list._id);
                                  localStorage.setItem(
                                    "channelid",
                                    list.channel_id
                                  );
                                }}
                                className="doticon"
                                data-toggle="modal"
                                data-target="#myModal"
                                style={{
                                  fontSize: "25px",
                                  float: "right",
                                  cursor: "pointer",
                                  color: "balck",
                                }}
                              />

                              <div className="modal" id="my1Modal">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title">Shared</h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        ×
                                      </button>
                                    </div>

                                    <div className="card-footer">
                                      <FacebookShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[1].filename
                                        }
                                      >
                                        <BsFacebook />
                                      </FacebookShareButton>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <TwitterShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[1].filename
                                        }
                                      >
                                        <CgTwitter />
                                      </TwitterShareButton>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <LinkedinShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[1].filename
                                        }
                                      >
                                        <FaLinkedin />
                                      </LinkedinShareButton>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <WhatsappShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[1].filename
                                        }
                                      >
                                        <FaWhatsappSquare />
                                      </WhatsappShareButton>
                                      <br />
                                      <br />
                                      <div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v2.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
                              </p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v3.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v4.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v3.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v4.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v1.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v4.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v1.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v2.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v1.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v2.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v3.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                    {/* <Link className="carousel-control-prev bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="prev" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                    {/* <Link className="carousel-control-next bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="next" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-next-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h3>Top Videos</h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    id="recipeCarousel"
                    className="carousel slide"
                    data-bs-interval="false"
                  >
                    <div className="carousel-inner" role="listbox">
                      <div className="row justify-content-left">
                        {gettop.map((list) => {
                          return (
                            <div
                              className="col-sm-4 mb-4  "
                              style={{
                                borderRadius: "10px",
                                width: "100%",
                                margin: "0px -04px 0px -02px",
                              }}
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
                                  <Link
                                    onClick={() => {
                                      localStorage.setItem(
                                        "videoiid",
                                        list._id
                                      );
                                      localStorage.setItem(
                                        "useridd",
                                        list.user_id
                                      );
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
                                  <Link
                                    onClick={() => {
                                      localStorage.setItem(
                                        "videoiid",
                                        list._id
                                      );
                                      localStorage.setItem(
                                        "useridd",
                                        list.user_id
                                      );
                                      localStorage.setItem(
                                        "channelid",
                                        list.channel_id
                                      );
                                      localStorage.setItem(
                                        "categorytpee",
                                        list.category_type
                                      );
                                    }}
                                    to="/video_page"
                                  >
                                    <img
                                      onClick={() => {
                                        localStorage.setItem(
                                          "videoiid",
                                          list._id
                                        );
                                        localStorage.setItem(
                                          "useridd",
                                          list.user_id
                                        );
                                        localStorage.setItem(
                                          "channelid",
                                          list.channel_id
                                        );
                                        localStorage.setItem(
                                          "categorytpee",
                                          list.category_type
                                        );
                                      }}
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.video[1].filename
                                      }
                                      alt=""
                                    />
                                  </Link>
                                  {/* <div className="time"> 3.50 </div> */}
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <Link
                                      onClick={() => {
                                        localStorage.setItem(
                                          "videoiid",
                                          list._id
                                        );
                                        localStorage.setItem(
                                          "useridd",
                                          list.user_id
                                        );
                                        localStorage.setItem(
                                          "channelid",
                                          list.channel_id
                                        );
                                        localStorage.setItem(
                                          "categorytpee",
                                          list.category_type
                                        );
                                      }}
                                      to="/video_page"
                                    >
                                      {list.description}
                                    </Link>
                                  </div>
                                  <div
                                    className="single-video-author box mb-3"
                                    style={{ paddingLeft: "0px" }}
                                  >
                                    <div className="float-right">
                                      <p>
                                        <i className="fas fa-eye" />{" "}
                                        {list.video_views}
                                      </p>
                                      <p>
                                        <i className="fa fa-thumbs-up" />{" "}
                                        {list.video_likes}
                                      </p>
                                    </div>
                                    <Link
                                      onClick={() => {
                                        localStorage.setItem(
                                          "videoiid",
                                          list._id
                                        );
                                        localStorage.setItem(
                                          "useridd",
                                          list.user_id
                                        );
                                        localStorage.setItem(
                                          "channelid",
                                          list.channel_id
                                        );
                                        localStorage.setItem(
                                          "categorytpee",
                                          list.category_type
                                        );
                                      }}
                                      to="/view_profile"
                                    >
                                      {" "}
                                      <img
                                        onClick={() => {
                                          localStorage.setItem(
                                            "videoiid",
                                            list._id
                                          );
                                          localStorage.setItem(
                                            "useridd",
                                            list.user_id
                                          );
                                          localStorage.setItem(
                                            "channelid",
                                            list.channel_id
                                          );
                                          localStorage.setItem(
                                            "categorytpee",
                                            list.category_type
                                          );
                                        }}
                                        to="/view_profile"
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.data[0].image[0].filename
                                        }
                                        alt=""
                                      />
                                    </Link>
                                    <p>
                                      <Link
                                        onClick={() => {
                                          localStorage.setItem(
                                            "videoiid",
                                            list._id
                                          );
                                          localStorage.setItem(
                                            "useridd",
                                            list.user_id
                                          );
                                          localStorage.setItem(
                                            "channelid",
                                            list.channel_id
                                          );
                                          localStorage.setItem(
                                            "categorytpee",
                                            list.category_type
                                          );
                                        }}
                                        to="/view_profile"
                                      >
                                        <strong
                                          onClick={() => {
                                            localStorage.setItem(
                                              "videoiid",
                                              list._id
                                            );
                                            localStorage.setItem(
                                              "useridd",
                                              list.user_id
                                            );
                                            localStorage.setItem(
                                              "channelid",
                                              list.channel_id
                                            );
                                            localStorage.setItem(
                                              "categorytpee",
                                              list.category_type
                                            );
                                          }}
                                          to="/view_profile"
                                        >
                                          {list.channel_name}
                                        </strong>
                                      </Link>{" "}
                                    </p>
                                    <p>{formatDate(list.current_date)}</p>
                                  </div>
                                </div>
                              </div>
                              <BiDotsVerticalRounded
                                onClick={() => {
                                  localStorage.setItem("videoiid", list._id);
                                  localStorage.setItem(
                                    "channelid",
                                    list.channel_id
                                  );
                                }}
                                className="doticon"
                                data-toggle="modal"
                                data-target="#myModal"
                                style={{
                                  fontSize: "25px",
                                  float: "right",
                                  cursor: "pointer",
                                  color: "balck",
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>

                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v2.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v3.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v4.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v3.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v4.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v1.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v4.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v1.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v2.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v5.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v1.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v2.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                        <div className="video-card" style={{ margin: "5px" }}>
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px" }}
                          >
                            <Link className="play-icon" to="/video_page">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="/video_page">
                              <img
                                className="img-fluid"
                                src="img/v3.png"
                                alt=""
                              />
                            </Link>
                            {/* <div className="time">3:50</div> */}
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">
                                There are many variations of passages of Lorem
                              </Link>
                            </div>
                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p>
                                  <i className="fas fa-eye" /> 10.4M
                                </p>
                                <p>
                                  <i className="fa fa-thumbs-up" /> 131K
                                </p>
                              </div>
                              <Link to="/view_profile">
                                {" "}
                                <img
                                  className="img-fluid"
                                  src="img/s4.png"
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link to="/view_profile">
                                  <strong>History</strong>
                                </Link>{" "}
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
                    {/* <Link className="carousel-control-prev bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="prev" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                    {/* <Link className="carousel-control-next bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="next" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-next-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-0" />
          </div>
        </div>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content" style={{ bottom: "-220px" }}>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            <div className="card-body">
              <font style={{ color: "blue" }}>
                {successMessage && <p>{successMessage}</p>}
              </font>
              <Link to="#">
                <div className="p-2">
                  <span>
                    <TfiSave style={{ color: "black", fontSize: "22px" }} />
                  </span>
                  <span
                    onClick={savewatchlater}
                    className="ml-4 text-dark"
                    style={{ fontSize: "15px" }}
                  >
                    save to watch later
                  </span>
                </div>
              </Link>
              <Link to="#">
                <div className="p-2">
                  <span>
                    <AiOutlineShareAlt
                      data-toggle="modal"
                      data-target="#my1Modal"
                      style={{ color: "black", fontSize: "22px" }}
                    />
                  </span>
                  <span
                    className="ml-4 text-dark"
                    data-toggle="modal"
                    data-target="#my1Modal"
                    style={{ fontSize: "15px" }}
                  >
                    Share
                  </span>
                </div>
              </Link>
              <Link to="#">
                <div className="p-2">
                  <span>
                    <BiBlock style={{ color: "black", fontSize: "22px" }} />
                  </span>
                  <span
                    onClick={blockuser}
                    className="ml-4 text-dark"
                    style={{ fontSize: "15px" }}
                  >
                    Block Users
                  </span>
                </div>
              </Link>
              <Link to="#">
                <div className="p-2">
                  <span>
                    <ImNotification
                      style={{ color: "black", fontSize: "22px" }}
                    />
                  </span>
                  <span
                    onClick={notinterested}
                    className="ml-4 text-dark"
                    style={{ fontSize: "15px" }}
                  >
                    Not interested
                  </span>
                </div>
              </Link>
              <Link to="#">
                <div className="p-2">
                  <span>
                    <RxCross1 style={{ color: "black", fontSize: "22px" }} />
                  </span>
                  <span
                    onClick={dontrecommend}
                    className="ml-4 text-dark"
                    style={{ fontSize: "15px" }}
                  >
                    Don't recommed Channel
                  </span>
                </div>
              </Link>
              <Link to="#">
                <div className="p-2">
                  <span>
                    <MdBugReport style={{ color: "black", fontSize: "22px" }} />
                  </span>
                  <span className="ml-4 text-dark" data-toggle="modal" data-dismiss="modal"
                    data-target="#myModalreport" style={{ fontSize: "15px" }}>
                    Report
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>



      <div className="modal" id="myModalreport">
      <div className="modal-dialog">
        <div className="modal-content" style={{ bottom: '-242px' }}>
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>

          <div className="card-body">
            <font style={{ color: 'blue' }}>
              {successMessageee && <p>{successMessageee}</p>}
            </font>
            <div className="p-2">
              <label> 
                <input
                  type="radio"
                  name="reportOption"
                  value="Sexual content"
                  checked={selectedOption === 'Sexual content'}
                  onChange={handleOptionChange}
                />
                &nbsp;&nbsp;&nbsp;Sexual content
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="reportOption"
                  value="Violent or repulsive"
                  checked={selectedOption === 'Violent or repulsive'}
                  onChange={handleOptionChange}
                />&nbsp;&nbsp;&nbsp;
                Violent or repulsive
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="reportOption"
                  value="Harmful or dangerous acts content"
                  checked={selectedOption === 'Harmful or dangerous acts content'}
                  onChange={handleOptionChange}
                />&nbsp;&nbsp;&nbsp;
                Harmful or dangerous acts content
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="reportOption"
                  value="Harmful or dangerous acts content"
                  checked={selectedOption === 'Harmful or dangerous acts content'}
                  onChange={handleOptionChange}
                />&nbsp;&nbsp;&nbsp;
                Harmful or dangerous acts content
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="reportOption"
                  value="Harmful or dangerous acts content"
                  checked={selectedOption === 'Harmful or dangerous acts content'}
                  onChange={handleOptionChange}
                />&nbsp;&nbsp;&nbsp;
                Harmful or dangerous acts content
              </label>
              <br />
              <button  onClick={reportVideo}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        </>
  );
}

export default Home;
