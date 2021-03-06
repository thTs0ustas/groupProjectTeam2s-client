import React from "react";
import { Switch, TicketPrices } from "../../components";

import { Header, Nav, NavDiv, SignInDiv, SignUpBar } from "../../theme";
import Footer from "../../components/footer/Footer";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";
import NavBar from "../../components/NavBar";

const TicketPricesLayout = ({ username }) => {
  return (
    <SignInDiv>
      <Header>
        <SignUpBar>
          <Switch />
          <div>
            <SignupBarPart username={username} />
          </div>
        </SignUpBar>

        <NavDiv>
          <Nav>
            <NavBar />
          </Nav>
        </NavDiv>
      </Header>
      <TicketPrices />
      <Footer />
    </SignInDiv>
  );
};

export { TicketPricesLayout };
