import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteEmployeeModal from "../../components/DeleteEmployeeModal";
import EmployeeItem from "../../components/EmployeeItem";
import { connect } from "react-redux";
import * as actionType from "../../redux/actions";
import CreateEmployeeModal from "../../components/CreateEmployeeModal";
import EmployeeDetailModal from "../../components/EmployeeDetailModal";
import Button from "../../components/Button";
import Empty from "../../components/Empty";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function EmployeeContainer(props) {
  const { actions } = props;
  console.log(":props,", props);
  const [editModal, showEditModal] = useState({ show: false });
  const [addModal, showAddModal] = useState({ show: false });
  const [deleteModal, showDeleteModal] = useState({ show: false });
  const [detailModal, showDetailModal] = useState({ show: false });

  useEffect(() => {
    actions.getEmployees();
  }, []);

  useEffect(() => {
    console.log("useEffect");
    actions.getEmployees();
  }, [props.updated, props.deleted, props.created]);

  const onEdit = (employee) => {
    showEditModal({ show: true, employee });
  };
  const onAdd = () => {
    showAddModal({ show: true });
  };
  const onDelete = (employee) => {
    showDeleteModal({ show: true, employee });
  };
  const onDetail = (employee) => {
    showDetailModal({ show: true, employee });
  };
  const handleDelete = (employee) => {
    actions.deleteEmployee(employee);
    showDeleteModal({ show: false });
  };
  const handleUpdate = (employee) => {
    actions.updateEmployee(employee);
    showEditModal({ show: false });
  };
  const handleAdd = (employee) => {
    actions.addEmployee(employee);
    showAddModal({ show: false });
  };

  return (
    <Container>
      {props?.employees?.length > 0 ? (
        props?.employees.map((employee) => (
          <EmployeeItem
            key={employee._id}
            employee={employee}
            onDelete={() => onDelete(employee)}
            onEdit={() => onEdit(employee)}
            onDetail={() => onDetail(employee)}
          />
        ))
      ) : (
        <Empty message="No Employee Data Available" />
      )}
      <Button primary onClick={onAdd} style={{ margin: "20px" }}>
        Add Employee
      </Button>
      <DeleteEmployeeModal
        show={deleteModal.show}
        closeModal={() => showDeleteModal({ ...deleteModal, show: false })}
        employee={deleteModal.employee}
        handleDelete={handleDelete}
      />
      <EmployeeDetailModal
        show={detailModal.show}
        closeModal={() => showDetailModal({ ...detailModal, show: false })}
        employee={detailModal.employee}
      />
      <CreateEmployeeModal
        show={editModal.show}
        closeModal={() => showEditModal({ ...editModal, show: false })}
        employee={editModal.employee}
        handleUpdate={handleUpdate}
      />
      <CreateEmployeeModal
        show={addModal.show}
        closeModal={() => showAddModal({ ...addModal, show: false })}
        employee={addModal.employee}
        handleCreate={handleAdd}
      />
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    employees: state.employeeReducer.employees,
    updated: state.employeeReducer.updated,
    created: state.employeeReducer.created,
    deleted: state.employeeReducer.deleted,
    error: state.employeeReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getEmployees: (query) => {
      dispatch(actionType.getEmployees(query));
    },
    getEmployee: (id) => {
      dispatch(actionType.getEmployee(id));
    },
    addEmployee: (payload) => {
      dispatch(actionType.addEmployee(payload));
    },
    deleteEmployee: (id) => {
      dispatch(actionType.deleteEmployee(id));
    },
    updateEmployee: (payload) => {
      dispatch(actionType.updateEmployee(payload));
    },
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
