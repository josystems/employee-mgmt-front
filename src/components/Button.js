import React from "react";
import styled from "styled-components";

const Button = styled.button`
  text-size: 16px;
  border:none;
  padding:6px 12px;
  margin:5px;
  border-radius 4px;
  color: ${({ primary, danger }) => (primary || danger ? "white" : "#222")};
  background: ${({ primary, danger }) =>
    primary ? "#f07705" : danger ? "#e439" : "#ccc"};
  &:hover {
      background: ${({ primary, danger }) =>
        primary ? "#c05504" : danger ? "#c327" : "#999"};
    }
`;
export default Button;
