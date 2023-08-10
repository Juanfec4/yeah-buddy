import axios from "axios";

const fetchAll = async (endpoint) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}`);
  return response;
};

const postObject = async (endpoint, object) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/${endpoint}`, object);
  return response;
};
const patchObject = async (endpoint, id, object) => {
  const response = await axios.patch(`${import.meta.env.VITE_API_URL}/${endpoint}/${id}`, object);
  return response;
};

const deleteObject = async (endpoint, id) => {
  const response = await axios.delete(`${import.meta.env.VITE_API_URL}/${endpoint}/${id}`);
  return response;
};

const fetchByID = async (endpoint, id) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}/${id}`);
  return response;
};

export default { fetchAll, postObject, deleteObject, patchObject, fetchByID };
