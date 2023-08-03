// import { useState } from "react";
// import React from "react";
// import Slider from "react-slick";
// import "./sliders.css";
// import { useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Slider_1 = () => {
//   const [gettop, setgettop] = useState([]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
    
//     const timeDiff = Math.abs(now - date);
    
//     const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
//     if (years > 0) {
//       return years === 1 ? '1 year ago' : `${years} years ago`;
//     }
    
//     const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
//     if (months > 0) {
//       return months === 1 ? '1 month ago' : `${months} months ago`;
//     }
    
//     const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//     if (days > 0) {
//       return days === 1 ? '1 day ago' : `${days} days ago`;
//     }
    
//     const hours = Math.floor(timeDiff / (1000 * 60 * 60));
//     if (hours > 0) {
//       return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
//     }
    
//     const minutes = Math.floor(timeDiff / (1000 * 60));
//     if (minutes > 0) {
//       return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
//     }
    
//     return 'Just now';
//   };



//   useEffect(() => {
//     gettopvideo();
//   }, [0]);

//   const gettopvideo = async () => {
//     const options = {
//       headers: {
//         "content-type": "application/json; charset=utf-8",
//         "Access-Control-Allow-Origin": "*",
//       },
//     };
//     const data = JSON.stringify({});

//     await axios
//       .get("http://16.16.91.234:3003/api/get_top_video", data, options)
//       .then((res) => {
//         setgettop(res.data.data);
//       })
//       .catch((err) => {});
//   };

//   const settings = {
//     className: "center",
//     centerMode: true,
//     focusOnSelect: true,
//     infinite: true,
//     centerPadding: "100px",
//     slidesToShow: 3,
//     speed: 200,
//     autoplay: true,

//   };

//   return (
//     <Slider {...settings} className="abc">
//       {gettop.map((list) => {
//         return (
//           <div className="video-block section-padding">
//             <div className="row">
//               <div className="col-md-12">
//                 <div
//                   id="recipeCarousel"
//                   className="carousel slide"
//                   data-bs-interval="false"
//                 >
//                   <div className="carousel-inner" role="listbox">
//                     <div className="row">
//                       <div className="col-lg-3">
//                         <div
//                           className="video-card"
//                           style={{ margin: "5px", width: "170px" }}
//                         >
//                           <div
//                             className="video-card-image"
//                             style={{ borderRadius: "15px", height: "130px" }}
//                           >
//                             <Link
//                               onClick={() => {
//                                 localStorage.setItem("videoiid", list._id);
//                                 localStorage.setItem("useridd", list.user_id);
//                                 localStorage.setItem(
//                                   "channelid",
//                                   list.channel_id
//                                 );
//                               }}
//                               className="play-icon"
//                               to="/video_page"
//                             >
//                               <i className="fas fa-play-circle" />
//                             </Link>
//                             <Link
//                               onClick={() => {
//                                 localStorage.setItem("videoiid", list._id);
//                                 localStorage.setItem("useridd", list.user_id);
//                                 localStorage.setItem(
//                                   "channelid",
//                                   list.channel_id
//                                 );
//                               }}
//                               to="/video_page"
//                             >
//                               <img
//                                 onClick={() => {
//                                   localStorage.setItem("videoiid", list._id);
//                                   localStorage.setItem("useridd", list.user_id);
//                                   localStorage.setItem(
//                                     "channelid",
//                                     list.channel_id
//                                   );
//                                   localStorage.setItem("categorytpee", list.category_type);
//                                 }}
//                                 className="img-fluid"
//                                 src={
//                                   "http://16.16.91.234:3003/uploads/" +
//                                   list.video[1].filename
//                                 }
//                                 alt=""
//                               />
//                             </Link>
//                             {/* <div className="time" style={{fontSize:'7px'}}> 3.50 </div> */}
//                           </div>
//                           </div>
//                           <div style={{height:'45px'}} className="video-card-body">

//                             <div className="video-title">
//                               <Link
//                                 onClick={() => {
//                                   localStorage.setItem("videoiid", list._id);
//                                   localStorage.setItem("useridd", list.user_id);
//                                   localStorage.setItem(
//                                     "channelid",
//                                     list.channel_id
//                                   );
//                                   localStorage.setItem("categorytpee", list.category_type);
//                                 }}
//                                 to="/video_page"
//                               >
//                                 {/* <p style={{fontSize:'7px'}}>{list.description}</p> */}
//                               </Link>
//                             </div>

//                             {/* <div
//                               className="single-video-author box mb-3"
//                               style={{ padding: "2px", boxShadow:'none', width:'162px' }}
//                             >
//                               <div className="float-right">
//                                 <p style={{fontSize:'9px'}}>
//                                   <i className="fas fa-eye" /> {list.video_views}
//                                 </p>
//                                 <p style={{fontSize:'9px'}}>
//                                   <i className="fa fa-thumbs-up" /> {list.video_likes}
//                                 </p>
//                               </div>
//                               <Link onClick={() => {
//                 localStorage.setItem("videoiid", list._id);
//                 localStorage.setItem("useridd", list.user_id);
//                 localStorage.setItem("channelid", list.channel_id);
//                 localStorage.setItem("categorytpee", list.category_type);
//               }} to="/view_profile">
//                                 {" "}
//                                 <img style={{height:'20px' , width:'20px'}}
//                                   className="img-fluid"
//                                   src={
//                                     "http://16.16.91.234:3003/uploads/" +
//                                     list.video[1].filename
//                                   }
//                                   alt=""
//                                 />
//                               </Link>
//                               <p>
//                                 <Link onClick={() => {
//                 localStorage.setItem("videoiid", list._id);
//                 localStorage.setItem("useridd", list.user_id);
//                 localStorage.setItem("channelid", list.channel_id);
//                 localStorage.setItem("categorytpee", list.category_type);
//               }} to="/view_profile"
//               >
//                                   <strong style={{fontSize:'10px'}}>{list.channel_name}</strong>
//                                 </Link>{" "}
                                
