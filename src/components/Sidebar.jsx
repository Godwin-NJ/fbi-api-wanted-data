import React, { Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarNav } from "../Local-Data/SideBarNav";
const Sidebar = () => {
  return (
    <Fragment>
      <SideBarWrapper>
        <CloseIcon onClick={() => console.log("close btn")}>
          <AiOutlineClose />
        </CloseIcon>
        <nav>
          <ul style={{ marginTop: "40px" }}>
            {SideBarNav.map((nav) => {
              const { id, Name } = nav;
              return (
                <li key={id}>
                  <ListStyle>{Name}</ListStyle>
                </li>
              );
            })}
          </ul>
        </nav>
      </SideBarWrapper>
    </Fragment>
  );
};

const SideBarWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  height: 100%;
  width: 300px;
  background-color: #3a3a86;
  /* overflow: auto; */
  overflow-y: auto;
`;

const CloseIcon = styled.i`
  font-size: 40px;
  font-weight: 200;
  position: absolute;
  right: 10px;
  cursor: pointer;
  /* margin-bottom: 10px; */
`;

const ListStyle = styled.span`
  margin: 15px 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-transform: uppercase;
  /* border: 1px solid white; */
  &:hover {
    color: #3a3a86;
    background-color: white;
    cursor: pointer;
  }
`;

export default Sidebar;
