import { Button, Input } from "antd";
import scss from "./Login.module.scss";
import { useState } from "react";
import { loginUser } from "@/src/api";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);
      setToken(data.auth_token);
      localStorage.setItem("token", token);
      alert("Пользователь успешно авторизовался");
    } catch (error) {
      alert("Не удалось войти ");
    }
  };
  return (
    <div>
      <div className={scss.secondContent}>
        <div className={scss.secondBlock}>
          <h1>Login</h1>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            type="primary"
            block>
            Войти
          </Button>

          <p>
            Нет аккаунтa? <a href="/signUp">Создать аккаунт</a>
          </p>
        </div>
      </div>
      {token && (
        <div>
          <h2>Token</h2>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
