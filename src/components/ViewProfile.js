import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ViewProfile = () => {

  const [getcommt, setgetcomment] = useState([]);
  const [getmyvideo, setgetmyvideo] = useState([]);
  const [ getplaylist , setGetplaylist] = useState([])
  const [getmyaudio, setgetmyaudio] = useState([]);

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
    sendcomment();
  }, []);

  const sendcomment = async () => {
    const channellidd = localStorage.getItem("channelid");
    

    

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      _id: channellidd,
     
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_single_channel", data, options)
      .then((res) => {
        setgetcomment([res.data.data]);
        
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };


  useEffect(() => {
    setgetmyaudioo();
  }, []);
  
  const setgetmyaudioo = async () => {
    const useriddd  = localStorage.getItem("useridd");
    const channellidd = localStorage.getItem("channelid");
    
    //console.log("singlesdasdasd channeell", channellidd);
    //console.log("singlesdasdasd userissss", useriddd);
  
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  
    const data = {
       "channel_id": channellidd,
      "user_id": useriddd,
    };
  
    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_my_channel_audio",
        data,
        options
      );
  
      if (Array.isArray(response.data.data)) {
        setgetmyaudio(response.data.data);
        //console.log("response of get_my_channel_subscribe", response.data.data);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  
















  useEffect(() => {
    getmychannelvideo();
  }, []);
  
  const getmychannelvideo = async () => {
    const useriddd  = localStorage.getItem("useridd");
    const channellidd = localStorage.getItem("channelid");
    
    // console.log("singlesdasdasd channeell", channellidd);
    // console.log("singlesdasdasd userissss", useriddd);
  
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  
    const data = {
       "channel_id": channellidd,
      "user_id": useriddd,
    };
  
    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_my_channel_video",
        data,
        options
      );
  
      if (Array.isArray(response.data.data)) {
        setgetmyvideo(response.data.data);
        //console.log("response of get_my_channel_subscribe", response.data.data);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  


  useEffect(() => {
    get_my_playlist();
  }, []);

  const get_my_playlist = async () => {
    const userid = localStorage.getItem("useridd");

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






  return (
    <>
<Header/>
      <Sidebar />
      <div id="wrapper">
      {getcommt.map((list) => {
    return (
        <div className="single-channel-page" id="content-wrapper">
        
      <div className="single-channel-image">
        <img style={{ height: '250px' }}
          className="img-fluid"
          alt=""
          src={"http://16.16.91.234:3003/uploads/" + list.image[0].filename}
        />
        <div className="channel-profile">
          <img
            className="channel-profile-img"
            alt=""
            src={"http://16.16.91.234:3003/uploads/" + list.image[1].filename}
          />
        </div>
      </div>
   
         
         
         
         
         
         
          <div className="single-channel-nav">
            <nav className="navbar navbar-expand-lg navbar-light" style={{paddingLeft:"28px"}}>
              <div className='row'>

              </div>
              <div className='col-sm-3'>
                 <Link className="channel-brand" to="#"> 
                {list.channel_name}{" "}
                  {/* <br /> */}
                 
                 </Link> 
               
              {/* </div>
              <div className='col-sm-12 col-lg-9'> */}
                
                    {" "}
                    <button className="btn btn-outline-danger btn-sm" type="button">
                      Subscribe
                      <strong> {list.subscribe_count}</strong>
                    </button>
                  {/* </form>
                </div> */}
              </div>



            </nav>



          </div>

          <Tabs className="ml-3 mt-3" style={{}}>
            <TabList>
              <Tab style={{paddingLeft:"118px",border:"none"}}>Home</Tab>
              <Tab style={{paddingLeft:"118px" ,border:"none"}}>Videos</Tab>
              <Tab style={{paddingLeft:"118px" ,border:"none"}}>Playlist</Tab>
              <Tab style={{paddingLeft:"118px" ,border:"none"}}>Music</Tab>
              {/* <Tab style={{paddingLeft:"118px" ,border:"none"}}>About</Tab> */}
            </TabList>

            <TabPanel>
            <div>
            <div className="container-fluid">
              <div className="video-block section-padding">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title">
                     
                      <h6>Home</h6>
                    </div>
                  </div>
                  {getmyvideo.map((list) => {
    if (list.video && list.video[1] && list.video[1].filename) {
      return (
       
         <div className="col-lg-4 col-sm-6 mb-4" key={list.video[1].filename} style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card" style={{height: '300px'}}>
                          <div className="video-card-image" style={{ borderRadius: 15 , height:'212px' }}>
              <Link className="play-icon" to="/video_page" onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
              localStorage.setItem("categorytpee",list.category_type);
            }} >
                <i className="fas fa-play-circle" />
              </Link>
              <Link to="/video_page" onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
              localStorage.setItem("categorytpee",list.category_type);

            
            }} >
                <img  
                  className="img-fluid"
                  src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename}
                  alt=""
                />
              </Link>

            </div>
            <div className="video-card-body">
              <div className="video-title">
                <Link to="#">{list.video_name}</Link>
              </div>
              <div className="video-page text-success">
              {list.channel_name}{" "}
                <Link
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  to="#"
                  data-original-title="Verified"
                >
                  
                </Link>
              </div>
              <div className="video-view">
                {list.video_views} views &nbsp;
                <i className="fas fa-calendar-alt" /> {formatDate(list.current_date)}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null; // Skip rendering if video data is incomplete
    }
  })}
                
                </div>

               
              </div>
            </div>
          </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="container-fluid">
                  <div className="video-block section-padding">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title">
                         
                          <h6>Upload Videos</h6>
                        </div>
                      </div>
                      {getmyvideo.map((list) => {
    if (list.video && list.video[1] && list.video[1].filename) {
      return (
        <div className="col-lg-4 col-sm-6 mb-4" key={list.video[1].filename} style={{ paddingLeft: 10, paddingRight: 0 }}>
        <div className="video-card" style={{height: '300px'}}>
          <div className="video-card-image" style={{ borderRadius: 15 , height:'212px' }}>
              <Link className="play-icon" to="/video_page" onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
              localStorage.setItem("categorytpee",list.category_type);
            }} >
                <i className="fas fa-play-circle" />
              </Link>
              <Link to="/video_page" onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
              localStorage.setItem("categorytpee",list.category_type);
            }} >
                <img  
                  className="img-fluid"
                  src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename}
                  alt=""
                />
              </Link>

            </div>
            <div className="video-card-body">
              <div className="video-title">
                <Link to="#">{list.video_name}</Link>
              </div>
              <div className="video-page text-success">
              {list.channel_name}{" "}
                <Link
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  to="#"
                  data-original-title="Verified"
                >

                </Link>
              </div>
              <div className="video-view">
                {list.video_views} views &nbsp;
                <i className="fas fa-calendar-alt" /> {formatDate(list.current_date)}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null; // Skip rendering if video data is incomplete
    }
  })}
                    </div>
                    
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="container-fluid">
                  <div className="video-block section-padding">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title">
                         
                          <h6>Music Lists</h6>
                        </div>
                      </div>
                    
                      {getplaylist.map((list) => {
                          return (
                      <div className="col-lg-4 col-sm-6 mb-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                          <div className="video-card-image" style={{ borderRadius: 15 }}>
                            <Link className="play-icon" onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }}
                                   
                                    to="/musiclist"><i className="fas fa-play-circle" /></Link>
                            <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/musiclist"><img className="img-fluid" src="img/v1.png" /></Link>
                            <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/musiclist">
                            <p>{list.name && list.name}</p>
                              {/* <div className="time" style={{ bottom: 0, right: 0 }}>
                                <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                              </div> */}
                            </Link>
                          </div>

                        </div>
                      </div>
                      );
                    })}
                    </div>
                  
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="container-fluid">
                  <div className="video-block section-padding">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title">
                          
                          <h6>Upload Music</h6>
                        </div>
                      </div>
                      {getmyaudio.map((list) => {
                          return (
                      <div className="col-lg-4 col-sm-6 mb-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                          <div className="video-card-image" style={{ borderRadius: 15 }}>
                            <Link className="play-icon" onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }}
                                   
                                    to="/audio"><i className="fas fa-play-circle" /></Link>
                            <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/audio"><img className="img-fluid" src="img/v1.png" /></Link>
                            <Link onClick={() => {
              localStorage.setItem("getsingleaudio", list._id); }} to="/audio">
                           
                            <p>{list.music_title && list.music_title}</p>
                              {/* <div className="time" style={{ bottom: 0, right: 0 }}>
                                <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                              </div> */}
                            </Link>
                          </div>

                        </div>
                      </div>
                      );
                    })}


                    </div>
                    
                  </div>
                </div>
              </div>
            </TabPanel>
            {/* <TabPanel>
              <h6>   Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers <br/>


              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/>

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/>

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/>

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/></h6>
            </TabPanel> */}
          </Tabs>



        </div>
      
      );
    })}
      </div>
      <Footer />
    </>
  )
}

export default ViewProfile
