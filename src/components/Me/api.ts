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
): Promise<CotegoryGetType[]> => {
  const { data } = await axios.get<CotegoryGetType[]>(API + "/expenses", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return data;
};
