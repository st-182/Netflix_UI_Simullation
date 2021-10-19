import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  position: relative;
  :after {
    content: ">";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -40%) rotate(90deg) scaleY(1.5);
  }
`;
const Newsletter = () => {
  return (
    <div className="text-white ">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input type="text" placeholder="Email Address" />
      <StyledButton className="bg-red-600 p-3 pr-5">Get Started</StyledButton>
    </div>
  );
};

export default Newsletter;
