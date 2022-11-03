import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.6rem;
    width: 720px;
    max-width: 86%;

    input {
        width: 600px;
        height: 100%;
        padding-left: 25px;
        font-size: 1.2rem;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: none;
    }

    button {
        width: 120px;
        height: 100%;
        background-color: #F2D388;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
    }
`;

const ContainerPosts = styled.div`
    margin-top: 3rem;
    margin-bottom: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
`;

const BtnLink = styled(Link)`
    padding: 1rem;
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
`;

export { SearchForm, ContainerSearch, ContainerPosts, BtnLink, Container };
