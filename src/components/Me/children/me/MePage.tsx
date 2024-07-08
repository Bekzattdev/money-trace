import { ReactNode, FC, useEffect } from "react";
import scss from "./me.module.scss";
import axios from "axios";
import { useData } from "../../stateMenage";

const MePage: FC = (): ReactNode => {
  const { balance } = useData();
  console.log(balance);

  return (
    <section className={scss.me}>
      <div>
        <h1>Me</h1>
      </div>
    </section>
  );
};

export default MePage;
