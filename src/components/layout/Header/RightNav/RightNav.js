import React from 'react';
import { LinkList, StyledNavLink, LogoutBtn } from './styles';
import useAuthentication from '../../../../hooks/useAuthentication';
import { useAuthValue } from '../../../../context/AuthContext';

const RightNav = (props) => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <LinkList open={props.open}>
            <li>
                <StyledNavLink to="/" onClick={props.handleModal}>
                    Home
                </StyledNavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <StyledNavLink to="/login" onClick={props.handleModal}>
                            Login
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/Register" onClick={props.handleModal}>
                            Registrar
                        </StyledNavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <StyledNavLink to="/posts/create" onClick={props.handleModal}>
                            Novo post
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/dashboard" onClick={props.handleModal}>
                            Dashboard
                        </StyledNavLink>
                    </li>
                </>
            )}
            <li>
                <StyledNavLink to="/about" onClick={props.handleModal}>
                    Sobre
                </StyledNavLink>
            </li>
            {user && (
                <li>
                    <LogoutBtn onClick={logout}>Sair</LogoutBtn>
                </li>
            )}
        </LinkList>
    );
};

export default RightNav;
