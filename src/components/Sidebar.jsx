import React, { Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarNav } from "../Local-Data/SideBarNav";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../features/Navigation/sideNavSlice";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state) => state.sideNav.sidebar);
  return (
    <Fragment>
      <SideBarWrapper isSideBarOpen={isSideBarOpen}>
        <CloseIcon onClick={() => dispatch(closeSideBar())}>
          <AiOutlineClose />
        </CloseIcon>
        <nav>
          <ul style={{ marginTop: "40px" }}>
            {SideBarNav.map((nav) => {
              const { id, Name, path } = nav;
              return (
                <NavLink
                  className="linkColor"
                  to={`${path}`}
                  key={id}
                  onClick={() => dispatch(closeSideBar())}
                >
                  <ListStyle>{Name}</ListStyle>
                </NavLink>
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
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.isSideBarOpen ? "translate(0)" : "translate(-100%)"};
  visibility: ${(props) => (props.isSideBarOpen ? "visible" : "hidden")};
  /* transform: translate(-100%); */
  /* visibility: hidden; */

  .linkColor {
    text-decoration: none;
    color: #daebff;
  }
`;

const CloseIcon = styled.i`
  font-size: 40px;
  font-weight: 200;
  color: #ffd6d6;
  position: absolute;
  right: 10px;
  cursor: pointer;
  &:hover {
    color: #bd2f2f;
  }
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
