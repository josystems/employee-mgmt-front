import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AppBarContainer = styled.div`
  background: #f07705;
  user-select: none;
  display: flex;
  flex-direction: row;
  padding: 0px 6%;
  box-shadow: 0px 0px 6px #000a;
  justify-content: space-between;
`;
const Title = styled.p`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export default function AppBar({ title }) {
  return (
    <AppBarContainer>
      <Title>{title}</Title>
    </AppBarContainer>
  );
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};
