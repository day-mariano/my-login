import "./styles.css"
import { useState } from "react"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [pasword, setPasword] = useState("")

  const handleSumit = (e) => {
    e.preventDefault()

    console.log("submit", {email, pasword})
  }

  return (
    <div id="login">
      <h1 id="title">Login do serviço</h1>
      <form className="form" onSubmit={handleSumit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
        <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={pasword}
            onChange={(e) => setPasword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit"> Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage