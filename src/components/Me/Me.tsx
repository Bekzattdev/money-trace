import { FC, ReactNode } from "react";
import scss from "./Me.module.scss";
import GetUser from "./Providers/GetUser";
import { Link, Outlet } from "react-router-dom";

const Me: FC = (): ReactNode => {
  return (
    <GetUser>
      <main className={scss.me}>
        <div className="container">
          <div className={scss.content}>
            <nav className={scss.header}>
              <Link to="/me">Главная</Link>
              <Link to="/me/income">Доходы</Link>
              <Link to="/me/expenses">Расходы</Link>
            </nav>
            <Outlet />
          </div>
        </div>
      </main>
    </GetUser>
  );
};

export default Me;
