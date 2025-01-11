import {  useState } from "react";
import "./login.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;

function Login()  {
  
  const [email, setEmail] = useState("");
  const [password, setPassaword] = useState("");
  const [errorMessageEmail, setErrorMesageEmail] = useState(""); 
  const [errorMessagePassaword, setErrorMesagePassaword] = useState(""); 
  const [mesage, setMesage] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    
    if (isValidEmail && isValidPassword ) {
      setMesage("Login efetuado com sucesso");
      
    }else if(!isValidEmail ){
      setErrorMesageEmail("E-mail inválido, verifique novamente se preencheu o campo corretamente");
  
    } else if (!isValidPassword){
      setErrorMesagePassaword("Verifique se o formato da senha possui 7 caracteres, incluindo letras e números");
    };
  };

  return (
    <form className="container-login" onSubmit={handleSubmit}>
       <h2> Bem-vindo à Instaq </h2>

         <div className="container-fields">
          <label className="label-login">E-mail: </label>
          <input type="email" placeholder="E-mail" className="input-login" onChange={(e) => [setEmail(e.target.value)]} />
         </div>
         <p>{errorMessageEmail}</p>

         <div className="container-fields">
           <label className="label-login">Senha: </label>
           <input type="password" placeholder="Senha" className="input-login" value={password} onChange={(e) => [setPassaword(e.target.value)] }/>
         </div>

         <p>{errorMessagePassaword}</p>
         <p>{mesage}</p>

         <button type="submit" className="button-login">Entrar</button>
    </form>
    
  );
};

export default Login;