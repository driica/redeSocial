import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinkList = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: row nowrap;

    li {
        margin-right: 1em;
    }

    a {
        padding: 0.4em 0.6em;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #F2D388;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
        top: 0;
        right: 0;
        height: 100vh;
        width: 40%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
            margin-bottom: 1rem;
        }
    }
`;

const StyledNavLink = styled(NavLink)`
    &.active {
        background-color: ${(props) => props.theme.activeBackground};
        border-radius: 30px;
        color: ${(props) => props.theme.activeFontColor};
    }
    @media (max-width: 768px) {
        color: #fff;

        &.active {
            background-color: #fff;
            color: #000;
        }
    }
`;

const LogoutBtn = styled.button`
    @media (max-width: 768px) {
        color: #fff;
    }
`;

export { LinkList, StyledNavLink, LogoutBtn };
