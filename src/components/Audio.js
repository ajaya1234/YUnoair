import ReactAudioPlayer from "react-audio-player";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FcMusic } from "react-icons/fc";
import Addtoplaylist from "./Addtoplaylist";

function Audio() {
  const [lists, setLists] = useState([]);
  const [getmusicc, setGetmusicc] = useState([]);



  const getHomeData = async () => {
    const idddd = localStorage.getItem("getsingleaudio");
    
    

    const options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      _id: idddd,
    });

    try {
      const res = await axios.post(
        "http://16.16.91.234:3003/api/get_single_music",
        data,
        options
      );
      setLists([res.data.data]);
      getHomeData()
    } catch (err) {
      console.error("API Error:", err);
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
      getHomeData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="">
                <div style={{ textAlign: "center" }} className="col-md-12">
                  <div className="main-title">
                  {lists.map((list) => (
  <div className="single-video-left" key={list._id}>
    <div className="single-video">
      <div className="thumbnail">
        <img src="img/logo.png" alt="thumbnail" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <span>{list.music?.originalname}</span>
      <ReactAudioPlayer
        style={{
          height: "100px",
          width: "-webkit-fill-available",
        }}
        key={list.music?.filename}
        src={`http://16.16.91.234:3003/uploads/${list.music?.filename}`}
        autoPlay
        controls
      />
    </div>
  </div>
))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
<Addtoplaylist/>
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div className="main-title row justify-content-end" style={{marginRight:'-8px'}}>
                  {getmusicc.map((list) => {
                    return (
                      <div
                        className="col-sm-4 mb-4  "
                        style={{
                          borderRadius: "10px",
                          width: "100%",
                          marginLeft: "-5px",
                          marginRight: "",
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

                          <p> {list.music && list.music.originalname}</p>

                          <div
                            className="video-card-image"
                            style={{ borderRadius: "87px", height: "167px" }}
                          >
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  "getsingleaudio",
                                  list._id
                                );
                              }}
                              className="play-icon"
                              to="/audio"
                            >
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  "getsingleaudio",
                                  list._id
                                );
                              }}
                              to="/audio"
                            >
                              <img
                                style={{ height: "100%" }}
                                className="img-fluid"
                                src="img/music.png"
                                alt=""
                              />
                              <FcMusic />
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
        </div>
      </div>
    </div>
  );
}

export default Audio;
