import { Header, Nav, NavDiv, SignUpBar } from "../../theme";

import React from "react";
import { CancelPayment, Switch } from "../../components";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";
import { SignupBarPart } from "../GlobalParts/SignupBarPart";

const CancelPaymentLayout = ({ username }) => (
  <>
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
    <CancelPayment message={"You canceled your payment!"} />
    <Footer />
  </>
);

export { CancelPaymentLayout };