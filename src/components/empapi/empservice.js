import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getall = () =>
  axios.get(`${BASE_URL}/getall`);

export const save = (employee) =>
  axios.post(`${BASE_URL}/save`, employee);

export const updateEmployee = (id, employee) =>
  axios.put(`${BASE_URL}/${id}`, employee);

export const deleteEmployee = (id) =>
  axios.delete(`${BASE_URL}/${id}`);