import axios from "axios";

export const getCotegory = async (
  API: any,
  token: string | null
): Promise<CotegoryGetType[]> => {
  const { data } = await axios.get<CotegoryGetType[]>(API + "/categories", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data;
};

export const getExpenses = async (
  API: any,
  token: string | null
): Promise<ExpensesType[]> => {
  const { data } = await axios.get<ExpensesType[]>(API + "/expenses", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data;
};

export const getIncomes = async (
  API: any,
  token: string | null
): Promise<ExpensesType[]> => {
  const { data } = await axios.get<ExpensesType[]>(API + "/incomes", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data;
};

export const getBalance = async (
  API: any,
  token: string | null
): Promise<any> => {
  const { data } = await axios.get<any>(API + "/wallets", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data[0].balance;
};
