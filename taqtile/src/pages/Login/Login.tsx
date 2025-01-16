import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import  LOGIN_MUTATION  from '../../graphql/mutations';
import './login.css';

interface FormErrors {
  email?: string;
  password?: string;
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState('');
  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    const errors: FormErrors = {};
    if (!validateEmail(email)) {
      errors.email = 'Formato de email inválido';
    }
    if (!validatePassword(password)) {
      errors.password = 'A senha deve ter pelo menos 7 caracteres, incluindo letras e números';
    }
    setFormErrors(errors);
  }, [email, password]); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormErrors({});

    if (!email || !password) {
      setMessage('Campos devem ser preechidos')
    }

    if (!validateEmail(email)) {
      setMessage('Formato de e-mail inválido')
    } else if (!validatePassword(password)) {
      setMessage('Formato de senha inválidos')
    } else {
      try {
        const result = await login({ variables: { data: { email, password} } });
        setMessage('Login realizado com sucesso!' + result);
      } catch (err) {
        setMessage('' + err);
      }
    }
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
          pattern='[^\s@]+@[^\s@]+\.[^\s@]+$'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {formErrors.email && <p>{formErrors.email}</p>}

      <div className='container-fields'>
        <label className='label-login'>Senha:</label>
        <input
          type='password'
          placeholder='Senha'
          className='input-login'
          value={password}
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {formErrors.password && <p>{formErrors.password}</p>}

      <p className="message">{message}</p>
      <button type='submit' className='button-login' disabled={loading} >
        {loading ? 'Carregando' : 'Entrar'}
      </button>
    </form>
  );
}

export default Login;

