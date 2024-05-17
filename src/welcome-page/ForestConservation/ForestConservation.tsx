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
        headingLine1='Climate Resilience Data Highways'
        headingLine2 = 'for Forest Conservation'
        subDescription = 'A decentralized network for secure access to reliable data'
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/imaginefuture.svg"
                alt="icon"
                style={{ marginRight: "10px" }}
              />{" "}
              <h3 className="sub-heading ">Imagine the Future</h3>
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
          </div>
        </div>
      </div>
      <FloatingButton/>
      <ScrollDownArrow />
    </>
  );
};

export default ClimateResilience;
