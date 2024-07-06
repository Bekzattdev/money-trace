import { Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Button onClick={() => navigate("/signUp")}>Sign Up</Button> */}
      <Outlet />
    </div>
  );
};

export default App;
