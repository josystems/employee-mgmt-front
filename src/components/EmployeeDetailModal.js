import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import Button from "./Button";
import Avater from "./Avater";
import { getDDMMYYfromDateString } from "../utils";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Name = styled.p`
  text-size: 20px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #e329;
  align-text: center;
`;
const Text = styled.p`
  text-size: 14px;
  margin: 5px;
  font-weight: 300;
  color: gray;
`;

export default function EmployeeDetailModal({
  show,
  closeModal = {},
  employee,
}) {
  return (
    <Modal show={show} closeModal={closeModal}>
      <>
        <Header>
          <Avater name={employee?.name} size={200} />
          <Name>{employee?.name}</Name>
        </Header>
        <hr />
        <Body>
          <Text>Gender : {employee?.sex}</Text>
          <Text>Salary : {employee?.salary}</Text>
          <Text>
            Date of Birth :{" "}
            {employee ? getDDMMYYfromDateString(employee?.dob) : ""}
          </Text>
        </Body>
      </>
    </Modal>
  );
}
