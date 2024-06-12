import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";

import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";

import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)

    if(loading) {
      return <div className="loading">Carregando...</div>
    }

    if(!authenticated) {
      return <Navigate to="/login"/>
    }

    return children
  }

  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/" element={<Private><HomePage/></Private>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes