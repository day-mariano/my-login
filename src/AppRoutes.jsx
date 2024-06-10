import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";
import { AuthProvider } from "./contexts/auth";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes