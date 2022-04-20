import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleStyled>
      <h3>{title}</h3>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.color1};
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
  @media only screen and (min-width: 650px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default Title;
