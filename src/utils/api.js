const api = async (path, method, data = null) => {
  try {
    const BASE_URL = "http://localhost:3000";

    const response = await fetch(BASE_URL + path, {
      mode: "cors",
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : data,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default api;
