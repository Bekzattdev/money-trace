import { FC, ReactNode } from "react";
import scss from "./Me.module.scss";
import GetUser from "./Providers/GetUser";

const Me: FC = (): ReactNode => {
  return (
    <GetUser>
      <main className={scss.me}>
        <div className="container">
          <div className={scss.content}>
            <div className="me"></div>
          </div>
        </div>
      </main>
    </GetUser>
  );
};

export default Me;
