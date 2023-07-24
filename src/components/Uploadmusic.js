import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';

const Uploadmusic = () => {
  const [music_title, setMusic_title] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const useriddd = localStorage.getItem("_id");
  const channeliddd = localStorage.getItem("channel_id");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!music_title.trim()) {
      setMessage('Please enter a music title.');
      return;
    }

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('user_id', useriddd);
      formData.append('channel_id', channeliddd);
      formData.append('music_title', music_title);
      formData.append('file', file);

      const response = await axios.post('http://16.16.91.234:3003/api/upload_music', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      //console.log("response", response);
      setMessage('Music uploaded successfully!');
    } catch (error) {
      setMessage('Error uploading music. Please try again.');
    }
  };

  return (
    <div>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid upload-details">
            <div className="col-lg-12">
              <div className="main-title">
                <h6>Music Upload</h6>
              </div>
            </div>
            <p style={{ color: 'blue' }}>{message}</p>
            <form onSubmit={handleSubmit}>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Music Title"
                  value={music_title}
                  onChange={(e) => setMusic_title(e.target.value)}
                />
                <br />
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <br />
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ background: "#000080", borderRadius: 4 }}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadmusic;
