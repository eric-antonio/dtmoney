import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background:#202024;
    --green-Background:#015F43;
    --green-Button:#00875F;
    --darkBackground:#121214;
    --grayBackground:#323238;

    --text-title:#E1E1E6;
    --text-body:#7C7C8A;

    --text-sussed:#00B37E;
    --text-denied:#F75A68;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}
body{

    background: var(--background);
    -webkit-smoothing:antialiased;

}
body , input , textarea , button {
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
}

h1 , h2 , h3 ,h4 ,h5, h6{
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
