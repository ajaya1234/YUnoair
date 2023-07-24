import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import AgoraRTC from "agora-rtc-sdk";
import Sidebar from "./Sidebar";

export const rtc = {
  client: null,

  localAudioTrack: null,
  localVideoTrack: null,
};

export const options = {
  appId: "537ee9fcc8f24c33b4b823896c9db588",

  token:
    "006537ee9fcc8f24c33b4b823896c9db588IAAzRQNcaZOCcHrvcWMeaD0fHyJZDo3PcQwpd7O1seSGI5YALE4AAAAAIgB6ijibRraaZAQAAQDWcplkAgDWcplkAwDWcplkBADWcplk",
};

function Appp() {
  const [videoname , setVideoname] = useState('');
  const [output, setOutput] = useState("");
  const [joined, setJoined] = useState(false);
  const channelRef = useRef("");
  const remoteRef = useRef("");
  const leaveRef = useRef("");
  const [agoraToken, setAgoraToken] = useState("");
  //console.log("sadasd", agoraToken);

  const rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };

  //  useEffect(() => {
  //    generateAgoraToken();
  //  }, []);

  // const generateAgoraToken = async () => {
  //   const YOUR_USER_ID = localStorage.getItem("_id");
  //   const YOUR_CHANNEL_ID = localStorage.getItem("channel_id");
  //   const YOUR_CHANNEL_NAME = localStorage.getItem("channel_name");
  //   try {
  //     const response = await fetch(
  //       "http://16.16.91.234:3003/api/generate_agrora_token",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           user_id: YOUR_USER_ID,
  //           channel_id: YOUR_CHANNEL_ID,
  //           channel_name: YOUR_CHANNEL_NAME,
  //           video_name: videoname,
  //           thumbnail_image: "YOUR_THUMBNAIL_IMAGE",
  //         }),
  //       }
  //     );

  //     const data = await response.json();
  //     setAgoraToken(data);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  const generateAgoraToken = async () => {
    const YOUR_USER_ID = localStorage.getItem("_id");
    const YOUR_CHANNEL_ID = localStorage.getItem("channel_id");
    const YOUR_CHANNEL_NAME = localStorage.getItem("channel_name");
    
    if (!videoname) {
      setOutput("Please enter Video Name.");
      return;
    }
    try {
      const response = await fetch(
        "http://16.16.91.234:3003/api/generate_agrora_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          
          body: JSON.stringify({
            user_id: YOUR_USER_ID,
            channel_id: YOUR_CHANNEL_ID,
            channel_name: YOUR_CHANNEL_NAME,
            video_name: videoname,
            thumbnail_image: "YOUR_THUMBNAIL_IMAGE",
          }),
        }
      );
      
      const data = await response.json();
      setAgoraToken(data);
      //console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };







  const deletelive = () => {
    const idddd = localStorage.getItem('_id');
    const chanidd = localStorage.getItem('channel_id');
    
    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      channel_id: chanidd,
      token:agoraToken?.token,
    });

    axios
      .post('http://16.16.91.234:3003/api/delete_live_video', data, options)
      .then((res) => {
       //console.log("delte response sdsdsadas",res)
      })
      .catch((err) => {
        console.error(err);
      });
  };





  function joinChannel(role) {
    if (!videoname) {
      setOutput("Please enter Video Name.");
      return;
    }
    const YOUR_CHANNEL_NAME = localStorage.getItem("channel_name");
    const option = {
      appID: "537ee9fcc8f24c33b4b823896c9db588",
      channel: YOUR_CHANNEL_NAME,
      uid: null,
      token: agoraToken?.token,
      key: "",
      secret: "",
    };
  
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
  
    rtc.client.init(option.appID, function () {
      console.log("init success");
  
      rtc.client.join(
        option.token ? option.token : null,
        option.channel,
        option.uid ? +option.uid : null,
        function (uid) {
          console.log(
            "join channel: " + option.channel + " success, uid: " + uid
          );
          rtc.params.uid = uid;
  
          if (role === "host") {
            rtc.client.setClientRole("host");
  
            rtc.localStream = AgoraRTC.createStream({
              streamID: rtc.params.uid,
              audio: true,
              video: true,
              screen: false,
            });
  
            rtc.localStream.init(
              function () {
                console.log("init local stream success");
                rtc.localStream.play("local_stream");
                rtc.client.publish(rtc.localStream, function (err) {
                  console.log("publish failed");
                  console.error(err);
                });
              },
              function (err) {
                console.error("init local stream failed ", err);
              }
            );
  
            rtc.client.on("connection-state-change", function (evt) {
              console.log("audience", evt);
            });
          }
  
          if (role === "audience") {
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
          }
        },
        function (err) {
          console.error("client join failed", err);
        }
      );
    });
  }
  

  function leaveEventHost(params) {
    rtc.client.unpublish(rtc.localStream, function (err) {
      console.log("publish failed");
      console.error(err);
    });
    rtc.client.leave(function (ev) {
      console.log(ev);
    });
  }

  function leaveEventAudience(params) {
    rtc.client.leave(
      function () {
        console.log("client leaves channel");
      },
      function (err) {
        console.log("client leave failed ", err);
      }
    );
  }

  return (
    <div>
    {/* {/ <Sidebar/> /} */}
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
              {output && <font style={{ color: "blue" }}>{output}</font>}
                <div>
                   {/*<b>{JSON.stringify(agoraToken)}</b>
  {" "}*/}
  <input type="text" value={videoname} onChange={(e) => setVideoname(e.target.value)} placeholder="Video Name" />
  <button onClick={() => {joinChannel("host"); generateAgoraToken();}}>Go Live</button>
  {/* {/ <button onClick={() => joinChannel("audience")}>Join Channel as Audience</button> /} */}
  {/* {/ <button onClick={() => leaveEventHost("host")}>Leave</button> /} */}
  {/* {/ <button onClick={() => leaveEventAudience("audience")}>Leave Event Audience</button> /} */}
  <button onClick={deletelive}>Leave</button>
                  <div
                    id="local_stream"
                    className="local_stream"
                    style={{ width: "300px", height: "400px" }}
                  ></div>
                  <div
                    id="remote_video_"
                    style={{ width: "300px", height: "400px" }}
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

export default Appp;
