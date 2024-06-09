import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes