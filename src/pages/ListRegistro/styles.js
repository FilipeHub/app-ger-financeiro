import styled from "styled-components";

export const Container = styled.div`
    margin: 10px 20px;
`;
    
export const RegistroList = styled.ul`
    margin: 20px 20px;
`;

export const Registro = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;

    strong {
        font-size: 18px;
        color: #444;
    }

    span {
        font-size: 15px;
        color: #999;
    }
`;
