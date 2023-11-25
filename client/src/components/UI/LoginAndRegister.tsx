import styled from "styled-components"
export const LoginContainer = styled.div`
    height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  `
export const LoginForm = styled.form`
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

  export const ErrorMessage =styled.p`
    font-family: var(--family);
    color: var(--colors-text);
    font-size:var(--fs-md);
    font-weight: var(--fw-light);
    
  `