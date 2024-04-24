import React from "react";
import Header from "../../common/Header/Header";
import ScrollDownArrow from "../../common/ScrollDownArrow";
import "../../welcome-page/ClimateResiliance.css";

const Climate1 = () => {
  return (
    <>
      <Header
        logoSrc="/assets/beckn_lg.svg"
        headingLine1="An FMCG company delivers flood-resilient"
        headingLine2="farming advisory to its contract farmers"
        logoLinkTo="/climateresilience"
      />
      <div className="climate-container">
        <div className="desktop-wrapper">
          <div className="desktop">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src="https://dragon-foods-bap.becknprotocol.io/"
                allowFullScreen
                width="100%"
                height="100%"
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
        <div className="iframe-text">Prototype Powered by Beckn</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "70px",
          }}
        >
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />
          <h3 className="sub-heading">
            View the Use-case Demo for Dragon Foods
          </h3>
        </div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/936080061?h=440346b17d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              width: "100%",
              height: "700px",
            }}
            title="Video_2"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "70px" }}
        >
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />
          <h3 className="sub-heading">Behind the Scenes</h3>
        </div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/935671577?h=195e848275&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              width: "100%",
              height: "700px",
            }}
            title="Video 2_BTS"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <ScrollDownArrow />
    </>
  );
};

export default Climate1;
