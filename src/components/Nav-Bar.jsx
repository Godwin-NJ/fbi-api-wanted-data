import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsEnvelope, BsTwitter } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

const NavBar = () => {
  const { openSideBar } = useGlobalContext();
  return (
    <Fragment>
      <NavigationWrapper>
        <IconWrapper onClick={() => openSideBar()}>
          <h5>
            <IconFont>More</IconFont>
          </h5>
          <i>
            <IconFont>
              {" "}
              <FaBars />
            </IconFont>
          </i>
        </IconWrapper>

        <NavTOBottom>
          <div>
            <IconFont>
              <h3>FBI</h3>
            </IconFont>
          </div>
          {/* </NavTOBottom>
        <NavTOBottom> */}
          <div>
            <IconPadding>
              {" "}
              <AiFillFacebook />
            </IconPadding>
            <IconPadding>
              {" "}
              <BsEnvelope />
            </IconPadding>
            <IconPadding>
              <BsTwitter />
            </IconPadding>
            <IconPadding>
              {" "}
              <ImYoutube2 />
            </IconPadding>
          </div>
        </NavTOBottom>
      </NavigationWrapper>
    </Fragment>
  );
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-end;
  padding: 5px;
  margin-bottom: 3px;
  position: absolute;
  left: 25px;
  border: 1px solid white;
  width: 15vw;
  height: 30px;
`;

const IconFont = styled.span`
  font-size: 20px;
  text-transform: uppercase;
`;
const IconPadding = styled.span`
  margin: 5px;
  font-size: 25px;
`;
const NavTOBottom = styled.div`
  position: absolute;
  /* bottom: 0; */
  /* margin-bottom: 3px; */
  /* right: 250px; */
  align-self: flex-end;
  display: flex;
  right: 50px;
  /* padding: 10px; */
  gap: 80px;
`;

const NavigationWrapper = styled.nav`
  color: white;
  background-color: black;
  width: 100vw;
  height: 65px;
  /* gap: 20px; */
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
  /* border: 3px solid red; */
`;

export default NavBar;
