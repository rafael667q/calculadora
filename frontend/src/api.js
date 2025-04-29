import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const calcularCarga = async (method, x_values, y_values) => {
  const response = await axios.post(`${API_URL}/calcular/`, {
    method,
    x_values,
    y_values,
  });
  return response.data;
};