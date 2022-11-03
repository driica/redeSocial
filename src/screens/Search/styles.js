import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
`;

const ContainerResult = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 0.1rem;
    }

    span {
        opacity: 0.8;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;

const Btn = styled(Link)`
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

export { Container, ContainerResult, Btn };
