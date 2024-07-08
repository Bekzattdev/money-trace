import axios from "axios";

const API_URL = "https://moneytrace.pythonanywhere.com";

interface User {
  email: string;
  username: string;
  last_name: string;
  password: string;
}

interface AuthResponse {
  auth_token: string;
}

// ! Register
export const registerUser = async (user: User): Promise<void> => {
  try {
    const response = await axios.post(`${API_URL}/auth/users/`, user);
    console.log("Пользователь успешно зарегистрирован:", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
// !Login

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/auth/token/login/`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

//!  Resent Password

export const resetPassword = async (emailOrUsername: string): Promise<void> => {
  try {
    const response = await axios.post(`${API_URL}/auth/users/reset_password/`, {
      email_or_username: emailOrUsername,
    });
    console.log("Cброс пароля отправлен:", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
