import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.backgroundBody};
    background: ${(props) => props.theme.bodyBackground};
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.activeFontColor};
  }

  input::placeholder,
  textarea::placeholder {
    font-family: 'Montserrat', sans-serif;
    color: #AAA;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  a, 
  nav button {
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.fontColor};
    transition: 0.4s;
    font-size: 1em;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  a:hover,
  nav button:hover {
    color: #bbb;
  }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #000;

    div {
        margin: 3rem 0;
        display: flex;
        width: 80%;
        background-color: #fff;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);
        box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);
    }

    div form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        padding: 0.8em 4em;
        width: 50%;

        h1 {
            margin-bottom: -0.3em;
        }

        label:nth-of-type(1) {
            margin-top: 1.4rem;
        }

        label {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
        }

        input {
            width: 100%;
            height: 2rem;
            border: none;
            background-color: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            color: #000;
        }

        textarea {
            width: 100%;
            height: 6rem;
            border: none;
            background-color: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            color: #000;
        }

        button {
            height: 2.6rem;
            background-color: #F2D388;
            border: none;
            border-radius: 9px;
            color: #fff;
            font-weight: bold;
            font-size: 1.1rem;
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background-color: rgba(4, 6, 47, 1);
        }
    }

    section {
        width: 50%;
        height: 80%;
        border-left: 1.5px solid rgba(38, 43, 111, 0.3);

        img {
            width: 80%;
        }
    }

    @media (max-width: 1000px) {
        section {
            border-left: none;
        }

        div form {
            border-right: 1.5px solid rgba(38, 43, 111, 0.3);
        }
    }

    @media (max-width: 768px) {
        section {
            display: none;
        }

        div form {
            width: 100%;
            border-right: none;
        }
    }
`;

const Error = styled.p`
    width: 100%;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 5px;
    border-radius: 5px;
`;

export { GlobalStyle, Error, Container };
