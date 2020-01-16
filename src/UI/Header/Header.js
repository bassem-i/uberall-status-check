import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  img {
    width: 100%;
    height: 100vh;
  }

  .splash-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
  }

  .splash-content {
    top: 50%;
    left: 50%;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -50%);

    h1,
    h2 {
      color: white;
      margin: 0;
    }

    h1 {
      font-size: 7rem;
    }
    h2 {
      font-size: 5rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img src={require("../../assets/images/header.jpg")} alt="header"></img>
      <div className="splash-overlay"></div>
      <div className="splash-content">
        <h1>Uberall</h1>
        <h2>Status Check</h2>
      </div>
    </HeaderStyled>
  );
};

export default Header;
