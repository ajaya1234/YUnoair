import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Upload_Video() {
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
    formdata.append("category_type", inputvalue.category_type);
    formdata.append("desc", inputvalue.desc);
    formdata.append("user_video", videofiles.user_video);
    formdata.append("video_thumbnail", thumb.video_thumbnail);
    formdata.append("video_url", inputvalue.video_url);

    

    axios.post(`http://16.16.91.234:3003/api/upload_video`, formdata)
      .then((res) => {
        
        setSuccessMessage('Video uploaded successfully!');
      });
  };

  return (
    <>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid upload-details">
          
          
            <form method="post" onSubmit={formHandel}>
              
              <hr />
              <font style={{color:'blue'}}>{error && <p >{error}</p>}</font>
              <font style={{color:'blue'}}>{successMessage && <p>{successMessage}</p>}</font>
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="">Description</label>
                          <textarea
                            placeholder="Description"
                            rows={3}
                            name="desc"
                            onChange={inputHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e3">Video Name</label>
                          <input
                            type="text"
                            placeholder="Tag"
                            name="video_name"
                            onChange={inputHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e5">Category Type</label>
                          <select
                            name="category_type"
                            onChange={inputHandel}
                            className="form-control"
                          >
                            <option value="">Select Category</option>
                            <option value="bollywood">Bollywood</option>
                            <option value="hollywood">Hollywood</option>
                            <option value="tollywood">Tollywood</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e5">Video URL</label>
                          <input
                            type="text"
                            placeholder="Title"
                            name="video_url"
                            onChange={inputHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                     
                    </div>
                    <div className="row ">
                      <div className="col-lg-12">
                        <div className="main-title" />
                      </div>
                    </div>
                    <div className="row category-checkbox">
                      <div className="col-lg-6 col-xs-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="e1">Select Video</label>
                          <input
                            type="file"
                            placeholder="Choose File Here..."
                            name="user_video"
                            onChange={videoFileHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e1">Thumbnail</label>
                          <input
                            type="file"
                            placeholder="Choose File Here..."
                            name="video_thumbnail"
                            onChange={thumbFileHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="osahan-area text-center mt-3">
                    
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ background: "#000080", borderRadius: 4 }}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upload_Video;
