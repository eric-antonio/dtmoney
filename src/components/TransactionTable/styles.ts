import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--grayBackground);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--text-sussed);
      }

      &.withdraw {
        color: var(--text-denied);
      }
    }
  }

  form{
    
  }
  fieldset {
    border: none;
    display: flex;
    justify-items: center;
    justify-content: space-between;

    input{
        width: 100%;
        margin-right: 20px;
        border-radius: 4px;
        padding: 10px;
        border: none;
        background-color: var(--darkBackground);

        &:hover{
            filter: brightness(0.9);
        }
    }

    button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        gap: 10px;


        border-radius: 4px;
        color: var(--text-title);
        background-color: var(--background);
        border: 2px solid var(--green-Background);

        &:hover{
            filter: brightness(0.9);
        }
    }
  
}


`;
