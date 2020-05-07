import React from 'react';

import history from '../../services/history';
import { Container } from './styles';

export default function Home() {

  function handleCadastro(){
    history.push('/signup');

  };

  function handleLogin(){
    history.push('/login');
  };

  return (
    <Container>
        <button type='button' onClick={handleLogin}>LOGIN</button>
        <button type='button' onClick={handleCadastro}>CADASTRO</button>
    </Container>
  );
}
