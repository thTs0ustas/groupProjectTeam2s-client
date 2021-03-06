import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import Form from "./Form";
import Menu from "./Menu";
import Description from "./Description";

export default function Footer() {
  return (
    <StyledFooter>
      <h2>Contact Us</h2>
      <Form />
      <Menu />
      <Description />
    </StyledFooter>
  );
}
