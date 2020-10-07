import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <section id="side-bar">
      <div className="header">
        <p>
          <Link
            to="/zenaari/info"
            className="action-btn"
            data-id="zenaari-desc"
          >
            zenaari
          </Link>
          {/* <span className="action-btn" data-id="zenaari-desc"> */}
          experimental
        </p>
        <p>
          and electroacustic music
          <Link
            to="/zenaari/series"
            className="action-btn-series"
            data-id="series-list"
          >
            series
          </Link>
          {/* <span className="action-btn" data-id="series-list"></span> */}
        </p>
      </div>
      <div className="auth">
        <p className="login">login</p>
        <p className="username">username</p>
        <div className="btn-box">
          <span id="sound-btn" className="player-btn"></span>
          <span id="mute-btn" className="player-btn"></span>
        </div>
      </div>

      <div className="reg" style={{ display: "none" }}>
        <div className="input-field">
          <label htmlFor="name">username</label>
          <input type="text" id="name" placeholder="XXXXXXXXXXXXXXXXX" />
          <label htmlFor="pas">password</label>
          <input type="password" id="pas" placeholder="XXXXXXXXXXXXXXXXX" />
          <p className="pas-show">show</p>
          <p className="forgot-eml">forgot email ?</p>
          <p className="forgot-pas">forgot password ?</p>
        </div>
        <div className="input-field" style={{ display: "none" }}>
          <label htmlFor="set-name">username</label>
          <input type="text" id="set-name" placeholder="XXXXXXXXXXXXXXXXX" />
          <label htmlFor="set-email">email</label>
          <input type="email" id="set-email" placeholder="XXXXXXXXXXXXXXXXX" />
          <label htmlFor="set-pas1">password</label>
          <input
            type="password"
            id="set-pas1"
            placeholder="XXXXXXXXXXXXXXXXX"
          />
          <label htmlFor="set-pas2">confirm password</label>
          <input
            type="password"
            id="set-pas2"
            placeholder="XXXXXXXXXXXXXXXXX"
          />
          <label htmlFor="set-city">city</label>
          <input type="text" id="set-city" placeholder="XXXXXXXXXXXXXXXXX" />
          <label htmlFor="set-address">real address</label>
          <input type="text" id="set-address" placeholder="XXXXXXXXXXXXXXXXX" />
          <label htmlFor="set-date">date of birth</label>
          <input type="date" id="set-date" />
          <label htmlFor="set-fullname">full name</label>
          <input
            type="text"
            id="set-fullname"
            placeholder="XXXXXXXXXXXXXXXXX"
          />
          <label htmlFor="set-phone">phone</label>
          <input type="number" id="set-phone" placeholder="XXXXXXXXXXXXXXXXX" />
          <label htmlFor="set-link">facebook</label>
          <input type="url" id="set-link" placeholder="XXXXXXXXXXXXXXXXX" />
        </div>
        <div className="btn-field">
          <p className="terms action-btn" data-id="terms">
            terms and
            <br />
            conditions
          </p>
          <p className="accept action-btn" data-id="main-page">
            ok
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
