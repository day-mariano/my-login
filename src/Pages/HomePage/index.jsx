import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

const HomePage = () => {
  const { authenticated, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <h1>Home</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Sair</button>
    </>
  )
}

export default HomePage