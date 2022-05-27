import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { generateRandomColor, getAvaterLetter } from "../utils/index";

const AvaterLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  font-weight: bold;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
      color: black;
    `}
`;

function Avater({ src, name }, ...props) {
  const color = generateRandomColor();
  return (
    <>
      {src ? (
        <img
          style={{ borderRadius: "100%" }}
          src={src}
          width={props.size || "50px"}
          height="50px"
          alt={name}
          {...props}
        />
      ) : (
        <AvaterLetter color={color} {...props}>
          {getAvaterLetter(name)}
        </AvaterLetter>
      )}
    </>
  );
}

Avater.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
};
export default React.memo(Avater);
