import React, { useState, useEffect } from "react";
import axios from "axios";
import AgoraRTC from "agora-rtc-sdk";
import Sidebar from "./Sidebar";

function Join() {
  const [agoraToken, setAgoraToken] = useState("");

  useEffect(() => {
    postData();
  }, []);

  const parse = localStorage.getItem("livetoken");
  console.log("Parse value:", parse);
  let parsed;
  try {
    parsed = parse ? JSON.parse(parse) : null;
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    parsed = null;
  }
  const token = parsed ? parsed.token : null;
  const [dta] = useState({ token: token });

  const _id = localStorage.getItem("_id");

  const postData = () => {
    if (!dta) {
      console.log("Invalid data");
      return;
    }

    const item = {
      user_id: _id,
      token: dta?.token,
    };
    axios
      .post(`http://16.16.91.234:3003/api/add_live_views`, item)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const deletelive = () => {
    const idddd = localStorage.getItem("_id");
    const chanidd = localStorage.getItem("channel_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      token: agoraToken?.token,
    });

    axios
      .post("http://16.16.91.234:3003/api/remove_live_views", data, options)
      .then((res) => {
        console.log("delete remove add response:", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };

  

  var option = {
    appID: "537ee9fcc8f24c33b4b823896c9db588",
    channel: "aaj",
    uid: null,
    token: "006537ee9fcc8f24c33b4b823896c9db588IACQ6TQaXPm1PGBqLxYjIpYKu+Y9xpD/gS+WHE98dJazApmJA1MAAAAAIgAZpnVemAqgZAQAAQAox55kAgAox55kAwAox55kBAAox55k",
  };
  
  function joinChannel(role) {
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    rtc.client.init(
      option.appID,
      function () {
        console.log("init success");
        rtc.client.join(
          option.token,
          option.channel,
          option.uid ? +option.uid : null,
          function (uid) {
            console.log("join channel: " + option.channel + " success, uid: " + uid);
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
      function (err) {
        console.error(err);
      }
    );
  }

  function leaveEventAudience(params) {
    rtc.client.leave(
      function () {
        console.log("client leaves channel");
      },
      function (err) {
        console.error("client leave failed ", err);
      }
    );
  }

  useEffect(() => {
    joinChannel("audience");
  }, []);

  const [showDiv, setShowDiv] = useState(false);
  const [msgArray, setMsgArray] = useState([]);
  const [msg, setMsg] = useState("");

  const inputHandle = (e) => {
    setMsg(e.target.value);
  };

  const sendMsg = () => {
    setMsgArray([...msgArray, msg]);
    setMsg("");
  };

  useEffect(() => {
    console.log(msgArray);
  }, [msgArray]);

  return (
    <div>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div>
                  <b>{JSON.stringify(agoraToken)}</b>{" "}
                  <button onClick={() => joinChannel("host")}>
                    Join Channel 
                  </button>
                  
                  <div
                    id="local_stream"
                    className="local_stream"
                    style={{ width: "500px", height: "300px" }}
                  >
                    <button onClick={deletelive}>Delete Video</button>
                  </div>
                  <div
                    id="remote_video_"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join
