import Header from "../../common/Header/Header";
import ScrollDownArrow from "../../common/ScrollDownArrow";
import '../../welcome-page/ClimateResiliance.css';

const Climate3 = () => {
  return (
    <>
      <Header
        logoSrc="/assets/beckn_lg.svg"
        headingLine1="A humanitarian aid organization plans for"
        headingLine2="anticipatory aid"
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
        <div style={{ display: "flex", alignItems: "center", marginTop: '3rem'}}>
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />{" "}
          <h3 className="sub-heading">imagine the climate resilience data highways</h3>
        </div>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/cDP7e1BWgek"
          title="Why Does Google Kill So Many Products? | Untangled"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ borderRadius: "5px", marginTop: "20px" }}
        ></iframe>
        <div style={{ display: "flex", alignItems: "center", marginTop: '3rem'}}>
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />{" "}
          <h3 className="sub-heading">Behind the Scenes</h3>
        </div>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/qPFJR__nhiU"
          title="Why Does Google Kill So Many Products? | Untangled"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ borderRadius: "5px", marginTop: "20px" }}
        ></iframe>
      </div>
      <ScrollDownArrow/>
    </>
  );
};

export default Climate3;
