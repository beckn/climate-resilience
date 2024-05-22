import React from "react";
import Header from "../../common/Header/Header";
import "../../welcome-page/ClimateResiliance.css";
import ScrollDownArrow from "../../common/ScrollDownArrow";
import FloatingButton from "../../common/FloatingButtons/FloatingButton";

const Forest2 = () => {
  return (
    <>
      <Header
        logoSrc="/assets/beckn_lg.svg"
        headingLine1="A project implementing agency creates forest restoration"
        headingLine2="strategy"
        subDescription=""
        logoLinkTo="/forestconservation"
      />
      <div className="climate-container">
        <div className="desktop-wrapper">
          <div className="desktop">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src="https://envirogrowth-foundation-bap.becknprotocol.io/"
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
          style={{ display: "flex", alignItems: "center", marginTop: "70px" }}
        >
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />
          <h3 className="sub-heading">
            imagine the climate resilience data highways
          </h3>
        </div>
        <div className="responsive-iframe-container">
          <iframe
            src="https://player.vimeo.com/video/946368932?h=fd0754fa31&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Forest Conservation_Story 2"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>

          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
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
        <div className="responsive-iframe-container">
          <iframe
            src="https://player.vimeo.com/video/944004714?h=a973799e98&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="BTS_2_Envirogrowth Foundation"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
      <FloatingButton />
      <ScrollDownArrow />
    </>
  );
};

export default Forest2;
