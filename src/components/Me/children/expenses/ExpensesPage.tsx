import { ReactNode, FC } from "react";
import scss from "./expenses.module.scss";

const ExpensesPage: FC = (): ReactNode => {
  return (
    <section className={scss.expenses}>
      <div>
        <h1>Expenses</h1>
      </div>
    </section>
  );
};

export default ExpensesPage;
