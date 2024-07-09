import { FC, ReactNode, useEffect } from "react";
import scss from "./Me.module.scss";
import Get from "./Providers/Get";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useData } from "./stateMenage";

const Me: FC = (): ReactNode => {
  const { balance } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");    
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <Get>
      <main className={scss.me}>
        <nav className={scss.header}>
          <div className="container">
            <div className={scss.wallets}></div>
            <nav className={scss.actions}>
              {/* <Link to="/me">Главная</Link> */}
              <Link to="/me/income">Доходы</Link>
              <Link to="/me/expenses">Расходы</Link>
              <Link to="/me/cotegory">Категории</Link>
              {/* <Link to="/me/budget">Планированные бюджеты</Link> */}
              <p>{balance} сом</p>
            </nav>
          </div>
        </nav>
        <div className="container">
          <div className={scss.content}>
            <Outlet />
          </div>
        </div>
      </main>
    </Get>
  );
};

export default Me;
