import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import history from '../../services/history';
import { Container } from './styles';
import { signInRequest } from '../../store/modules/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleSubmit(event){
    event.preventDefault();
    dispatch(signInRequest(email, password));
  };

  return (
    <Container onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
            type="text"
            placeholder="Type your e-mail or cellphone..."
            onChange={event => setEmail(event.target.value)}
        />

        <label>Password</label>
        <input
            type="password"
            placeholder="Type your password..."
            onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">LOGIN</button>
    </Container>
  );
}
