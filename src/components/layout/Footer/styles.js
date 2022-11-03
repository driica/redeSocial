import styled from 'styled-components';

const ContainerFooter = styled.footer`
    position: relative;
    bottom: 0;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
    border-radius: 3px 3px 0 0;
`;

const Icons = styled.div`
    margin-top: 2.4em;

    img {
        width: 2em;
        margin-right: 2.5em;
        cursor: pointer;
    }
`;

export { ContainerFooter, Icons };
