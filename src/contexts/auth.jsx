import { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if(recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  },[])

  const login = (email, password) => {
    console.log('login auth', email, password)

    // simulação de usuario resposta da api e criar uma session
    const loggedUser = {
      id: '123',
      email,
    }

    // salvar no localStorage para não perder o login ao atualizar a página
    localStorage.setItem('user', JSON.stringify(loggedUser))

    if(password === "secret") {
      setUser({id: '123', email})
      navigate("/")
    }
  }

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}