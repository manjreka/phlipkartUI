import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const apiCallGet = async (url) => {
  try {
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, option);
    const data = await response.json();
    if (response.ok) {
      return data.message;
    } else {
      toast.error(data.error);
    }
  } catch (err) {
    toast.error("Something went Wrong, Please try again later");
  }
};

const apiService = {
  getAll: async () => {
    const url = `${BASE_URL}/api/products/getProducts`;
    const responseData = await apiCallGet(url);
    return responseData;
  },
  getOne: async (id) => {
    const url = `${BASE_URL}/api/products/getProduct/${id}`;
    const responseData = await apiCallGet(url);
    return responseData;
  },
  post: async (details) => {},
  put: async (details) => {},
  deleteOne: async (id) => {},
};

export default apiService;
