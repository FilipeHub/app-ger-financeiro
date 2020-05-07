import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Registro, RegistroList, NovoRegistro} from './styles';
import history from '../../services/history';
import api from '../../services/api';
import {store} from '../../store';

export default function ListRegistro() {
    const [registros, setRegistros] = useState([]);
    
    // Executes when load the page
    useEffect(() => {
        async function loadRegistros(){
            const {token} = store.getState().auth;
            api.defaults.headers.Authorization = `Bearer ${token}`;
            
            const response = await api.get('/registro');
            setRegistros(response.data);
        }

        loadRegistros();
    }, []);

    const {signed} = store.getState().auth;

    if(!signed){
        return <Redirect to="/" />;
    }


    function handleCancel(){
        history.push('/');
    };

  return (
      <Container>
          {/* <h1>Novo Registro</h1>
          <NovoRegistro onSubmit={handleSubmit}>
            <label>Descrição</label>
            <input
                type="text"
                placeholder="Digite um descrição"
                onChange={event => setDescricao(event.target.value)}
            />

            <label>Tipo</label>
            <input
                type="select"
                onChange={event => setTipo(event.target.value)}
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
          </NovoRegistro> */}
          <h1>Registros</h1>
          <RegistroList>
            {registros.map(registro => (
                <Registro key={registro._id}>
                    <strong>{registro.descricao}</strong>
                    <span>{registro.tipo}</span>
                    <span>{registro.quantidade}</span>
                    <span>{registro.valor}</span>
                    <span>{registro.data}</span>
                </Registro>
            ))}
        </RegistroList>
        <button type='button' onClick={handleCancel}>Cancel</button>
      </Container>
  );
}

          
