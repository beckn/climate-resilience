import { Link } from "react-router-dom";
import Title from "../common/title";
import Card from "../common/Cards/card";
import { useNavigate } from "react-router-dom";
import "./selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";
import Header from "../common/Header/Header";
import FloatingButton from "../common/FloatingButtons/FloatingButton";

const SelectExperience = () => {
  const navigate = useNavigate();

  const handleNevigate = (id: any) => {
    console.log("RECEIVED ID", id);
    localStorage.setItem("name", id);
    localStorage.setItem("prev", "selectexperience");

    console.log("RECEIVED name",localStorage.getItem("name") );
    console.log("PREV Page",localStorage.getItem("prev") );


    navigate("/progress",{state:{ 'isFloating':false}});
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header
          logoSrc="/assets/beckn_lg.svg"
          headingLine1="Climate Resilience Data Highways"
          headingLine2=""
          subDescription=""
          logoLinkTo="/"
        />

        <div className="welcome-Screen-container">
          <div className="child-container">
            <div className="animates fadeIns fives home-card-container">
              <ul className="card-sub-containers">
                <li onClick={() => handleNevigate("ClimateResilience")}>
                  <div className="card-with-image">
                    <img
                      className="first-image-card"
                      src="/assets/climate_resilience.svg"
                      alt={"BecknLogoIcon"}
                    />
                    <p className="card-title-image">
                      <span className="font-color">
                        Enhancing resilience to climate-induced disasters
                      </span>
                    </p>
                  </div>
                </li>
                <div>
                  <li onClick={() => handleNevigate("ForestConservation")}>
                    <div className="card-with-image">
                      <img
                        className="first-image-card"
                        src="/assets/forest_conservation.svg"
                        alt={"BecknLogoIcon"}
                      />
                      <p className="card-title-image">
                        <span className="font-color">
                          Tackling climate change through forest conservation
                        </span>
                      </p>
                    </div>
                  </li>
                  {/* <span className="iframe-text">Coming Soon!</span> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
    </>
  );
};

export default SelectExperience;
