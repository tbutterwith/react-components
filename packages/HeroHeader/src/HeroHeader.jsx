import React from "react";
import styled from "styled-components";

const font =
  "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif;";

const Header = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 10rem;
  min-height: 5rem;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  color: ${(props) => props.color || "yellow"};
`;

const Title = styled.h1`
  font-family: ${font}
  margin: 0;
  font-weight: bold;
  font-size: 3rem;
`;

const Subtitle = styled.h2`
  font-family: ${font}
  margin: 0;
  font-weight: bold;
  font-size: 1.5rem;
`;

const CenteredText = styled.div`
  text-align: center;
`;

const HeroHeader = ({ img, title, subtitle, color }) => (
  <Header image={img} color={color}>
    <CenteredText>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CenteredText>
  </Header>
);

export default HeroHeader;
