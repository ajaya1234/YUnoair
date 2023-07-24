import AdUnit from "./AdUnit";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./home.css";
import { BsFacebook } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { MdDescription, MdOutlineRotate90DegreesCw } from "react-icons/md";

import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsFillReplyFill } from "react-icons/bs";
import Switch from "@mui/material/Switch";

import "../setting.css";

import { SiAddthis } from "react-icons/si";

function Video_Page() {
  const [open, setOpen] = React.useState(false);
  const [lists, setLists] = useState([]);
  const [lates, setLates] = useState([]);
  const [Comment, setcomment] = useState([]);
  const [getcommt, setgetcomment] = useState([]);
  const [ccomment, setCcomment] = useState("");

  const [subscribeMsg, setSubscribeMsg] = useState("");

  const [likeStatus, setLikeStatus] = useState(0);
  const [comentStatus, setComentStatus] = useState(0);

  // addVIDEOPLAYLIST
  const [channelname, setChannelname] = useState("");
  const [getplaylist, setGetplaylist] = useState([]);
  const [listsS, setListsS] = useState([]);
  const [output, setOutput] = useState("");
  const useridd = localStorage.getItem("_id");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [image, setImage] = useState(null);
  const [ssuccessMessage, setSsuccessMessage] = useState("");

  const [replyValue, setReplyValue] = useState("");
  const [single, setSingle] = useState([]);
  const [singlelike, setSinglelike] = useState([]);
  const [getreply, setGetreply] = useState([]);
  const [showAdvertisement, setShowAdvertisement] = useState(true);
  const qualityOptions = [
    { label: 'Auto', value: 'auto' },
    { label: '240p', value: '240' },
    { label: '360p', value: '360' },
    { label: '480p', value: '480' },
    { label: '720p', value: '720' },
    { label: '1080p', value: '1080' },
    // Add more quality options if needed
  ];
  const handleQualityChange = (selectedQuality) => {
    // Do something with the selected quality, e.g., update the player state
    console.log('Selected quality:', selectedQuality);
  };

  useEffect(() => {
    const advertisementDuration = 10000; // 5 seconds in milliseconds

    const timer = setTimeout(() => {
      setShowAdvertisement(false);
    }, advertisementDuration);

    return () => clearTimeout(timer);
  }, []);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getreplycomment = () => {
    const audioidddd = localStorage.getItem("videoiid");
    const comentidddd = localStorage.getItem("comentidd");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      comment_id: comentidddd,

      video_id: audioidddd,
    });

    axios
      .post("http://16.16.91.234:3003/api/get_reply_comment", data, options)
      .then((res) => {
        setGetreply([res.data]);

        //sendreplycomment();
        getreplycomment();
        //console.log("gettttsadssend replayaaaaaa", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const sendreplycomment = () => {
    const idddd = localStorage.getItem("_id");
    const channelidddd = localStorage.getItem("channel_id");
    const audioidddd = localStorage.getItem("videoiid");
    const comentidddd = localStorage.getItem("comentidd");
    console.log("saasqqqqq", idddd, channelidddd, audioidddd, comentidddd);
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      comment_id: comentidddd,
      channel_id: channelidddd,
      video_id: audioidddd,
      msg: replyValue,
    });

    axios
      .post("http://16.16.91.234:3003/api/send_reply_comment", data, options)
      .then((res) => {
        //getcommt();
        console.log("sadsadssend replayaaaaaa", res);
      })
      .catch((err) => {
        console.error(err);
      });

    setReplyValue("");
  };

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

  useEffect(() => {
    getsingllike();
  }, []);

  const getsingllike = async () => {
    const useriddd = localStorage.getItem("_id");
    const audioidddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: useriddd,
      video_id: audioidddd,
    });

    await axios
      .post(
        "http://16.16.91.234:3003/api/get_like_single_video_list",
        data,
        options
      )
      .then((res) => {
        setSinglelike([res.data.data]);
        getsingllike();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getsinglsubscribe();
  }, []);

  const getsinglsubscribe = async () => {
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: useriddd,
      channel_id: channeliddd,
    });

    await axios
      .post(
        "http://16.16.91.234:3003/api/get_subscribe_single_channel",
        data,
        options
      )
      .then((res) => {
        setSingle([res.data.data]);
        getsinglsubscribe();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  // const handleSubmitReply = (item) => {

  //   // const sendreply = (item) => {
  //     const idddd = localStorage.getItem('_id');
  //     const channelidddd = localStorage.getItem("channel_id");
  //   const audioidddd = localStorage.getItem("videoiid");
  //     //const comentidddd = localStorage.getItem("comentidd");
  //     const options = {
  //       headers: {
  //         'content-type': 'application/json; charset=utf-8',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     };

  //     const data = JSON.stringify({
  //       user_id: idddd,
  //       comment_id: item,
  //       channel_id:channelidddd,
  //       video_id:audioidddd,
  //       msg:replyValue,

  //     });

  //     axios
  //       .post('http://16.16.91.234:3003/api/send_reply_comment', data, options)
  //       .then((res) => {
  //         //getcommt();
  //         console.log("sadsadssend replayaaa",res)
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });

  //   setReplyValue("");
  // };

  const removereplycoment = (item) => {
    const idddd = localStorage.getItem('_id');
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      comment_id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_reply", data, options)
      .then((res) => {
        //console.log("sdsadsaddelteee", res);
        getreplycomment();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removecoment = (item) => {
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      comment_id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_comment_user", data, options)
      .then((res) => {
        getcommt();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const likecoment = async () => {
    const idddd = localStorage.getItem("comentidd");
    const useriddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    //const newComentStatus = comentStatus === 0 ? 1 : 0;

    const data = JSON.stringify({
      comment_id: idddd,
      user_id: useriddd,

      //like_status: newComentStatus,
    });

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/like_comment_user",
        data,
        options
      );
      //console.log("Response of like comentt:", response);
      //setComentStatus(newComentStatus);
    } catch (error) {
      console.error("API Error:", error);
    }
  };






  const likereplycoment = async (item) => {
    //const idddd = localStorage.getItem("comentidd");
    const useriddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    
    const data = JSON.stringify({
      comment_id: item,
      user_id: useriddd,

      
    });

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/like_reply_user",
        data,
        options
      );
      //console.log("adataa",data)
      //console.log("Response of likereply comentt:", response);
      
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const removeCartitem = (item, name) => {
    const idddd = localStorage.getItem("_id");
    //const audioidddd = localStorage.getItem("getsingleaudio");
    const channelidddd = localStorage.getItem("channel_id");
    const audioidddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      playlist_id: item,
      user_id: idddd,
      video_id: audioidddd,
      playlist_name: name,
      channel_id: channelidddd,
    });

    axios
      .post(
        "http://16.16.91.234:3003/api/upload_my_playlist_video",
        data,
        options
      )
      .then((res) => {
        if (res.data === true) {
          setSsuccessMessage("Successfully added");
        } else {
          setSsuccessMessage("Successfully added");
        }
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

    let userDetails = new FormData();
    userDetails.append("user_id", useridd);
    userDetails.append("name", channelname);
    userDetails.append("image", image);

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/create_playlist",
        userDetails,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Api-Key": "your-api-key",
          },
        }
      );

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
        "http://16.16.91.234:3003/api/get_my_playlist",
        data,
        options
      );
      get_my_playlist();
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
        setListsS(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleLikeClick = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const newLikeStatus = likeStatus === 0 ? 1 : 0;

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
      like_status: newLikeStatus,
    });

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/like_video",
        data,
        options
      );
      //console.log("Response of like api:", response);
      setLikeStatus(newLikeStatus);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    createhistory();
  }, []);

  const createhistory = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/create_history", data, options)
      .then((res) => {})
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  const addwishlist = async () => {
    const userid = localStorage.getItem("_id");
    const id = localStorage.getItem("channelid");

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    if (Array.isArray(lists) && lists.length > 0) {
      const updatedLists = await Promise.all(
        lists.map(async (list) => {
          const newStatus = list.status === "1" ? "0" : "1"; // Toggle the subscription status

          const data = JSON.stringify({
            user_id: userid,
            channel_id: id,
            status: newStatus,
          });

          try {
            const response = await axios.post(
              "http://16.16.91.234:3003/api/subscribe_to_channel",
              data,
              options
            );

            if (response.status === 200) {
              return {
                ...list,
                status: newStatus,
              };
            }
          } catch (error) {
            console.error(
              `Error ${
                newStatus === "1" ? "subscribing to" : "unsubscribing from"
              } channel:`,
              error
            );
          }

          return list;
        })
      );

      setLists(updatedLists);
    }
  };

  const download = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/download_video", data, options)
      .then((res) => {
        //console.log("downloaddddd response of ", res);
        //setcomment(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  const sendcomment = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
      msg: ccomment,
    });

    await axios
      .post("http://16.16.91.234:3003/api/send_comment", data, options)
      .then((res) => {
        setCcomment("");
        setcomment(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getcomment();
  }, []);

  const getcomment = async () => {
    const idddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_comment", data, options)
      .then((res) => {
        setgetcomment(res.data.data);
        getcomment();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const idddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_single_video", data, options)
      .then((res) => {
        setLists([res.data.data]);
        getHomeData();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    video_views();
  }, []);

  const video_views = async () => {
    const idddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/video_views", data, options)
      .then((res) => {
        //console.log("videos viewww",res)
        // setLists([res.data.data]);
        // getHomeData();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getHomeData6();
  }, []);

  const getHomeData6 = async () => {
    // const idddd = localStorage.getItem("videoiid");
    const categorytypeee = localStorage.getItem("categorytpee");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      category_type: categorytypeee,
    });

    await axios
      .post("http://16.16.91.234:3003/api/related_video", data, options)
      .then((res) => {
        setLates(res.data.data);
        getHomeData6();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  return (
    <>
    <Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-8">
                  {lists.map((list) => {
                    return (
                      <div className="single-video-left" key={list._id}>
                        <div className="single-video">
                        
                          {list.category_type === "Live" ||
                          [
                            "bollywood",
                            "Bollywood",
                            "TollyWood",
                            "tollywood",
                            "HollyWood",
                            "hollyWood",
                          ].includes(list.category_type) ? (
                            <>
                          <ReactPlayer
                            url={
                              list.category_type === "Live"
                                ? list.video_url
                                : `http://16.16.91.234:3003/uploads/${list.video[0].filename}`
                            }
                            width="100%"
                            height="365px"
                            style={{
                              maxWidth: "640px",
                              maxHeight: "360px",
                            }}
                            controls={true}
                            playing={true}
                            
                            // config={{
                            //   youtube: {
                            //     playerVars: {
                            //       controls: 1,
                            //       showinfo: 1,
                            //       rel: 0,
                            //       modestbranding: 1,
                            //     },
                            //     preload: true,
                            //     quality: 'auto', // Default quality
                            //   },
                            // }}
                          />
                          {/* <AdUnit /> */}
                        </>
                      ) : (
                        <>
                          <ReactPlayer
                            url={`http://16.16.91.234:3003/uploads/${list.video[0].filename}`}
                            width="100%"
                            height="365px"
                            style={{
                              maxWidth: "640px",
                              maxHeight: "360px",
                            }}
                            controls={true}
                            playing={true}
                          
                            // config={{
                            //   youtube: {
                            //     playerVars: {
                            //       controls: 1,
                            //       showinfo: 1,
                            //       rel: 0,
                            //       modestbranding: 1,
                            //     },
                            //     preload: true,
                            //     quality: 'auto', // Default quality
                            //   },
                            // }}
                          />
                          {/* <AdUnit /> */}
                        </>
                      )}

                          {/* {list.category_type === "bollywood" ||
                          list.category_type === "Bollywood" ||
                          list.category_type === "TollyWood" ||
                          list.category_type === "tollywood" ||
                          list.category_type === "HollyWood" ||
                          list.category_type === "hollyWood" ||
                          list.category_type === "Live" ? (
                            <ReactPlayer
                              url={
                                list.category_type === "Live"
                                  ? list.video_url
                                  : "http://16.16.91.234:3003/uploads/" +
                                    list.video[0].filename
                              }
                              width="640"
                              height="360"
                              controls={true}
                              playing={true}
                            />
                          ) : (
                            <ReactPlayer
                              url={
                                "http://16.16.91.234:3003/uploads/" +
                                list.video[0].filename
                              }
                              width="640"
                              height="360"
                              controls={true}
                              playing={true}
                            />
                          )} */}
                        
                       
 {/* <select onChange={(e) => handleQualityChange(e.target.value)}>
        {qualityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}
                        
                        </div>
                        
                       
                        {/* {showAdvertisement && (
        <div className="advertisement">
          
          <video  playing={true} width="100%"
                              height="365px" controls>
          <source src="video/vid-8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         
        </div>
      )} */}


                       

      


<div>

</div>
                        <div className="single-video-title box mb-3">
                          <h2>
                            <Link to="#">{list.video_name}</Link>
                          </h2>
                          <p className="mb-0">
                            <i className="fas fa-eye" /> {list.video_views}{" "}
                            views
                          </p>
                        </div>
                        <div className="single-video-author box mb-3">
                         

                          {single.map((item) => (
                            <div className="float-right">
                              <button
                                onClick={() => addwishlist(list)}
                                className="btn btn-danger subbtn"
                                type="button"
                              >
                                {item && item.subscribe_status == 1 ? (
                                  <>
                                    Subscribed
                                    <strong>
                                      {subscribeMsg && <p>{subscribeMsg}</p>}
                                    </strong>
                                  </>
                                ) : (
                                  <>
                                    Subscribe
                                    {subscribeMsg && (
                                      <strong>
                                        <p>{subscribeMsg}</p>
                                      </strong>
                                    )}
                                  </>
                                )}
                              </button>
                            </div>
                          ))}

                          

                          <div className="mainprofile">
                            <img
                              className="img-fluid mainprofileimg "
                              src={
                                "http://16.16.91.234:3003/uploads/" +
                                list.video[1].filename
                              }
                              alt=""
                            />
                            <p>
                              <Link to="#" className="mainprofilecannelname">
                                <strong>{list.channel_name}</strong>
                              </Link>{" "}
                            </p>
                          </div>
                          <br />
                          <br />

                          <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 col-sm-12">
       
                              {singlelike.map((item) => (
                                <span
                                  onClick={handleLikeClick}
                                  style={{ color: "black" }}
                                >
                                  {item && item.like_status == 1 ? (
                                    <FaThumbsDown />
                                  ) : (
                                    <FaThumbsUp />
                                  )}
                                </span>
                              ))}
                              &nbsp;&nbsp;&nbsp;
                              {list.video_likes} &nbsp;&nbsp;&nbsp;
                              <input
                                style={{ borderRadius: "15px", width: "100px" ,background: "none", }}
                                type="text"
                                placeholder="Comment"
                                value={ccomment}
                                onChange={(e) => setCcomment(e.target.value)}
                              />
                              <button
                                style={{
                                  borderRadius: "12px",
                                  background: "none",
                                  color: "black",
                                }}
                                onClick={sendcomment}
                              >
                                Send
                              </button>
                              
                            </div>

                            <div className="col-lg-7 col-md-6 col-sm-12 mt-1 row">
                              <div
                                className=""
                                data-toggle="modal"
                                data-target="#my1Modal"
                              >
                                {/* <FaShare /> */}
                                <button
                                  style={{
                                    borderRadius: "12px",
                                    background: "none",
                                    color: "black",
                                  }}
                                >
                                  Share
                                </button>
                              </div>
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
                                          list.video[0].filename
                                        }
                                      >
                                        <BsFacebook />
                                      </FacebookShareButton>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <TwitterShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[0].filename
                                        }
                                      >
                                        <CgTwitter />
                                      </TwitterShareButton>
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <LinkedinShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[0].filename
                                        }
                                      >
                                        <FaLinkedin />
                                      </LinkedinShareButton>
                                      {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                                      {/* <PinterestShareButton url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename}>
         <FaPinterestSquare/>
      </PinterestShareButton> */}
                                      &nbsp;&nbsp;&nbsp;&nbsp;
                                      <WhatsappShareButton
                                        url={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.video[0].filename
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
                              {/* <button
  style={{
    borderRadius: '15px',
    background: '#808080',
    color: 'white',
  }}
  onClick={() => handleShareClick("http://16.16.91.234:3003/uploads/" + list.video[0].filename)}
>
  Share
</button> */}
                              <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                  data-toggle="modal"
                                  data-target="#myModal"
                                  style={{
                                    borderRadius: "12px",
                                    background: "none",
                                    color: "black",
                                  }}
                                >
                                  Save
                                </button>
                              </div>
                              &nbsp;&nbsp;
                              <div className="">
                                <button
                                  style={{
                                    borderRadius: "12px",
                                    background: "none",
                                    color: "black",
                                  }}
                                  onClick={download}
                                >
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    );
                  })}

                  {getcommt && getcommt.length > 0 ? (
                    getcommt.slice(-5).map((list) => (
                      <>
                      
                      <p
                        key={list._id}
                        onClick={() => {
                          localStorage.setItem("comentidd", list._id);
                        }}
                      >
{list &&
                      list.user_data[0].profile_image &&
                      list.user_data[0].profile_image.filename ? (
                        <img style={{width:'38px',height:'33px' , borderRadius:'50px'}}
                          alt="Avatar"
                          src={
                            "http://16.16.91.234:3003/uploads/" +
                            list.user_data[0].profile_image.filename
                          }
                        />
                      ) : (
                        <img style={{width:'38px' , height:'33px' , borderRadius:'50px'}} alt="Avatar" src="img/logo.png" />
                      )}
                    
                  
                


                        
                      &nbsp;&nbsp;&nbsp;
                        {list.msg}
                        <p style={{ textAlign: "left" }}>
                          <Link onClick={() => removecoment(list._id)}>
                            <AiFillDelete />
                          </Link>{" "}&nbsp;&nbsp;&nbsp;
                           <span
                            onClick={() => {
                              handleClickOpen();
                              getreplycomment();
                              localStorage.setItem("comentidd", list._id);
                            }}
                          >
                             <BsFillReplyFill />&nbsp;&nbsp;&nbsp;
                          </span>
                         


                            <span onClick={likecoment} style={{ color: "black" }}>
                           
                            
                              <FaThumbsUp />&nbsp;&nbsp;&nbsp;
                             
                             
                            
                          </span>{" "}
                          {list.comment_likes}
                        </p>
                      </p>
                      </>
                    ))
                  ) : (
                    <p>No comments</p>
                  )}
                  
                </div>

                <div className="col-md-4">
                  <div className="single-video-right">
                    <div className="row">
                      <div className="col-md-12">
                        {lates && lates.length > 0 ? (
                          lates.map((list) => (
                            <div
                              className="video-card video-card-list"
                              key={list._id}
                            >
                              <div className="video-card-image">
                                <Link
                                  onClick={() => {
                                    localStorage.setItem("videoiid", list._id); // Use the extracted videoId
                                  }}
                                  className="play-icon"
                                  to="/video_page"
                                >
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    onClick={() => {
                                      localStorage.setItem(
                                        "videoiid",
                                        list._id
                                      ); // Use the extracted videoId
                                    }}
                                    className="img-fluid"
                                    src={
                                      "http://16.16.91.234:3003/uploads/" +
                                      list.video[1].filename
                                    }
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="video-card-body">
                                {/*<div className="btn-group float-right right-action">
                                  <Link
                                    to="#"
                                    className="right-action-link text-gray"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i
                                      className="fa fa-ellipsis-v"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                   <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="#">
                                      <i className="fas fa-fw fa-star" /> &nbsp;
                                      Top Rated
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      <i className="fas fa-fw fa-signal" />{" "}
                                      &nbsp; Viewed
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      <i className="fas fa-fw fa-times-circle" />{" "}
                                      &nbsp; Close
                                    </Link>
                                  </div> 
                                </div>*/}
                                <div className="video-title">
                                  <Link to="#">{list.description}</Link>
                                </div>

                                <div className="video-view">
                                  {list.video_views} views &nbsp;
                                  <i className="fas fa-calendar-alt" />{" "}
                                  {formatDate(list.current_date)}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>No videos found.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create New Video Playlist</h4>
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
                <div className="form-group">
                  <label htmlFor="image">Image:</label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="form-control"
                    id="image"
                  />
                </div>
                <br />
                <button className="btn btn-info" type="submit">
                  Submit
                </button>
              </form>

              <br />
              <br />

              <font style={{ color: "blue" }}>
                {ssuccessMessage && <p>{ssuccessMessage}</p>}{" "}
              </font>
              {getplaylist.map((list) => {
                return (
                  <p
                    onClick={() =>
                      removeCartitem(list._id, list.name && list.name)
                    }
                  >
                    {" "}
                    <span className="btn btn-info" style={{ color: "white" }}>
                      <SiAddthis />
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{list.name && list.name}
                  </p>
                );
              })}

              <div></div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
          </DialogContentText>
          <TextField
            onChange={(e) => setReplyValue(e.target.value)}
            value={replyValue}
            autoFocus
            margin="dense"
            id="name"
            label="Reply Comment"
            type="email"
            fullWidth
            variant="standard"
          />

          {/* {getreply.map((listssss) => {
                return (
                  <>
          <p>{listssss.data[0].msg}  
          {listssss.data[0].data[0].username}</p>
          </>
          );
              })} */}

          {/* {getreply.map((listssss) => {
  if (listssss.data && listssss.data && listssss.data[0].data && listssss.data[0].data[0]) {
    return (
      <React.Fragment >
        <p>{listssss.data[1].msg} </p>
      </React.Fragment>
    );
  }
  return null;
})} */}

          {getreply.map((listssss, index) => {
            if (listssss.data && listssss.data.length > 0) {
              return (
                <React.Fragment key={index}>
                  {listssss.data.map((data, dataIndex) => (
                    <p key={dataIndex}>
                    {data &&
                      data.data[0].profile_image &&
                      data.data[0].profile_image.filename ? (
                        <img style={{width:'38px',height:'33px' , borderRadius:'50px'}}
                          alt="Avatar"
                          src={
                            "http://16.16.91.234:3003/uploads/" +
                            data.data[0].profile_image.filename
                          }
                        />
                      ) : (
                        <img style={{width:'38px' , height:'33px' , borderRadius:'50px'}} alt="Avatar" src="img/logo.png" />
                      )}
                       &nbsp;&nbsp;{data.msg}  
                       {/* {listssss.data[0].data[0].username} */}
                      &nbsp;&nbsp;&nbsp;<AiFillDelete
                        onClick={() => removereplycoment(data._id)}
                      />&nbsp;&nbsp;&nbsp;
                      <span onClick={() =>likereplycoment(data._id)} style={{ color: "black" }}>
                           
                            
                           <FaThumbsUp />&nbsp;&nbsp;&nbsp;
                           {data.reply_likes}
                          
                         
                       </span>{" "}
                    </p>
                    
                  ))}
                </React.Fragment>
              );
            }
            return null;
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              
              sendreplycomment();
            }}
          >
            Send
          </Button>

          {/* <Button onClick={handleClose}>Send</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Video_Page;
