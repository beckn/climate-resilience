import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import "./progressBar.css";
import { useLocation } from "react-router-dom";
import Header from "../common/Header/Header";

const ProgressBar = () => {
  const [data, setdata] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const n = 100;
  const delay = 30;

  useEffect(() => {
    function loopWithDelay(i: any) {
      setdata(i);
      if (i < n) {
        setTimeout(() => {
          loopWithDelay(i + 1);
        }, delay);
      }
    }
    loopWithDelay(1);
  }, [n]);

  useEffect(() => {
    if (data === 100) {
      console.log("PROGRESS CALLED");
      console.log("PREV", localStorage.getItem("prev"));
      console.log("CURRENT", localStorage.getItem("name"));

      console.log("location", location);

      console.log("location state", location.state);

      const floatingButton =
        location.state && location.state?.from != "backwards"
          ? location.state?.from
          : null;

      const storedPage =
        location.state?.from === "backwards"
          ? localStorage.getItem("prev")
          : localStorage.getItem("name");
      console.log("StoredPage", storedPage);
      console.log("progress-Bar: ", data);
      console.log("********************************************");

      switch (floatingButton || storedPage) {
        case "welcomescreen":
          navigate("/");
          break;
        case "selectexperience":
          navigate("/select-experience");
          break;
        case "cities":
          navigate("/cities");
          break;
        case "cityOfLight":
          navigate("/cityOfLight");
          break;
        case "cityOfAfrica":
          navigate("/cityOfAfrica");
          break;
        case "OSC":
          navigate("/OSC");
          break;
        case "DSEP":
          navigate("/DSEP");
          break;
        case "UEI":
          navigate("/UEI");
          break;
        case "dsepUnified":
          navigate("/dsep-unified");
          break;
        case "DSNP":
          navigate("/DSNP");
          break;
        case "DHP":
          navigate("/DHP");
          break;
        case "industry4.0":
          navigate("/industry4.0");
          break;
        case "ODR":
          navigate("/ODR");
          break;
        case "ONDC":
          navigate("/ONDC");
          break;
        case "ClimateResilience":
          navigate("/climateresilience");
          break;
        case "ForestConservation":
          navigate("/forestconservation");
          break;
        case "CLIMATE1":
          navigate("/climate1");

          break;
        case "CLIMATE2":
          navigate("/climate2");
          break;
        case "CLIMATE3":
          navigate("/climate3");
          break;
        case "FOREST1":
          navigate("/forest1");
          break;
        case "FOREST2":
          navigate("/forest2");
          break;
        case "FOREST3":
          navigate("/forest3");
          break;
        case "regenerativeAgriculture":
          navigate("/regenerativeAgriculture");
          break;
        case "regenUEI":
          navigate("/regenUEI");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, [data, navigate]);

  return (
    <div>
      <Header
        logoSrc="/assets/beckn_lg.svg"
        headingLine1=""
        headingLine2=""
        subDescription=""
        logoLinkTo=""
      />
      <div className="main-containers">
        <div>
          <div className="headingOfHeader">
            <p className="headingOfProgress">
              awesome.. setting up your experience
            </p>
          </div>
          <div className="progress-bar">
            <Progress
              className="progress"
              percent={data}
              status="active"
              strokeColor={{ from: "#108ee9", to: "#523F62" }}
            />
          </div>
          <div className="data-set-container">
            <p className="data-set">Loading...({data}%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
