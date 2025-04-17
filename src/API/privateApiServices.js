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

const apiCallPost = async (url, details) => {
  try {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(details),
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
  getAll: async (link, dev) => {
    if (dev) {
      const responseData = await apiCallGet(link);
      return responseData;
    }
    const url = `${BASE_URL}${link}`;
    const responseData = await apiCallGet(url);
    return responseData;
  },
  // check get One
  getOne: async (link) => {
    const url = `${BASE_URL}${link}`;
    const responseData = await apiCallGet(url);
    return responseData;
  },
  create: async (link, details, dev) => {
    if (dev) {
      const responseData = await apiCallPost(link, details);
      return responseData;
    }
    const url = `${BASE_URL}${link}`;
    const responseData = await apiCallPost(url, details);
    return responseData;
  },
  update: async (details) => {},
  deleteOne: async (id) => {},
};

export default PrivateApiServices;
