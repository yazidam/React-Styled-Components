import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Sidebar.Styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        {/* <SidebarWrapper> */}
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="discover">
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to="services">
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to="signup">
            Sign Up
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
        {/* </SidebarWrapper> */}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
