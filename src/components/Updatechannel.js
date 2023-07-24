import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import '../setting.css';
import axios from 'axios';

const UpdateChannel = () => {
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [description, setDescription] = useState('');
  const [channelname, setChannelname] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const chanelid = localStorage.getItem('channel_id');
  const chanelname = localStorage.getItem('channel_name');
  const chanelnameimage = localStorage.getItem('channel_image');
  const chanelnamecover = localStorage.getItem('channel_cover');

  //console.log("sadsadccccc", chanelid, chanelname, chanelnameimage, chanelnamecover);

  const handleProfileImageSelect = (event) => {
    setSelectedProfileImage(event.target.files[0]);
  };

  const handleCoverImageSelect = (event) => {
    setSelectedCoverImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('profile_image', selectedProfileImage || chanelnameimage);
    formData.append('cover_image', selectedCoverImage || chanelnamecover);
    formData.append('channel_name', channelname || chanelname);
    formData.append('handle', description);
    formData.append('_id', chanelid);

    try {
      const response = await axios.post('http://16.16.91.234:3003/api/update_channel_user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-Api-Key': 'your-api-key',
        },
       
      });
      //console.log("asdformdata",response)
      //console.log("data",formData)

      setSelectedProfileImage(null);
      setSelectedCoverImage(null);
      setChannelname('');
      setDescription('');
      setError('');
      setSuccessMessage('Channel updated successfully!');
    } catch (error) {
      console.error('Error updating channel:', error.response.data);
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
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h6> About</h6>
                  </div>

                  <div className="card-footer">
                    <font style={{ color: 'blue' }}>
                      <p>{successMessage}</p>
                    </font>
                    <font style={{ color: 'blue' }}>{error && <p>{error}</p>}</font>
                    <form onSubmit={handleFormSubmit}>
                      <div>
                        <label htmlFor="profile-picture-input">
                          <span className="btn btn-info">Profile picture</span>
                          <input
                            id="profile-picture-input"
                            type="file"
                            onChange={handleProfileImageSelect}
                            style={{ display: 'none' }}
                          />
                        </label>
                        <br />
                        <br />
                        <label htmlFor="cover-image-input">
                          <span className="btn btn-info">Cover Photo</span>
                          <input
                            id="cover-image-input"
                            type="file"
                            onChange={handleCoverImageSelect}
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="channelname">Channel Name:</label>
                        <input
                          type="text"
                          placeholder={chanelname}
                          value={channelname}
                          onChange={(e) => setChannelname(e.target.value)}
                          className="form-control profile1"
                          id="channelname"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="form-control profile2"
                          id="description"
                        />
                      </div>
                      <br />
                      <button className="btn btn-info" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UpdateChannel;


























{/* <div className="modal" id="myModalreport">
<div className="modal-dialog">
  <div className="modal-content" style={{ bottom: "-220px" }}>
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">
        ×
      </button>
    </div>

    <div className="card-body">
      <font style={{ color: "blue" }}>
        {successMessage && <p>{successMessage}</p>}
      </font>
      <Link to="#">
        <div className="p-2">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label for="vehicle1"> I have a bike</label><br/>
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
<label for="vehicle2"> I have a car</label><br/>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
<label for="vehicle3"> I have a boat</label><br/>
          <span
            onClick={reportvideo}
            className="ml-4 text-dark"
            style={{ fontSize: "15px" }}
          >
            
          </span>
        </div>
      </Link>
      <button>sumbit</button>
    </div>
  </div>
</div>
</div>


















import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import '../setting.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Updatechannel = () => {

const [selectedProfileImage, setSelectedProfileImage] = useState(null);
const [selectedCoverImage, setSelectedCoverImage] = useState(null);
const [description, setDescription] = useState("");
const [channelname, setChannelname] = useState("");
const [lists, setLists] = useState([]);
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');


const chanelid = localStorage.getItem("channel_id");


const formData = new FormData();
formData.append("profile_image", selectedProfileImage);
formData.append("cover_image", selectedCoverImage);

formData.append("channel_name", channelname);
formData.append("handle", description);
formData.append("_id", chanelid);

try {
const response = await axios.post(
"http://16.16.91.234:3003/api/update_channel",
formData,

{
headers: {
  "Content-Type": "multipart/form-data",
  "X-Api-Key": "your-api-key", 
},
}
);


setSelectedProfileImage(null);
setSelectedCoverImage(null);
setChannelname('');
setDescription('');
setError('');
setSuccessMessage('Channel create successfully!');
} catch (error) {
console.error("Error creating channel:", error.response.data);
}
};  



return (
<>

    <Sidebar />
    <div id="wrapper">
        <div id="content-wrapper">
            <div className="container-fluid">
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                                <h6> About</h6>
                            </div>
                            <div className="modal" id="myModal">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-header">
    <h4 className="modal-title">Create Your Channel</h4>
    <button type="button" className="close" data-dismiss="modal">
      ×
    </button>
  </div>

  <div className="card-footer">
  <font style={{color:'blue'}}><p >{successMessage}</p></font>
  <font style={{color:'blue'}}>{error && <p >{error}</p>}</font>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="profile-picture-input">
          <span className="btn btn-info">Profile picture</span>
          <input
            id="profile-picture-input"
            type="file"
            onChange={handleProfileImageSelect}
            style={{ display: "none" }}
          />
        </label>
        <br />
        <br />
        <label htmlFor="cover-image-input">
          <span className="btn btn-info">Cover Photo</span>
          <input
            id="cover-image-input"
            type="file"
            onChange={handleCoverImageSelect}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="channelname">Channel Name:</label>
        <input
          type="text" placeholder={localStorage.getItem("channel_name")}
          value={channelname}
          onChange={(e) => setChannelname(e.target.value)}
          className="form-control profile1"
          id="channelname"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control profile2"
          id="description"
        />
      </div>
      <br />
      <button className="btn btn-info" type="submit">
        Submit
      </button>
    </form>

    <div></div>
  </div>
</div>
</div>
</div>

                        </div>



                    </div>

                </div>
            </div>

        </div>
    </div>


    
</>
)
}

export default Updatechannel



















import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import '../setting.css';
import axios from 'axios';

const UpdateChannel = () => {
const [selectedProfileImage, setSelectedProfileImage] = useState(null);
const [selectedCoverImage, setSelectedCoverImage] = useState(null);
const [description, setDescription] = useState('');
const [channelname, setChannelname] = useState('');
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const chanelid = localStorage.getItem('channel_id');
const chanelname = localStorage.getItem('channel_name');
const chanelnameimage = localStorage.getItem('channel_image');
const chanelnamecover = localStorage.getItem('channel_cover');

console.log("sadsadccccc",chanelid,chanelname,chanelnameimage,chanelnamecover)





const handleProfileImageSelect = (event) => {
setSelectedProfileImage(event.target.files[0]);
};

const handleCoverImageSelect = (event) => {
setSelectedCoverImage(event.target.files[0]);
};

const handleFormSubmit = async (event) => {
event.preventDefault();

const formData = new FormData();
formData.append("profile_image", selectedProfileImage);
formData.append("cover_image", selectedCoverImage);

formData.append("channel_name", channelname);
formData.append("handle", description);
formData.append('_id', chanelid);
try {
const response = await axios.post('http://16.16.91.234:3003/api/update_channel', formData, {
headers: {
  'Content-Type': 'multipart/form-data',
  'X-Api-Key': 'your-api-key',
},
});

setSelectedProfileImage(null);
setSelectedCoverImage(null);
setChannelname('');
setDescription('');
setError('');
setSuccessMessage('Channel updated successfully!');
} catch (error) {
console.error('Error updating channel:', error.response.data);
}
};

return (
<>
<Sidebar />
<div id="wrapper">
<div id="content-wrapper">
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h6> About</h6>
          </div>

          <div className="card-footer">
            <font style={{ color: 'blue' }}>
              <p>{successMessage}</p>
            </font>
            <font style={{ color: 'blue' }}>{error && <p>{error}</p>}</font>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="profile-picture-input">
                  <span className="btn btn-info">Profile picture</span>
                  <input
                    id="profile-picture-input"
                    type="file"
                    onChange={handleProfileImageSelect}
                    style={{ display: 'none' }}
                  />
                </label>
                <br />
                <br />
                <label htmlFor="cover-image-input">
                  <span className="btn btn-info">Cover Photo</span>
                  <input
                    id="cover-image-input"
                    type="file"
                    onChange={handleCoverImageSelect}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="channelname">Channel Name:</label>
                <input
                  type="text"
                  placeholder={localStorage.getItem('channel_name')}
                  value={channelname}
                  onChange={(e) => setChannelname(e.target.value)}
                  className="form-control profile1"
                  id="channelname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control profile2"
                  id="description"
                />
              </div>
              <br />
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</>
);
};

export default UpdateChannel;


















import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import '../setting.css';
import axios from 'axios';

const UpdateChannel = () => {
const [selectedProfileImage, setSelectedProfileImage] = useState(null);
const [selectedCoverImage, setSelectedCoverImage] = useState(null);
const [description, setDescription] = useState('');
const [channelname, setChannelname] = useState('');
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const chanelid = localStorage.getItem('channel_id');
const chanelname = localStorage.getItem('channel_name');
const chanelnameimage = localStorage.getItem('channel_image');
const chanelnamecover = localStorage.getItem('channel_cover');

console.log("sadsadccccc",chanelid,chanelname,chanelnameimage,chanelnamecover)





const handleProfileImageSelect = (event) => {
setSelectedProfileImage(event.target.files[0]);
};

const handleCoverImageSelect = (event) => {
setSelectedCoverImage(event.target.files[0]);
};

const handleFormSubmit = async (event) => {
event.preventDefault();

const formData = new FormData();
formData.append("profile_image", selectedProfileImage);
formData.append("cover_image", selectedCoverImage);

formData.append("channel_name", channelname);
formData.append("handle", description);
formData.append('_id', chanelid);
try {
const response = await axios.post('http://16.16.91.234:3003/api/update_channel', formData, {
headers: {
  'Content-Type': 'multipart/form-data',
  'X-Api-Key': 'your-api-key',
},
});

setSelectedProfileImage(null);
setSelectedCoverImage(null);
setChannelname('');
setDescription('');
setError('');
setSuccessMessage('Channel updated successfully!');
} catch (error) {
console.error('Error updating channel:', error.response.data);
}
};

return (
<>
<Sidebar />
<div id="wrapper">
<div id="content-wrapper">
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h6> About</h6>
          </div>

          <div className="card-footer">
            <font style={{ color: 'blue' }}>
              <p>{successMessage}</p>
            </font>
            <font style={{ color: 'blue' }}>{error && <p>{error}</p>}</font>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="profile-picture-input">
                  <span className="btn btn-info">Profile picture</span>
                  <input
                    id="profile-picture-input"
                    type="file"
                    onChange={handleProfileImageSelect}
                    style={{ display: 'none' }}
                  />
                </label>
                <br />
                <br />
                <label htmlFor="cover-image-input">
                  <span className="btn btn-info">Cover Photo</span>
                  <input
                    id="cover-image-input"
                    type="file"
                    onChange={handleCoverImageSelect}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="channelname">Channel Name:</label>
                <input
                  type="text"
                  placeholder={localStorage.getItem('channel_name')}
                  value={channelname}
                  onChange={(e) => setChannelname(e.target.value)}
                  className="form-control profile1"
                  id="channelname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control profile2"
                  id="description"
                />
              </div>
              <br />
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</>
);
};

export default UpdateChannel;

















import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import '../setting.css';
import axios from 'axios';

const UpdateChannel = () => {
const [selectedProfileImage, setSelectedProfileImage] = useState(null);
const [selectedCoverImage, setSelectedCoverImage] = useState(null);
const [description, setDescription] = useState('');
const [channelname, setChannelname] = useState('');
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const chanelid = localStorage.getItem('channel_id');
const chanelname = localStorage.getItem('channel_name');
const chanelnameimage = localStorage.getItem('channel_image');
const chanelnamecover = localStorage.getItem('channel_cover');

console.log("sadsadccccc", chanelid, chanelname, chanelnameimage, chanelnamecover);

const handleProfileImageSelect = (event) => {
setSelectedProfileImage(event.target.files[0]);
};

const handleCoverImageSelect = (event) => {
setSelectedCoverImage(event.target.files[0]);
};

const handleFormSubmit = async (event) => {
event.preventDefault();

const formData = new FormData();
formData.append('profile_image', selectedProfileImage || chanelnameimage);
formData.append('cover_image', selectedCoverImage || chanelnamecover);
formData.append('channel_name', channelname || chanelname);
formData.append('handle', description);
formData.append('_id', chanelid);

try {
const response = await axios.post('http://16.16.91.234:3003/api/update_channel', formData, {
headers: {
  'Content-Type': 'multipart/form-data',
  'X-Api-Key': 'your-api-key',
},
});

setSelectedProfileImage(null);
setSelectedCoverImage(null);
setChannelname('');
setDescription('');
setError('');
setSuccessMessage('Channel updated successfully!');
} catch (error) {
console.error('Error updating channel:', error.response.data);
}
};

return (
<>
<Sidebar />
<div id="wrapper">
<div id="content-wrapper">
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h6> About</h6>
          </div>

          <div className="card-footer">
            <font style={{ color: 'blue' }}>
              <p>{successMessage}</p>
            </font>
            <font style={{ color: 'blue' }}>{error && <p>{error}</p>}</font>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="profile-picture-input">
                  <span className="btn btn-info">Profile picture</span>
                  <input
                    id="profile-picture-input"
                    type="file"
                    onChange={handleProfileImageSelect}
                    style={{ display: 'none' }}
                  />
                </label>
                <br />
                <br />
                <label htmlFor="cover-image-input">
                  <span className="btn btn-info">Cover Photo</span>
                  <input
                    id="cover-image-input"
                    type="file"
                    onChange={handleCoverImageSelect}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="channelname">Channel Name:</label>
                <input
                  type="text"
                  placeholder={chanelname}
                  value={channelname}
                  onChange={(e) => setChannelname(e.target.value)}
                  className="form-control profile1"
                  id="channelname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control profile2"
                  id="description"
                />
              </div>
              <br />
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</>
);
};

export default UpdateChannel; */}
