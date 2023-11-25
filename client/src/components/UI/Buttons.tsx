import styled from "styled-components";

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
export const UserButton = styled.button`
     color: var(--colors-text);
     font-size: var(--fs-sm);
     width: 2rem;
     height: 2rem;
     position: relative;
     cursor: pointer;
     border:none;
     background-color: var(--colors-ui-base);
     display: flex;
     align-items:center;
     justify-content: center;
     margin-right: 20px;
    `;
export const PrimaryButton = styled.button<{margin?:string}>`
    width: 150px;
    height: 50px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
    border-style: none;
    box-shadow:var(--shadow);
    margin: ${props => props.margin ? props.margin : ""};
    cursor:pointer;

`