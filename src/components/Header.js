import SearchResult from "./SearchResult";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Header() {
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://16.16.91.234:3003/api/search?term=${searchTerm}`
      );
      //console.log("Responsesdsd data:", response.data);

      setSearchResults(response.data.data);
    } catch (error) {
      console.error("Error searching:", error.response.data);
    }
  };

  const filteredResults = searchResults.filter((result) =>
    result.video_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const imageurl = localStorage.getItem("imageurl");

  useEffect(() => {
    getHomeData2();
  }, []);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      _id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/view_profile",
        data,
        options
      );
      setLists([response.data.data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getHomeData3();
  }, []);

  const getHomeData3 = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/notification_count",
        data,
        options
      );
      setCount(response.data);
      //console.log("count", response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const userId = localStorage.getItem("_id");
  const location = useLocation();
  const isProtectedPage = [
    // "/cart",
    // "/wishlist",
    // "/addcart",
    // "/myaccount",
    // "/addresslist",
    // "/checkout",
    // "/transactions",
    // "/profile",
    // "/referral",
    // "/setting",
    // "/myaccount2",
    // "/working",
    // "/forgotpassword",
  ].includes(location.pathname);

  const removeToken = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("confirm_password");
    localStorage.removeItem("gender");
    localStorage.removeItem("fcmm");
    //localStorage.removeItem("phone");
    localStorage.removeItem("role");
    //localStorage.removeItem("info");
    //localStorage.removeItem("pro_id");
    localStorage.removeItem("userId");
    //localStorage.removeItem("item_id");
    //localStorage.removeItem("sub_id");
    //localStorage.removeItem("productCount");
    //localStorage.removeItem("productcount");
    //localStorage.removeItem("userId");
    //localStorage.removeItem("shipingid");
    //localStorage.removeItem("wishCount");
    //localStorage.removeItem("wishCount");
    //localStorage.removeItem("productType");
  };

  if (!userId && isProtectedPage) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {userId ? (
        <nav
          className="navbar navbar-expand navbar-light bg-dark static-top osahan-nav sticky-top"
          style={{ zIndex: "1" }}
        >
          &nbsp;&nbsp;
          <Link className="navbar-brand mr-1" to="/">
            <img
              style={{ backgroundColor: "", height: "59px", width: "163px" }}
              className="img-fluid"
              alt=""
              src="img/logo.png"
            />
          </Link>
          <form
            style={{ paddingTop: "" }}
            className=" d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search"
          >
            <div className="input-group">
            <Link to='/searchdata'>
                            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="form-control"
              />
</Link>
              <div className="input-group-append">
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>

            {filteredResults.length > 0 && (
              <div className="dropdown" style={{ background: "gray" }}>
                {filteredResults.map((result) => (
                  <div className="text-left" key={result._id}>
                    <Link
                      onClick={() => {
                        localStorage.setItem("videoiid", result._id);
                        localStorage.setItem("useridd", result.user_id);
                        localStorage.setItem("channelid", result.channel_id);
                        localStorage.setItem(
                          "categorytpee",
                          result.category_type
                        );
                      }}
                      className="dropdown-item"
                      style={{ width: "100%" }}
                      to="/video_page"
                    >
                      {result.video_name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </form>
          <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-plus-circle fa-fw" />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <Link className="dropdown-item" to="/appp">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Go Live
                </Link>
                <Link className="dropdown-item" to="/upload_Video">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Upload a
                  video
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/uploadmusic">
                  <i className="fas fa-fw fa-star " /> &nbsp; Upload a Music
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />

                <span className="badge badge-danger">
                  {count?.video_count}+
                </span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <Link className="dropdown-item" to="/notification">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Notification
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                  action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/report">
                  <i className="fas fa-fw fa-star " /> &nbsp; Something else
                  here
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
              <Link
                className="nav-link dropdown-toggle user-dropdown-link"
                to="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {lists && lists.length > 0 ? (
                  lists.map((list) => (
                    <React.Fragment key={list?._id}>
                      {list &&
                      list.profile_image &&
                      list.profile_image.filename ? (
                        <img
                          alt="Avatar"
                          src={
                            "http://16.16.91.234:3003/uploads/" +
                            list.profile_image.filename
                          }
                        />
                      ) : (
                        <img alt="Avatar" src="img/logo.png" />
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <p>
                    
                    <img alt="Avatar" src={imageurl} />
                  </p>
                )}
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <Link className="dropdown-item" to="/myaccount">
                  <i className="fas fa-fw fa-user-circle" /> &nbsp; My Account
                </Link>

                <Link className="dropdown-item" to="/setting">
                  <i className="fas fa-fw fa-cog" /> &nbsp; Settings
                </Link>
                <div className="dropdown-divider" />
                <Link
                  onClick={removeToken}
                  className="dropdown-item"
                  to="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand navbar-light bg-dark static-top osahan-nav sticky-top"
          style={{ zIndex: "1" }}
        >
          &nbsp;&nbsp;
          <Link className="navbar-brand mr-1" to="/">
            <img
              style={{ background: "", height: "59px", width: "163px" }}
              className="img-fluid"
              alt=""
              src="img/logo.png"
            />
          </Link>
          <form
            style={{ paddingTop: "" }}
            className="d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search"
          >
            <div className="input-group">
              <Link to='/searchdata'>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="form-control"
              />
</Link>
              <div className="input-group-append">
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>

            {filteredResults.length > 0 && (
              <div className="dropdown" style={{ background: "gray" }}>
                {filteredResults.map((result) => (
                  <div className="text-left" key={result._id}>
                    <Link
                      onClick={() => {
                        localStorage.setItem("videoiid", result._id);
                        localStorage.setItem("useridd", result.user_id);
                        localStorage.setItem("channelid", result.channel_id);
                        localStorage.setItem(
                          "categorytpee",
                          result.category_type
                        );
                      }}
                      className="dropdown-item"
                      style={{ width: "100px" }}
                      to="/video_page"
                    >
                      {result.video_name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </form>
          <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-plus-circle fa-fw" />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <Link className="dropdown-item" to="/appp">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Go Live
                </Link>
                <Link className="dropdown-item" to="/upload_Video">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Upload a
                  video
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/uploadmusic">
                  <i className="fas fa-fw fa-star " /> &nbsp; Upload a Music
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
                <span className="badge badge-danger">0+</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <Link className="dropdown-item" to="/notification">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Notification
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                  action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/report">
                  <i className="fas fa-fw fa-star " /> &nbsp; Something else
                  here
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
              <Link
                className="nav-link dropdown-toggle user-dropdown-link"
                to="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img alt="Avatar" src="img/logo.png" />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <Link className="dropdown-item" to="/myaccount">
                  <i className="fas fa-fw fa-user-circle" /> &nbsp; My Account
                </Link>

                <Link className="dropdown-item" to="/setting">
                  <i className="fas fa-fw fa-cog" /> &nbsp; Settings
                </Link>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Login
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
