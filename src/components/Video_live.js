import React, { useState, useEffect } from "react";
import axios from "axios";
import AgoraRTC from "agora-rtc-sdk";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Video_live() {


  const deletelive = () => {
    const idddd = localStorage.getItem('_id');
    const livektoek = localStorage.getItem("livetoken");

    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = JSON.stringify({
      user_id: idddd,

      token: livektoek,
    });

    axios
      .post('http://16.16.91.234:3003/api/remove_live_views', data, options)
      .then((res) => {
        //console.log("delte remove addd  response sdsdsadas", res)
      })
      .catch((err) => {
        console.error(err);
      });
  };




  useEffect(() => {
    postData();
  }, []);
  const parse = localStorage.getItem("livetoken");
  

  const [dta] = useState(parse);


  let _id = localStorage.getItem("_id");
  const postData = () => {
    const item = {
      user_id: _id,
      token: dta.token,
    };
    axios
      .post(`http://16.16.91.234:3003/api/add_live_views`, item)
      .then((res) => console.log(res));
  };
  var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };
  const channellive = localStorage.getItem("livechanennelname")
  console.log("sadad", channellive)
  var option = {
    appID: "537ee9fcc8f24c33b4b823896c9db588",
    channel: channellive,
    uid: null,
    token: dta.token,

  };

  function joinChannel(role) {
    // Create a client
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    // Initialize the client
    rtc.client.init(
      option.appID,
      function () {
        console.log("init success");

        // Join a channel
        rtc.client.join(
          option.token ? option.token : null,
          option.channel,
          option.uid ? +option.uid : null,
          function (uid) {
            console.log(
              "join channel: " + option.channel + " success, uid: " + uid
            );
            rtc.params.uid = uid;

            rtc.client.on("connection-state-change", function (evt) {
              console.log("audience", evt);
            });

            rtc.client.on("stream-added", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              if (id !== rtc.params.uid) {
                rtc.client.subscribe(remoteStream, function (err) {
                  console.log("stream subscribe failed", err);
                });
              }
              console.log("stream-added remote-uid: ", id);
            });

            rtc.client.on("stream-removed", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              console.log("stream-removed remote-uid: ", id);
            });

            rtc.client.on("stream-subscribed", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              remoteStream.play("remote_video_");
              console.log("stream-subscribed remote-uid: ", id);
            });

            rtc.client.on("stream-unsubscribed", function (evt) {
              var remoteStream = evt.stream;
              var id = remoteStream.getId();
              remoteStream.pause("remote_video_");
              console.log("stream-unsubscribed remote-uid: ", id);
            });
          },
          function (err) {
            console.error("client join failed", err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }

  function leaveEventAudience(params) {
    rtc.client.leave(
      function () {
        console.log("client leaves channel");
        //……
      },
      function (err) {
        console.log("client leave failed ", err);
        //error handling
      }
    );
  }
  useEffect(() => {
    joinChannel("audience");
  }, []);

  const [showDiv, setShowDiv] = useState(false);

  const [msgArray, setMsgArray] = useState([]);
  const [Msg, setMsg] = useState({
    msg: "",
  });
  const inputHandle = (e) => {
    setMsg({ ...Msg, [e.target.name]: e.target.value });
  };

  let sendmsg = () => {
    setMsgArray([...msgArray, Msg]);
    setMsg("");
  };

  useEffect(() => {
    console.log(msgArray);
  }, [msgArray]);

  return (
    <div>
      {/* <Sidebar /> */}
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <button onClick={deletelive}>Leave</button>
                  <div
                    style={{
                      width: "100%",
                      height: "80vh",
                      backgroundColor: "white",
                      borderRadius: 15,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "fixed"
                    }}
                  >

                    <div
                      onClick={() => setShowDiv(!showDiv)}
                      id="remote_video_"
                      style={{
                        width: "100%",
                        height: "95%",
                        borderRadius: 15,
                        backgroundColor: "rgba(0,0,0,.2)",
                        backgroundRepeat: "no-repeat",
                      }}
                    >


                    </div>

                    <div style={{ width: "48%", height: "100%" }}>









                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Video_live;

