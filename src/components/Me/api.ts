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
): Promise<CotegoryGetType[]> => {
  const { data } = await axios.get<CotegoryGetType[]>(API + "/incomes", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data;
};
