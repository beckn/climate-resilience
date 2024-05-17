import React, { useEffect } from "react";
import "./FloatingButton.css";
import { useLocation, useNavigate, useHistory } from "react-router-dom";

const FloatingButton: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isSelectExperiencePage = location.pathname === "/select-experience";
    const isClimateResilienceOrForestConservationPage =
      location.pathname === "/climateresilience" ||
      location.pathname === "/forestconservation";
    const isClimatePage = location.pathname.includes("/climate");
    const isForestPage = location.pathname.includes("/forest");
    const isAnyRestrictedPage =
      isSelectExperiencePage || isClimateResilienceOrForestConservationPage;
  
    useEffect(() => {
      const handleBackButton = (event: any) => {
        if (isAnyRestrictedPage && event.keyCode === 8) {
          event.preventDefault(); // Prevent browser default action
          navigate(-1); // Go back in history using React Router
        }
      };
  
      window.addEventListener("keydown", handleBackButton);
  
      return () => {
        window.removeEventListener("keydown", handleBackButton);
      };
    }, [navigate, isAnyRestrictedPage]);
  
    const handleNevigate = (id: any) => {
      localStorage.setItem("name", id);
      navigate("/progress");
    };
  
    const handleGoBack = () => {
      navigate(-1); // Go back in history using React Router
    };

  return (
    <div className="floating-button-container">
      <div className="floating-button">
        {isAnyRestrictedPage ? (
          <div className="icon-group icon-group-restricted">
            {location.pathname === "/select-experience" ? (
              <div className="icon-item" onClick={handleGoBack}>
                <img
                  style={{ height: "1.8rem" }}
                  src="/assets/curvedArrow.svg"
                  alt="Icon 2"
                />
              </div>
            ) : (
              <>
                <div
                  className="icon-item"
                  onClick={() => handleNevigate("selectexperience")}
                >
                  <img src="/assets/home.svg" alt="Icon 1" />
                </div>
                <div className="icon-item" onClick={handleGoBack}>
                  <img
                    style={{ height: "1.8rem" }}
                    src="/assets/curvedArrow.svg"
                    alt="Icon 2"
                  />
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            {isClimatePage && (
              <div className="image-group">
                <div
                  className={`image-item ${
                    location.pathname === "/climate1" ? "active" : ""
                  }`}
                  onClick={() => handleNevigate("CLIMATE1")}
                  title="DragonFoods"
                >
                  <img src="/assets/FMCG.svg" alt="Climate Image 1" />
                </div>
                <div
                  className={`image-item ${
                    location.pathname === "/climate2" ? "active" : ""
                  }`}
                  onClick={() => handleNevigate("CLIMATE2")}
                  title="SkyAnalytics"
                >
                  <img
                    src="/assets/Climate_Resilience.svg"
                    alt="Climate Image 2"
                  />
                </div>
                <div
                  className={`image-item ${
                    location.pathname === "/climate3" ? "active" : ""
                  }`}
                  onClick={() => handleNevigate("CLIMATE3")}
                  title="HarmoniAid"
                >
                  <img
                    src="/assets/humanitarian_aid.svg"
                    alt="Climate Image 3"
                  />
                </div>
              </div>
            )}

            {isForestPage && (
              <div className="image-group">
                <div
                  className={`image-item ${
                    location.pathname === "/forest1" ? "active" : ""
                  }`}
                  onClick={() => handleNevigate("FOREST1")}
                  title="State Forest Department"
                >
                  <img src="/assets/forest_health.svg" alt="Forest Image 1" />
                </div>
                <div
                  className={`image-item ${
                    location.pathname === "/forest2" ? "active" : ""
                  }`}
                  onClick={() => handleNevigate("FOREST2")}
                  title="Envirogrowth"
                >
                  <img
                    src="/assets/forestrestoration.svg"
                    alt="Forest Image 2"
                  />
                </div>
                <div
                  className={`image-item ${
                    location.pathname === "/forest3" ? "active" : ""
                  }`}
                  onClick={() => handleNevigate("FOREST3")}
                  title="Earth Support Initiative"
                >
                  <img
                    src="/assets/leadingfoodandbeveragecompany.svg"
                    alt="Forest Image 3"
                  />
                </div>
              </div>
            )}

            <div className="icon-group">
              <div
                className="icon-item"
                onClick={() => handleNevigate("selectexperience")}
              >
                <img src="/assets/home.svg" alt="Icon 1" />
              </div>
              <div className="icon-item" onClick={handleGoBack}>
                <img
                  style={{ height: "1.8rem" }}
                  src="/assets/curvedArrow.svg"
                  alt="Icon 2"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingButton;
