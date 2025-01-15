import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import LOGIN_MUTATION from '../../graphql/mutations';
import './login.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if(!isValidEmail) {
      setErrorMessage('E-mail inválido, verifique novamente se preencheu o campo corretamente');
    } else if (!isValidPassword) {
      setErrorMessage('Verifique se o formato da senha possui 7 caracteres, incluindo letras e números');
    } else {
      try {
        const result = await login({
          variables: {
            data: {
              email,
              password
            },
          },
        });
        setMessage('login realizado com sucesso' + result)
      } catch (err) {
        setMessage( '' + err)
      }
    };
  };

  return (

    <form className='container-login' onSubmit={handleSubmit}>
      <h2>Bem-vindo à Instaq</h2>

      <div className='container-fields'>
        <label className='label-login'>E-mail:</label>
        <input
          type='email'
          placeholder='E-mail'
          className='input-login'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <p>{errorMessage}</p>

      <div className='container-fields'>
        <label className='label-login'>Senha:</label>
        <input
          type='password'
          placeholder='Senha'
          className='input-login'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p>{errorMessage}</p>
      <p>{message}</p>

      <button type='submit' className='button-login' disabled={loading}>
        {loading ? 'Carregando' : 'Entrar'}
      </button>
    </form>
  );
}

export default Login;
