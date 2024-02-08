import styled from "styled-components";

export const Container= styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding:0 1.5rem ;
        height: 4rem;
       
        border-radius: 0.25rem;

        border: 1px solid var(--grayBackground);
        background-color: var(--darkBackground);


        font-weight: 400;
        font-size: 16px;

        &::placeholder{
            color: var(--text-body);
        }
        &+ input{
            margin-top:1rem ;
        }
    }

    button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        margin-top: 1.5rem;
        border-radius: 0.25rem;
        background: var(--green-Button);
        transition: filter 0.25s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;
