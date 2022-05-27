import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || "http://host.docker.internal:4000/api";

const getEmployeesAPI = async (query) => {
  return axios.get("/employees?" + query);
};

const getEmployeeAPI = async (employee) => axios.get(`/employees/${employee}`);

const updateEmployeeAPI = async (employee) => {
  console.log(employee._id, "***id");
  axios.put(`/employees/${employee._id}`, employee);
};

const deleteEmployeeAPI = async (employee) =>
  axios.delete(`/employees/${employee._id}`);

const addEmployeeAPI = async (employee) => axios.post(`/employees/`, employee);

export {
  addEmployeeAPI,
  getEmployeesAPI,
  getEmployeeAPI,
  updateEmployeeAPI,
  deleteEmployeeAPI,
};
