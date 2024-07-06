import { ReactNode, FC, useEffect } from "react";
import scss from "./me.module.scss";
import axios from "axios";

const MePage: FC = (): ReactNode => {
  const get = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL_PUBLICK}/categories`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
  };
  useEffect(() => {
    get();
  }, []);

  return (
    <section className={scss.me}>
      <div>
        <h1>Me</h1>
      </div>
    </section>
  );
};

export default MePage;
