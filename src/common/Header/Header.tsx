import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Typography } from "antd";

interface HeaderProps {
  logoSrc: string;
  headingLine1: string;
  headingLine2: string;
  subDescription : string;
  logoLinkTo: string;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  headingLine1,
  headingLine2,
  subDescription,
  logoLinkTo,
}) => {
  return (
    <div className="header-container">
      <div className="header-left">
        {/* Add Link to the logo */}
        <Link to={logoLinkTo}>
          <img src={logoSrc} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="heading">
        <div className="heading">{headingLine1}</div>
        <div className="heading">{headingLine2}</div>
        <Typography.Paragraph
              style={{
                margin: "10px 0",
                textAlign: "center",
                color: "rgba(123, 123, 123, 1)",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {subDescription}
            </Typography.Paragraph>
      </div>
      <div className="header-right">
        <Link to={logoLinkTo}>
          <img src="/assets/jica.png" alt="Logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
