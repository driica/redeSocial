import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContainerPost = styled.div`
    width: 630px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    div:nth-of-type(1) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.6rem;
        font-size: 1.3rem;
        font-weight: 600;

        span:nth-of-type(2) {
            opacity: 0.7;
        }

        &:child(2) {
            background-color: red;
        }
    }

    img {
        width: 100%;
    }

    img + span {
        margin-top: 1rem;
        font-size: 1.2rem;
    }

    div:nth-of-type(2) {
        margin-top: 1.3rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;

        span span {
            font-weight: 700;
        }
    }
`;

const Btn = styled(Link)`
    margin-top: 1.5rem;
    color: ${(props) => props.theme.activeFontColor};
    width: 5rem;
    height: 2.4rem;
    border: 1.4px solid ${(props) => props.theme.activeFontColor};
    border-radius: 0.3rem;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${(props) => props.theme.activeFontColor};
        color: ${(props) => props.theme.fontColor};
    }
`;

export { Container, ContainerPost, Btn };
