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
`;
