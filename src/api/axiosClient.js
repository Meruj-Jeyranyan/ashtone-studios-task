import axios from "axios";

class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ApiError extends AppError {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BASE_URL_LOCAL
    : process.env.REACT_APP_BASE_URL_SERVER;

const client = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const request = async (options, customClient = null) => {
  const axiosInstance = customClient || client;
  try {
    const response = await axiosInstance(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      throw new Error(`${status}: ${data?.error?.text || "Unknown Error"}`);
    }
    throw error;
  }
};

const get = async (url, options = {}, customClient = null) => {
  return request(
    {
      method: "GET",
      url,
      ...options,
    },
    customClient
  );
};

const post = async (
  url,
  data,
  headers = {},
  options = {},
  customClient = null
) => {
  const requestHeaders = {
    "Content-type": "application/json",
    ...headers,
  };

  return request(
    {
      method: "POST",
      url,
      data,
      headers: requestHeaders,
      ...options,
    },
    customClient
  );
};

const patch = async (url, data, options = {}, customClient = null) => {
  return request(
    {
      method: "PATCH",
      url,
      data,
      ...options,
    },
    customClient
  );
};

const put = async (url, data, options = {}, customClient = null) => {
  return request(
    {
      method: "PUT",
      url,
      data,
      ...options,
    },
    customClient
  );
};

const del = async (url, options = {}, customClient = null) => {
  return request(
    {
      method: "DELETE",
      url,
      ...options,
    },
    customClient
  );
};

const ApiClient = {
  ApiError,
  get,
  post,
  patch,
  put,
  del,
};

export default ApiClient;
