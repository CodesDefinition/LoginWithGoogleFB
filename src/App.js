import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { ProfileProvider } from "./context/Profile";

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ProfileProvider>
    </div>
  );
}

export default App;
