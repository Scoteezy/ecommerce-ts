import styled from "styled-components"
export const LoginContainer = styled.div`
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  `
export const LoginForm = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    & > input { 
      width: 30%;
      height:3rem;
      margin-top: 15px;
      padding-left:15px;
      border-radius: var(--radii);
      color: var(--colors-text);
      background-color: var(--colors-ui-base);
      border-style: none;
      box-shadow:var(--shadow);
    }
  `
 export const LoginButton = styled.button`
    width: 150px;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
    border-style: none;
    box-shadow:var(--shadow);
    cursor:pointer;
    `