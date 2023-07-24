import Header from './Header'
import Sidebar from './Sidebar'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function History_Page() {
  const [getcommt, setgetcomment] = useState([]);

  useEffect(() => {
    gethistory();
  }, []);

  const gethistory = async () => {
    const idddd = localStorage.getItem('_id');

    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    try {
      const res = await axios.post('http://16.16.91.234:3003/api/get_history', data, options);
      setgetcomment(res.data.data);
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  const removeCartitem = (item) => {
    const idddd = localStorage.getItem('_id');
    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      video_id: item,
    });

    axios
      .post('http://16.16.91.234:3003/api/delete_history', data, options)
      .then((res) => {
        gethistory();
      })
      .catch((err) => {
        console.error(err);
      });
  };





  return (
    <>
<Header/>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid">
            <h2>History </h2>
            <div className="video-block section-padding">
              <div className="row" style={{marginLeft:'0px', marginRight:'0px'}}> 
               
                {getcommt && getcommt.length > 0 ? (
  getcommt.map((list) => (
    <div
      className="col-lg-6 col-sm-6 mb-3"
      style={{ paddingLeft: 10, paddingRight: 0 }}
      key={list._id} 
    >
      <div className="row m-0">
        <div className="col-lg-6 video-card">
        <button
                                style={{ borderRadius: "15px" }}
                                className="fas fa-times-circle btn "
                                onClick={() =>
                                  removeCartitem(list.video_id)
                                }
                              ></button>
          <div
            className="mt-2 video-card-image"
            style={{ height: "134px", borderRadius: 15 }}
          >
            
            <Link className="play-icon" to="/video_page"  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.data[0].category_type);
                              }}>
              <i className="fas fa-play-circle" />
            </Link>
            <Link to="/video_page"  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.data[0].category_type);
                              }}>
              {list.data && list.data[0]?.video && list.data[0].video[1]?.filename && (
                <img
                  className="img-fluid"
                  src={`http://16.16.91.234:3003/uploads/${list.data[0].video[1].filename}`}
                  alt=""
                />
              )}
            </Link>
          </div>
        </div>

        <div
          className="col-sm-4 video-card-body"
          style={{ backgroundColor: "white" }}
        >
          <div className="video-title">
            <Link to="/video_page"  onClick={() => {
                                localStorage.setItem("videoiid", list.video_id);
                                localStorage.setItem("useridd", list.user_id);
                                localStorage.setItem(
                                  "channelid",
                                  list.channel_id
                                );
                                localStorage.setItem("categorytpee", list.data[0].category_type);
                              }}>
              {list.data && list.data[0]?.description}
            </Link>
          </div>
          <div
            className="single-video-author mb-3 pr-5 mr-3"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            {/* <p>ML Record </p> */}
            <p>{list.data && list.data[0]?.video_views}  views</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default History_Page;
