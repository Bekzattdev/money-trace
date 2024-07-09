import { ReactNode, FC } from "react";
import scss from "./me.module.scss";

const MePage: FC = (): ReactNode => {
  return (
    <section className={scss.me}>
      <div>
        <h1>Me</h1>
      </div>
    </section>
  );
};

export default MePage;
