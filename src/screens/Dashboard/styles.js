import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    color: #000;
    margin: 2.2rem 0;
    background-color: #fff;
    align-self: center;
    width: 760px;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);

    h1 {
        margin-bottom: 0.2rem;
    }
`;

const EditMessage = styled.span`
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
`;

const ContainerError = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 1.2rem;
    }

    span:nth-of-type(2) {
        margin-bottom: 1.8rem;
    }
`;

const BtnCreate = styled(Link)`
    max-width: 30%;
    width: 5rem;
    text-align: center;
    background-color: #0a66c2;
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;

    &:hover {
        background-color: #004182;
    }
`;

const ContainerPosts = styled.div`
    margin: 2rem 0;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContainerHeader = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1.8px solid rgba(0, 0, 0, 0.1);
    padding: 0 0.7rem;

    span {
        color: rgba(0, 0, 0, 0.7);
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
`;

const ContainerPost = styled.div`
    width: 95%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    div {
        margin: 0.6rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        width: 40%;
        font-size: 1rem;
    }

    div div {
        width: 60%;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;

        button {
            font-size: 1rem;
            font-weight: 600;
            height: 2rem;
            width: 6.2rem;
            border: 1.5px solid #000;
            cursor: pointer;
            background-color: #fff;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: #ff4444;
                color: #fff;
                border: 1.5px solid #fff;
            }
        }
    }

    @media (max-width: 768px) {
        div {
            align-items: flex-start;
        }

        div div {
            flex-direction: column;
            align-items: flex-end;
        }
    }
`;

const BtnEdit = styled(Link)`
    font-size: 1rem;
    color: #000;
    font-weight: 600;
    border: 1.5px solid #000;
    height: 1.8rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #0a66c2;
        color: #fff;
        border: 1.5px solid #fff;
    }
`;

export { EditMessage, Container, ContainerError, BtnCreate, ContainerPosts, ContainerHeader, ContainerPost, BtnEdit };
