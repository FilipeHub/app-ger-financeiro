import React, { useState } from 'react';

import history from '../../services/history';
import { Container } from './styles';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    history.push('/registros');
  };

  return (
    <Container onSubmit={handleSubmit}>
        <label>Name</label>
        <input
            type="text"
            placeholder="Type your name..."
            onChange={event => setName(event.target.value)}
        />


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

        <label>Confirm Password</label>
        <input
            type="password"
            placeholder="Type your password again..."
            onChange={event => setConfirmPassword(event.target.value)}
        />

        <button type="submit">CONFIRMAR</button>
    </Container>
  );
}
