
import React from "react";
import {MobileDiv, SignIn, SignUp, Description} from './MobileButtonsEl'
import SocialMobile from "./SocialMedia";


const ButtonsDiv = (props) => {
    return (
        <MobileDiv isOpen={props.isOpen}>	
            <SocialMobile />
            <Description>Located At Neapoli 31, 11471</Description>
            <Description>211-800-80-800</Description>
			<SignIn>Login</SignIn>
			<SignUp>Join Us</SignUp>
		</MobileDiv>
    )
}

export default ButtonsDiv;