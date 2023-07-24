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






  let [resourceId, setresourceId] = useState()
  let [sid, setsid] = useState()




  const [videoname, setVideoname] = useState('');
  const [output, setOutput] = useState("");
  const [joined, setJoined] = useState(false);
  const channelRef = useRef("");
  const remoteRef = useRef("");
  const leaveRef = useRef("");
  const [agoraToken, setAgoraToken] = useState("");
  //console.log("sadasd", agoraToken);













  const [successMessage, setSuccessMessage] = useState('');

  const iddd = localStorage.getItem("_id");
  const channelnamee = localStorage.getItem("channel_name");
  const channeliid = localStorage.getItem("channel_id");

  const [inputvalue, setinputvalue] = useState({
    user_id: iddd,
    channel_id: channeliid,
    channel_name: channelnamee,
    video_name: "",
    desc: "",
    category_type: "",
    video_url: "",
  });



  const [videofiles, setvideofiles] = useState({
    user_video: "",
  });

  const [thumb, setthumb] = useState({
    video_thumbnail: "",
  });

  const [error, setError] = useState('');

  const inputHandel = (event) => {
    setinputvalue({ ...inputvalue, [event.target.name]: event.target.value });
  };

  const thumbFileHandel = (event) => {
    setthumb({ ...thumb, [event.target.name]: event.target.files[0] });
  };

  const videoFileHandel = (event) => {
    setvideofiles({
      ...videofiles,
      [event.target.name]: event.target.files[0],
    });
  };

  const formHandel = (event) => {
    event.preventDefault();

    // Validation checks
    if (!inputvalue.video_name.trim()) {
      setError('Please enter a video name.');
      return;
    }

    if (!inputvalue.channel_id) {
      setError('Please create channel First go to setting .');
      return;
    }

    if (!inputvalue.category_type) {
      setError('Please select a category.');
      return;
    }
    if (!inputvalue.category_type) {
      setError('Please select a category.');
      return;
    }


    if (!inputvalue.video_url) {
      setError('Please Enter a Video Url.');
      return;
    }

    if (!thumb.video_thumbnail) {
      setError('Please select a thumbnail image.');
      return;
    }
    if (!videofiles.user_video) {
      setError('Please select a video file.');
      return;
    }

    const formdata = new FormData();

    formdata.append("user_id", inputvalue.user_id);
    formdata.append("channel_id", inputvalue.channel_id);
    formdata.append("channel_name", inputvalue.channel_name);
    formdata.append("video_name", inputvalue.video_name);
    formdata.append("category_type", inputvalue.Live);
    formdata.append("desc", inputvalue.desc);
    formdata.append("user_video", videofiles.user_video);
    formdata.append("video_thumbnail", thumb.video_thumbnail);
    formdata.append("video_url", inputvalue.video_url);



    axios.post(`http://16.16.91.234:3003/api/upload_video`, formdata)
      .then((res) => {
        setSuccessMessage('Video uploaded successfully!');
      });
  };









  const rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };



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
      token: agoraToken?.token,
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
    console.log(agoraToken?.token, "token")
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





  let aquire = () => {
    ///aquire api
    let aquiredata = {
      "uid": "12345",
      "channel": "testvideo"
    }

    axios.post(`http://16.16.91.234:3003/api/acquire`, aquiredata).then((res) => {
      console.log(res, "auqireapi")
      setresourceId(res.data.resourceId)
    })
  }

  let start = () => {
    console.log(agoraToken?.token)
    //start api
    let startdata = {
      "uid": "12345",
      "channel": "testvideo",
      "resourceId": resourceId,
      "token": agoraToken?.token
    }
    axios.post(`http://16.16.91.234:3003/api/start`, startdata).then((res) => {
      console.log(res, "startapi")
      setsid(res.data.sid)
    })
  }

  let query = () => {
    //qurey api
    let qureydata = {
      "resourceId": resourceId,
      "sid": sid
    }
    console.log(qureydata)
    axios.post(`http://16.16.91.234:3003/api/query`, qureydata).then((res) => {
      console.log(res, "aueryapi")
    })

  }

  let stops = () => {
    let stopsdata = {
      "resourceId": resourceId,
      "sid": sid
    }
   
    axios.post(`http://16.16.91.234:3003/api/stop`, stopsdata).then((res) => {
      console.log(res, "stopsapi")
    })

  }

  return (
    <div>
      {/* <Sidebar/> */}
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
                  <button onClick={() => { joinChannel("host"); generateAgoraToken(); }}>Go Live</button>
                  <button onClick={aquire}>aquire</button>
                  <button onClick={start}>start</button>
                  <button onClick={query}>query</button>
                  <button onClick={stops}>stops</button>
                  {/* <button onClick={() => joinChannel("audience")}>Join Channel as Audience</button> */}
                  {/* <button onClick={() => leaveEventHost("host")}>Leave</button> */}
                  {/* <button onClick={() => leaveEventAudience("audience")}>Leave Event Audience</button> */}
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
