import "./login.css"
function Login()  {

  return (
    <div className="container-login">
        
         <h2 className="text"> Bem-vindo à Instaq </h2>

         <div className="container-fields">
          <label className="label-login">E-mail: </label>
          <input type="email" placeholder="E-mail" className="input-login" />
         </div>

         <div className="container-fields">
           <label className="label-login">Senha: </label>
           <input type="password" placeholder="Senha" className="input-login" />
         </div>

         <button type="submit" className="button-login">Entrar</button>
        
    </div>
    
  );
};

export default Login;