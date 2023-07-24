import React from 'react'
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'

const Blockuser = () => {
    const [getdownloadd, setGetdownloadd] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

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
            "http://16.16.91.234:3003/api/block_user_list",
            data,
            options
          );
          setGetdownloadd(response.data.data);
          
        } catch (err) {
          console.error(err);
        }
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
          channel_id: item,
        });
    
        axios
          .post("http://16.16.91.234:3003/api/unblock_user", data, options)
          .then((res) => {
            getdownload();
            setSuccessMessage('User unblocked successfully!');
          })
          .catch((err) => {
            console.error(err);
          });
      };



      

    return (
        <div>
<Header/>
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper">
                <div className="container-fluid">
                    
                <h4>Blocked Users </h4>
                <font style={{color:'blue'}}>{successMessage && <p>{successMessage}</p>}</font>
                <br/>
                
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
                              
                                
                               

                                
                              <img  onClick={() =>
                                removeCartitem(list.channel_id)
                              } style={{height:'55px' , width:'50px' , background:'none'}} src='img/block.jpg'/>
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
                                    to="#"  
                                  >
                                    <i className="fas fa-play-circle" />
                                  </Link>
                                  <Link to="#"  >
                                     <img
                                      className="img-fluid"
                                      src={
                                        "http://16.16.91.234:3003/uploads/" +
                                        list.channel_data.image[1].filename
                                      }
                                      alt
                                    /> 
                                  </Link>
                                  {/* <div className="time">3:50</div> */}
                                </div>
                                <div className="video-card-body">
                                  <div className="video-title">
                                    <Link to="#">
                                      {/* {list.video_data.video_name} */}
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

              }} to="/view_profile">
                                      {" "}
                                      <img
                                        className="img-fluid"
                                        src={
                                          "http://16.16.91.234:3003/uploads/" +
                                          list.channel_data.image[0].filename

                                          
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
                                           {list.channel_data.channel_name} 
                                          
                                        </strong>
                                      </Link>{" "}
                                     
                                    </p>
                                    {/* <p>{list.current_date}</p> */}
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



                  

                </div>

            </div>
        </div>
    )
}

export default Blockuser
