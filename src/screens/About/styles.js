import styled from 'styled-components';

const Btn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
    font-weight: 600;
    border: 0.5px solid #fff;
    cursor: pointer;
    height: 3.5rem;
    width: 15rem;
    max-width: 40%;
    border-radius: 0.5rem;
    color: #fff;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: rgba(0, 0, 0, 0.2) !important;
        color: #000;
    }
`;

export { Btn };
