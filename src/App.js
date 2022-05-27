import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import Avater from "./components/Avater";
import EmployeeItem from "./components/EmployeeItem";
import Modal from "./components/Modal";
import { useState } from "react";
import EmployeeContainer from "./containers/EmployeeContainer";
import EmployeeDeleteModal from "./components/DeleteEmployeeModal";
import CreateEmployeeModal from "./components/CreateEmployeeModal";
import EmployeeDetailModal from "./components/EmployeeDetailModal";

function App() {
  const [isOpen, showModal] = useState(false);

  const handleModal = (show) => {
    showModal(!isOpen);
  };
  return (
    <div className="App">
      <AppBar title="Employee Management" />
      <EmployeeContainer />
      {/* <CreateEmployeeModal
        show={isOpen}
        closeModal={handleModal}
        employee={{ _id: "21212", name: "Abebe" }}
      /> */}
    </div>
  );
}

export default App;
