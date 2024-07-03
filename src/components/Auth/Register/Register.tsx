import { useState } from "react";
import { registerUser, loginUser } from "@/src/api";
import { Button, Input } from "antd";
import scss from "./Register.module.scss";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const handleRegister = async () => {
    try {
      await registerUser({ email, username, last_name: lastName, password });
      alert("Пользователь успешно зарегистрирован");
    } catch (error) {
      alert("Не удалось зарегистрировать пользователя");
    }
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);
      setToken(data.auth_token);
      alert("Пользователь успешно авторизовался");
    } catch (error) {
      alert("Не удалось войти ");
    }
  };

  return (
    <div className={scss.container}>
      <div className={scss.content}>
        <div className={scss.block}>
          <h1>Register</h1>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleRegister} type="primary" block>
            Зарегистрироваться
          </Button>
        </div>
      </div>
      {/* !не доконца закончено*/}
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
          <Button onClick={handleLogin} type="primary" block>
            Войти
          </Button>
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

export default Register;
