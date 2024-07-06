import { FC, ReactNode } from "react";
import scss from "./Me.module.scss";
import GetUser from "./Providers/GetUser";
import { Link, Outlet, useParams } from "react-router-dom";

const Me: FC = (): ReactNode => {
  const { id } = useParams();

  return (
    <GetUser>
      <main className={scss.me}>
        <nav className={scss.header}>
          <div className="container">
            <div className={scss.wallets}></div>
            <div className={scss.actions}>
              <Link to={`/me/${id}`}>Главная</Link>
              <Link to={`/me/${id}/income`}>Доходы</Link>
              <Link to={`/me/${id}/expenses`}>Расходы</Link>
              <Link to={`/me/${id}/budget`}>Планированные бюджеты</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className={scss.content}>
            <Outlet />
          </div>
        </div>
      </main>
    </GetUser>
  );
};

export default Me;
