import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 500px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7rem;

    img {
        width: 100%;
        height: 500px;
        max-width: 100%;
        object-fit: cover;
    }
`;

const Title = styled.span`
    align-self: flex-start;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
`;

const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

const ContainerDescription = styled.div`
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.3rem;

    div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        span:nth-of-type(1) {
            text-align: left;
        }

        span:nth-of-type(2) {
            font-size: 0.85rem;
            font-style: italic;
            opacity: 0.7;
        }
    }

    div:nth-of-type(2) {
        font-size: 0.9rem;

        span {
            margin-right: 0.3rem;
        }

        span span {
            font-weight: 800;
            margin-right: 0.05rem;
        }
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

export { Container, Title, ContainerContent, ContainerDescription, Btn };
