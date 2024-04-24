import React from "react";
import Header from "../../common/Header/Header";
import "../../welcome-page/ClimateResiliance.css";
import ScrollDownArrow from "../../common/ScrollDownArrow";

const Climate2 = () => {
  return (
    <>
      <Header
        logoSrc="/assets/beckn_lg.svg"
        headingLine1="A climate services startup delivers flood"
        headingLine2="predictions for early warnings"
        logoLinkTo="/climateresilience"
      />
      <div className="climate-container">
        <div className="desktop-wrapper">
          <div className="desktop">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src="https://sky-analytics-bap.becknprotocol.io/"
                frameBorder="0"
                allowFullScreen
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
        <div className="iframe-text">Prototype Powered by Beckn</div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "3rem" }}
        >
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />{" "}
          <h3 className="sub-heading">
            View the Use-case Demo for Sky Analytics
          </h3>
        </div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/936039112?h=68a46cf247&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              width: "100%",
              height: "700px",
            }}
            title="Video 3"
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
          />{" "}
          <h3 className="sub-heading">Behind the Scenes</h3>
        </div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/936038352?h=ef276b1d80&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              width: "100%",
              height: "700px",
            }}
            title="Video3_BTS"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <ScrollDownArrow />
    </>
  );
};

export default Climate2;
