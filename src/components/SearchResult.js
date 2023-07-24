import React from 'react';

const SearchResult = ({ result }) => {
  const { video_name, channel_data } = result;

  return (
    <>

    <div id="wrapper">
             
                <div id="content-wrapper">
                    <div className="container-fluid">
                        <div className="video-block section-padding">
                            <div className="row">
                                
                                <div className="col-md-12">
                                  
                                    <div className="main-title">
                                      
                                      
      <p>{video_name}</p>
      </div>
      {channel_data.map((channel) => (
        <div >
          {channel.image &&
            channel.image.map((image) => (
              <div key={image.filename}>
                {image.data &&
                  image.data.channel_data &&
                  image.data.channel_data.image.map((img) => (
                    <img
                      key={img.filename}
                      style={{ height: '100px', width: '100px' }}
                      alt="Avatar"
                      src={"http://16.16.91.234:3003/uploads/" + img.filename}
                    />
                  ))}
              </div>
            ))}
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </>
    
  );
};

export default SearchResult;
