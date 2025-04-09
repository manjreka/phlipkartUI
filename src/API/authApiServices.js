const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const authApiCalls = async (url, userDetails) => {
  try {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, option);

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      return data;
    } else {
      alert(data.error || "Something went Wrong, Please try again later");
    }
  } catch (err) {
    alert("Something went Wrong, Please try again later");
  }
};

const authServices = {
  registerUser: async (userDetails) => {
    const url = `${BASE_URL}/api/users/register`;
    const responseData = await authApiCalls(url, userDetails);
    return responseData;
  },
  loginUser: async (userDetails) => {
    const url = `${BASE_URL}/api/users/login`;
    const responseData = await authApiCalls(url, userDetails);
    return responseData;
  },
};

export default authServices;
