import React, { useEffect, useState, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Player from "./player";
import SideBar from "./sideBAr";
import AboutZenaari from "./AboutZenaari";
import Series from "./Series";
import EventInfo from "./EventInfo";
import MainPage from "./MainPage";
import Footer from "./Footer";
import Follower from "./follower";

import "./zenaari.scss";

import { getData } from "../services/data-services";

const Zenaari = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [data]);

  return (
    <>
      <div className="page-wrapper">
        <Player />
        <SideBar />
        <section id="main-container">
          <Switch>
            <Route path="/zenaari/series/:id">
              <EventInfo />
              <Footer />
            </Route>
            <Route path="/zenaari/series">
              <Series data={data} />
              <Footer />
            </Route>
            <Route path="/zenaari/info">
              <AboutZenaari />
              <Footer />
            </Route>
            <Route path="/zenaari">
              <MainPage />
            </Route>
          </Switch>
        </section>
      </div>
      <Follower />
    </>
  );
};

export default Zenaari;
