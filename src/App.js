import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";

function App() {
  const logged = useSelector((state) => state.login);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={logged ? <Home /> : <Navigate to="/start" />}
        />
        <Route path="/start" element={<Start />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
