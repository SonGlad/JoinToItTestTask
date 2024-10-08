import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
   
    html,
    body {
        height: 100%;
        font-family: "Source Code Pro", sans-serif; 
        font-weight: 400;
        letter-spacing: 0.02em;
        color: ${p => p.theme.color.text_main};
        background-color: ${p => p.theme.color.white_bg};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        --fc-today-bg-color: ${p => p.theme.color.table_header_color};
        --fc-highlight-color: ${p => p.theme.color.white_bg};
    }
    

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    p {
        margin: 0;
    }

    *{
        box-sizing: border-box;
    }

    button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        padding: 0;
    }
`;
