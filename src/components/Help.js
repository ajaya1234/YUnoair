import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import '../setting.css';

const Help = () => {

  const [output, setOutput] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const storedEmail = localStorage.getItem('email');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const _id = localStorage.getItem('_id');

    if (email !== storedEmail) {
      setOutput(
        'Invalid Email-id. Please enter your current Email-id.'
      );
      return;
    }

    axios
      .post('http://16.16.91.234:3003/api/help', {
        user_id: _id,
       
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
      })
      .then((response) => {
        if (response.data.result === 'true') {
          setOutput('Request Submitted successfully.');
        } else {
          setOutput(response.data.message);
        }


        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log(err);
      });
  };




    return (
        <div>
<Header/>
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title"></div>
                  <div
                    className="row justify-content-center"
                    
                  >
                    <div className="col-sm-8 bg-light shadow p-4">
                      <div>
                        <img 
                          width={"100%"}
                          height={'243px'}
                          src='img/help.jpg'
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <h6
                          className="p-3 shadow"
                          style={{ borderRadius: "10px" }}
                        >
                          Submit A Request
                        </h6>
                      </div>
                      <font style={{"color":"blue"}}>{output && <div>{output}</div>}</font>
                      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Enter your first name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      className="form-control"
      placeholder="Enter your last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <input
      type="email"
      className="form-control"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="form-group">
    <textarea
      className="form-control"
      placeholder="Enter your message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

                      {/* {output && <div>{output}</div>}  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Help