

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { CiCircleAlert } from "react-icons/ci";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import firebase from "firebase/compat/app"; // Update the import statement
import "firebase/compat/firestore"; // Update the import statement
import axios from "axios";






const Notification = () => {
 
  const [getcommt, setgetcomment] = useState([]);

 

  useEffect(() => {
    gethistory();
  }, []);

  const gethistory = async () => {
    const idddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    try {
      const res = await axios.post(
        "http://16.16.91.234:3003/api/notification_list",
        data,
        options
      );
      setgetcomment(res.data.data);
      //console.log("firebasee", res.data.data);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
            <h6>Notification</h6>
              <div className="row">
                {getcommt && getcommt.length > 0 ? (
                  getcommt.map((list) => (
                    <div className="col-md-4" key={list._id}>
                      <div className="main-title">
                        {/* <h6>Notification</h6> */}
                      </div>

                      {/* <div class="alert alert-success"> */}
                      <div class="">
                        <span>
                          {/* <TbSquareRoundedArrowRight
                            style={{ color: "green", fontSize: "20px" }}
                          /> */}
                           {list.channel_data[0] &&
                            list.channel_data[0]?.image[0] &&
                            list.channel_data[0].image[0]?.filename && ( 
                              <img style={{height:'200px', width:'300px'}}
                                className="img-fluid"
                                src={`http://16.16.91.234:3003/uploads/${list.channel_data[0].image[0].filename}`}
                                alt=""
                              />
                            )} 
                        </span>{" "}
                        
                        
                        <strong>User Name! </strong>
                        {list.channel_data &&
                          list.channel_data[0]?.channel_name}
                          
                      </div>
                      <br/>
                      {/* <div class="alert alert-warning">
                      <span>
                        <CiCircleAlert
                          style={{ color: 'orange', fontSize: '20px' }}
                        />
                      </span>{' '}
                      <strong>Alert! Massage </strong>today 10:00
                    </div> */}
                      {/* <div class="alert alert-danger">
                      <span>
                        <RxCross1 style={{ color: 'red', fontSize: '20px' }} />
                      </span>
                      <strong>Error! </strong>massag today 10:00
                    </div> */}
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
};

export default Notification;
