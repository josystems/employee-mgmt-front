import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import Button from "./Button";

const Message = styled.p`
  text-size: 16px;
  font-weight: 400;
  align-text: left;
`;
const Title = styled.p`
  text-size: 18px;
  font-weight: 500;
  color: #e329;
  align-text: left;
`;

export default function DeleteEmployeeModal({
  show,
  closeModal,
  handleDelete,
  employee,
}) {
  return (
    <Modal show={show} closeModal={closeModal}>
      <>
        <Title>Delete {employee?.name?.split(" ")[0]}</Title>
        <Message>Are you sure you want to delete this employee?</Message>
        <Button danger onClick={() => handleDelete(employee)}>
          Delete
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </>
    </Modal>
  );
}
