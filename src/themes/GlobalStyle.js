import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;     
    }

    html {
        font-size: 62.5%;
    }

    body {
        overscroll-behavior-y: contain;
        overflow-x: hidden;
        min-height: 100vh;
    }
`;

export default GlobalStyle;
