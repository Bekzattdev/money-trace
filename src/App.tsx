import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/signUp")}>BOQNb</button>
    </div>
  );
};

export default App;
