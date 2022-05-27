import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import Button from "./Button";
import { getDDMMYYfromDateString } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const Input = styled.input`
  padding: 6px 12px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #f07705;
  }
`;

const Title = styled.p`
  text-size: 18px;
  font-weight: 500;
  color: #e329;
  align-text: left;
`;

export default function CreateEmployeeModal({
  show,
  closeModal,
  handleUpdate,
  handleCreate,
  employee,
}) {
  const isUpdate = employee ? true : false;
  const [employeeInfo, setEmployeeInfo] = useState({});

  useEffect(() => {
    setEmployeeInfo(employee);
  }, [employee]);

  const handleOnChange = (key, value) => {
    console.log(employeeInfo);
    setEmployeeInfo({ ...employeeInfo, [key]: value });
  };
  return (
    <Modal show={show} closeModal={closeModal}>
      <Container>
        <Title>{isUpdate ? "Update Employee" : "Add New Employee"}</Title>
        <Input
          placeholder="Name"
          value={employeeInfo?.name}
          onChange={(e) => handleOnChange("name", e.target.value)}
        />
        <Input
          as="select"
          value={employeeInfo?.gender}
          onChange={(e) => handleOnChange("gender", e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Input>
        <Input
          type="date"
          value={
            employeeInfo?.dob ? getDDMMYYfromDateString(employeeInfo?.dob) : ""
          }
          onChange={(e) => handleOnChange("dob", e.target.value)}
        />
        <Input
          type="number"
          min="0"
          value={employeeInfo?.salary}
          placeholder="Salary"
          onChange={(e) => handleOnChange("salary", e.target.value)}
        />
        <ButtonContainer>
          <Button
            onClick={() => {
              closeModal();
            }}
          >
            {isUpdate ? "Cancel" : "Close"}
          </Button>
          <Button
            primary
            onClick={() =>
              isUpdate ? handleUpdate(employeeInfo) : handleCreate(employeeInfo)
            }
          >
            {isUpdate ? "Update" : "Save"}
          </Button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
}
