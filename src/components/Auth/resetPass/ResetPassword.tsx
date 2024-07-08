import { resetPassword } from "@/src/api";
import { Button, Input } from "antd";
import { useState } from "react";
import scss from "./ResetPassword.module.scss";

const ResetPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState<string>("");

  const handleResetPassword = async () => {
    try {
      await resetPassword(emailOrUsername);
      alert("Cброс пароля отправлен.");
    } catch (error) {
      alert("Не удалось выполнить сброс пароля.");
    }
  };

  return (
    <div className={scss.container}>
      <div className={scss.content}>
        <div className={scss.block}>
          <h1>Reset Password</h1>
          <Input
            type="text"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <Button onClick={handleResetPassword} type="primary" block>
            Сбросить пароль
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
