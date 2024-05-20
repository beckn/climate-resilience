import FloatingButton from "../../common/FloatingButtons/FloatingButton";
import Header from "../../common/Header/Header";
import ScrollDownArrow from "../../common/ScrollDownArrow";
import "../../welcome-page/ClimateResiliance.css";

const Climate3 = () => {
  return (
    <>
      <Header
        logoSrc="/assets/beckn_lg.svg"
        headingLine1="A humanitarian aid organization plans for"
        headingLine2="anticipatory aid"
        subDescription=""
        logoLinkTo="/climateresilience"
      />
      <div className="climate-container">
        <div className="desktop-wrapper">
          <div className="desktop">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src="https://harmoni-aid-bap.becknprotocol.io/"
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
          <h3 className="sub-heading">View the Use-case Demo for HarmoniAid</h3>
        </div>
        <div className="responsive-iframe-container">
          <iframe
            src="https://player.vimeo.com/video/936148929?h=05badaafe8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              width: "100%",
              height: "700px",
            }}
            title="Video_4"
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
        <div className="responsive-iframe-container">
          <iframe
            src="https://player.vimeo.com/video/935672602?h=c8a7ce7fb7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              width: "100%",
              height: "700px",
            }}
            title="Video_4_BTS"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <FloatingButton/>
      <ScrollDownArrow />
    </>
  );
};

export default Climate3;
