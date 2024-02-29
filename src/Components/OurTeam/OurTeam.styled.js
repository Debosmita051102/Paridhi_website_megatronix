import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  
  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: #161623;
    overflow: hidden;
    position: relative;
  }

  body::before {
    content: "";
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, magenta, orange);
    border-radius: 50%;
    position: absolute;
    top: -100px;
    left: 300px;
    z-index: -1;
  }

  body::after {
    content: "";
    width: 350px;
    height: 350px;
    background: linear-gradient(45deg, blue, cyan);
    border-radius: 50%;
    position: absolute;
    bottom: -100px;
    right: 250px;
    z-index: -1;
  }
`;

export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Card = styled.div`
  width: 250px;
  height: auto;
  padding: 20px;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(4px);
  box-shadow: 0 0 20px #000;
  border-top: 2px solid rgba(255, 255, 255, 0.25);
  border-left: 2px solid rgba(255, 255, 255, 0.2);
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 25px;
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: justify;
  font-size: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  font-size: 22px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  color: #fff;
  transition: 0.4s all;
  cursor: pointer;
`;
