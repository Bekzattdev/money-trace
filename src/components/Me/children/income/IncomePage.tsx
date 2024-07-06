import { ReactNode, FC } from "react";
import scss from "./incom.module.scss";

const IncomePage: FC = (): ReactNode => {
  return (
    <section className={scss.income}>
      <div>
        <h1>Income</h1>
      </div>
    </section>
  );
};

export default IncomePage;
