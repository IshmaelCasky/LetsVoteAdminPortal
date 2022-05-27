import { Route, Routes} from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";


function App() {
  return (
    <AuthProvider>
      <Routes>
          <Route index path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
