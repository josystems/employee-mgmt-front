import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto auto
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default function Empty({ message = "No Data Avaliable" }) {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="gray"
        class="bi bi-info-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
      <p style={{ color: "gray", padding: 20 }}>{message}</p>
    </Container>
  );
}
