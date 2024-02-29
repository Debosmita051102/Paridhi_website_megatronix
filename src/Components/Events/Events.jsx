// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import { Main, ImageBox, Title, SubText } from "../Events/Events.styled";
import VanillaTilt from "vanilla-tilt";
import styled from "styled-components";
const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Events = ({ ImageLink, TitleText, Description }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        gyroscope: false,
      });

      // Clean up function to remove event listeners when the component unmounts
      return () => {
        tiltRef.current.vanillaTilt.destroy();
      };
    }
  }, []);

  return (
    <>
      <StyledContainer>
        <Main ref={tiltRef}>
          <ImageBox $ImageLink={ImageLink}></ImageBox>
          <Title>{TitleText}</Title>
          <SubText>{Description}</SubText>
        </Main>
      </StyledContainer>
    </>
  );
};

export default Events;