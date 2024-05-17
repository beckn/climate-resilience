import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import ScrollDownArrow from "../../common/ScrollDownArrow";
import Header from "../../common/Header/Header";

const ClimateResilience: React.FC = () => {
  const navigate = useNavigate();

  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    navigate("/progress");
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header 
        logoSrc='/assets/beckn_lg.svg'
        headingLine1='Climate Resilience Data Highways for'
        headingLine2 = 'Disaster Resilience'
        subDescription = 'A decentralized network for secure access to reliable data'
        logoLinkTo="/select-experience"
        />

        <div className="welcome-Screen-container">
          <div className="child-container">
            <div className="animates fadeIns fives home-card-container">
              <ul className="card-sub-containers">
                <li onClick={() => handleNevigate("CLIMATE1")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/FMCG.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        An FMCG company delivers flood-resilience farming
                        advisory to its contract farmers{" "}
                      </span>
                    </p>
                  </div>
                </li>
                <li onClick={() => handleNevigate("CLIMATE2")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/Climate_Resilience.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        A climate services startup delivers flood predictions
                        for early warnings
                      </span>
                    </p>
                  </div>
                </li>
                <li onClick={() => handleNevigate("CLIMATE3")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/humanitarian_aid.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        A humanitarian aid organization plans for anticipatory
                        aid{" "}
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{ display: "flex", alignItems: "center" , marginTop: '70px' , marginBottom: '20px' , margin: '1rem'}}>
              <img
                src="/assets/imaginefuture.svg"
                alt="icon"
                style={{ marginRight: "10px" }}
              />{" "}
              <h3 className="sub-heading">
                Imagine Disaster Resilience with Climate Resilience Data
                Highways
              </h3>
            </div>
            <div style={{ padding: "56.25% 0 0 0", position: "relative", marginBottom: '3rem' , margin: '1rem'}}>
              <iframe
                src="https://player.vimeo.com/video/936514306?h=89570ff4e0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" , border: '1px solid #8ac2eb', borderRadius: '5px' , marginBottom: '1rem'}}
                title="video_1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <ScrollDownArrow />
    </>
  );
};

export default ClimateResilience;
