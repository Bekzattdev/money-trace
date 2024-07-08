import axios from "axios";
import { ReactNode, FC, useEffect, useState } from "react";
import { useData } from "../stateMenage";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";
import { getCotegory } from "../api";

const Get: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  const navigate = useNavigate();
  const { setUser, setCotegory } = useData();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const API: any = import.meta.env.VITE_URL_PUBLICK;
  const token = localStorage.getItem("token");

  

  const getUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(API + "/auth/users/me", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const response = await getCotegory(API, token);
      setCotegory(response);
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
