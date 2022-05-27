import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  background: #0004;
`;
const ModalContainer = styled.div`
  border-radius: 4px;
  min-width: 25%;
  box-shadow: 0 0 4px #4448;
  padding: 10px 20px;
  background: white;
  z-index: 2;
`;

export default function Modal({ show, closeModal, children }) {
  if (show)
    return (
      <OverlayContainer onClick={() => closeModal(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          {React.cloneElement(children)}
        </ModalContainer>
      </OverlayContainer>
    );
}
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
