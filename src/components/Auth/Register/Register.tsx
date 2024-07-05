import { useState } from "react";
import { registerUser } from "@/src/api";
import { Button, Input } from "antd";
import scss from "./Register.module.scss";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
      await registerUser({ email, username, last_name: lastName, password });
      alert("Пользователь успешно зарегистрирован");
    } catch (error) {
      alert("Не удалось зарегистрировать пользователя");
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

          <p>
            Уже есть аккаунт? <a href="/signIn">Войти</a>
          </p>
        </div>
      </div>
      {/* !не доконца закончено*/}
    </div>
  );
};

export default Register;
