import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { NavDropdownDiv } from "../homePage/styledComponents/styles";
import { SignInButton, SignUpButton } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import logoutAction from "./actions/logoutAction";

export const SignupBarPart = () => {
  const navigate = useNavigate();
  const { id, username, token, isMember, isAdmin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return !username || !id ? (
    <>
      <SignUpButton onClick={() => navigate("/signup")}>Be a Member</SignUpButton>
      <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
    </>
  ) : (
    <NavDropdownDiv title={username} id='nav-dropdown'>
      {isMember && (
        <>
          <NavDropdown.Item onClick={() => navigate(`/info/${username}`)} eventKey='4.1'>
            Info
          </NavDropdown.Item>

          {isAdmin && (
            <NavDropdown.Item onClick={() => navigate("/admin")} eventKey='4.1'>
              Admin
            </NavDropdown.Item>
          )}
          <NavDropdown.Divider />
        </>
      )}
      <NavDropdown.Item
        eventKey='4.2'
        onClick={() => {
          dispatch(logoutAction({ id, token }));

          navigate("/");
        }}
      >
        Sign Out
      </NavDropdown.Item>
    </NavDropdownDiv>
  );
};