//                               </p>
//                               <p style={{fontSize:'8px'}}>{formatDate(list.current_date)}</p>
//                             </div> */}

                          
                         
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

         
//         );
//       })}
    
//     </Slider>
//   );
// };

// export default Slider_1;




import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "./sliders.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider_1 = () => {
  const [gettop, setgettop] = useState([]);

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
    gettopvideo();
  }, []);

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

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 600,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {gettop.map((list) => {
        return (
          <div className="video-block section-padding">
            <div className="row">
              <div className="col-md-12">
                <div
                  id="recipeCarousel"
                  className="carousel slide"
                  data-bs-interval="false"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="row">
                      <div className="col-lg-3">
                        <div
                          className="video-card"
                          style={{ margin: "5px", width: "160px" , borderRadius:'14px'}}
                        >
                          <div
                            className="video-card-image"
                            style={{ borderRadius: "15px", height: "104px" }}
                          >
                            <Link
                              onClick={() => {
                                localStorage.setItem("videoiid", list._id);
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
                            <Link
                              onClick={() => {
                                localStorage.setItem("videoiid", list._id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                              }}
                              to="/video_page"
                            >
                              <img height={'100%'}
                                onClick={() => {
                                  localStorage.setItem("videoiid", list._id);
                                  localStorage.setItem("useridd", list.user_id);
                                  localStorage.setItem(
                                    "channelid",
                                    list.channel_id
                                  );
                                  localStorage.setItem("categorytpee", list.category_type);
                                }}
                                className="img-fluid"
                                src={
                                  "http://16.16.91.234:3003/uploads/" +
                                  list.video[1].filename
                                }
                                alt=""
                              />
                            </Link>
                            {/* <div className="time" style={{fontSize:'7px'}}> 3.50 </div> */}
                          </div>
                          <div style={{height:'110px'}} className="video-card-body">
                            <div className="video-title">
                              <Link
                                onClick={() => {
                                  localStorage.setItem("videoiid", list._id);
                                  localStorage.setItem("useridd", list.user_id);
                                  localStorage.setItem(
                                    "channelid",
                                    list.channel_id
                                  );
                                  localStorage.setItem("categorytpee", list.category_type);
                                }}
                                to="/video_page"
                              >
                                <span style={{fontSize:'9px'}}>{list.description}</span>
                              </Link>
                            </div>

                            <div
                              className="single-video-author box mb-3"
                              style={{ paddingLeft: "0px" }}
                            >
                              <div className="float-right">
                                <p style={{fontSize:'9px'}}>
                                  <i className="fas fa-eye" /> {list.video_views}
                                </p>
                                <p style={{fontSize:'9px'}}>
                                  <i className="fa fa-thumbs-up" /> {list.video_likes}
                                </p>
                              </div>
                              <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
                localStorage.setItem("categorytpee", list.category_type);
              }}
               to="/view_profile">
                                {" "}
                                <img style={{height:'20px' , width:'20px'}}
                                  className="img-fluid"
                                  src={
                                    "http://16.16.91.234:3003/uploads/" +
                                    list.video[1].filename
                                  }
                                  alt=""
                                />
                              </Link>
                              <p>
                                <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
                localStorage.setItem("categorytpee", list.category_type);
              }} to="/view_profile">
                                  <strong style={{fontSize:'10px'}}>{list.channel_name}</strong>
                                </Link>{" "}
                                {/* <span
                                  data-placement="top"
                                  data-toggle="tooltip"
                                  data-original-title="Verified"
                                >
                                  <i className="fas fa-check-circle text-success" />
                                </span> */}
                              </p>
                              <p style={{fontSize:'8px'}}>{formatDate(list.current_date)}</p>
                            </div>

                            {/* <div className="single-video-author" style={{ paddingLeft: '0px' }}>
          
          <Link to="/view_profile"> <img className="img-fluid" src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename} alt="" /></Link>
          <p>
            <Link to="/view_profile">
              <strong>{list.channel_name}</strong>
            </Link>{' '}
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
        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          // <div >
          //   <Link to="/video_page">
          //   <img   onClick={() => {
          //     localStorage.setItem("videoiid",list._id);
          //   }} src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename} alt="slider"  className="image" />
          //   <span>{list.description}</span>
          //   </Link>

          // </div>
        );
      })}
      {/* {gettop.map((list) => {
          return (
     <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
              <div className="float-right">
                <p><i className="fas fa-eye" /> {list.video_views}</p>
                <p><i className="fa fa-thumbs-up" /> {list.video_likes}</p>
              </div>
              <Link to="/view_profile"> <img className="img-fluid" src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename} alt="" /></Link>
              <p>
                <Link to="/view_profile">
                  <strong>{list.channel_name}</strong>
                </Link>{' '}
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
            );
              
          })} */}
    </Slider>
  );
};

export default Slider_1;
