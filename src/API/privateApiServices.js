import { toast } from "react-toastify";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
const token = Cookies.get("token");

const apiCallGet = async (url) => {
  try {
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

const PrivateApiServices = {
  getAll: async (link) => {
    const url = `${BASE_URL}${link}`;
    const responseData = await apiCallGet(url);
    return responseData;
  },
  getOne: async (link) => {
    const url = `${BASE_URL}${link}`;
    const responseData = await apiCallGet(url);
    return responseData;
  },
  post: async (details) => {},
  put: async (details) => {},
  deleteOne: async (id) => {},
};

export default PrivateApiServices;
