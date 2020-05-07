import { createGlobalStyle } from "styled-components";
import { lighten } from 'polished';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        min-height: 100%;
    }

    body {
        background: #FFF;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input {
        font-family: Times, Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    button {
        cursor: pointer;
        width: 100%;
        max-width: 195.66px;
        height: 45px;
        border-radius: 45px;
        border: none;
        background-color: #789FDF;
        font-size: 14px;
        color: #fff;
        margin-botton: 20px;
        transition: background 0.5s;

        &:hover {
            background : ${lighten(0.5, '#789FDF')};
            color: #789FDF;
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    *:focus {
        outline: 0;
    }
`;
