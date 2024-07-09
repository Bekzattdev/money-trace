import axios from "axios";
import { ReactNode, FC, useEffect, useState } from "react";
import { useData } from "../stateMenage";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";
import { getBalance, getCotegory, getExpenses, getIncomes } from "../api";

const Get: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  const navigate = useNavigate();
  const { setUser, setCotegory, setBalance, setExpenses, setIncomes } =
    useData();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const API: any = import.meta.env.VITE_URL_PUBLICK;
  const token = localStorage.getItem("token");

  const getUser = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(API + "/auth/users/me/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const incomes = await getIncomes(API, token);
      const expenses = await getExpenses(API, token);
      const cotegory = await getCotegory(API, token);
      const balance = await getBalance(API, token);
      setIncomes(incomes);
      setCotegory(cotegory);
      setExpenses(expenses);
      setBalance(balance);
      setUser(data);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    getUser();
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
};

export default Get;
