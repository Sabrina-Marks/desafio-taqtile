import "./login.css"
function Login()  {

  return (
    <div className={"container-login"}>
        
         <h2> Bem-vindo á Taqtile</h2>

        <label htmlFor={"E-mail"} className={"label-login"}>E-mail: </label>
        <br />
        <input type={"email"} placeholder={"E-mail"} className={"input-login"} />
        <br /> <br />

        <label htmlFor={"password"} className={"label-login"}>Senha: </label>
        <br />
        <input type={"password"} placeholder={"Senha"} className={"input-login"} />
        <br /> <br />

         <button type={"submit"} className={"button-login"}>Entrar</button>
        
    </div>
    
  );
};

export default Login;