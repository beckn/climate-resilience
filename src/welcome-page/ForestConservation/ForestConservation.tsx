import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../welcome-page/selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";
import ScrollDownArrow from "../../common/ScrollDownArrow";
import Header from "../../common/Header/Header";
import FloatingButton from "../../common/FloatingButtons/FloatingButton";

const ClimateResilience: React.FC = () => {
  // <-- Corrected component declaration
  const navigate = useNavigate();

  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    localStorage.setItem("prev", "ForestConservation");
    navigate("/progress");
  };

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header
          logoSrc="/assets/beckn_lg.svg"
          headingLine1="Climate Resilience Data Highways"
          headingLine2="for Forest Conservation"
          subDescription="A decentralized network for secure access to reliable data"
          logoLinkTo="/select-experience"
        />
        <div className="welcome-Screen-container">
          <div className="child-container">
            <div className="animates fadeIns fives home-card-container">
              <ul className="card-sub-containers">
                <li onClick={() => handleNevigate("FOREST1")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/forest_health.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        a state forest department assesses forest health and
                        prioritizes areas for intervention
                      </span>
                    </p>
                  </div>
                </li>
                <li onClick={() => handleNevigate("FOREST2")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/forestrestoration.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        a project implementing agency creates forest restoration
                        strategy
                      </span>
                    </p>
                  </div>
                </li>
                <li onClick={() => handleNevigate("FOREST3")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/leadingfoodandbeveragecompany.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        An impact investor tracks performance of a restoration
                        project
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "70px",
                marginBottom: "20px",
                margin: "1rem",
              }}
            >
              <img
                src="/assets/imaginefuture.svg"
                alt="icon"
                style={{ marginRight: "10px" }}
              />
              <h3 className="sub-heading">Imagine the Future</h3>
            </div>
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                marginBottom: "3rem",
                margin: "1rem",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/944714344?h=52bf4b1299&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Context Setting Video_Forest Conservation"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "1px solid #8ac2eb",
                  borderRadius: "5px",
                  marginBottom: "1rem",
                }}
              ></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
      <ScrollDownArrow />
    </>
  );
};

export default ClimateResilience;
