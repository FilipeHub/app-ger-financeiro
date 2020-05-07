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

          
