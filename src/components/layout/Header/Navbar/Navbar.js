import React from 'react';
import Burger from '../Burger/Burger';
import { Container, Brand, ContainerSection } from './styles';
import { NavLink } from 'react-router-dom';
import SwitchButton from '../../../UI/SwitchButton/SwitchButton';

export const Navbar = (props) => {
    return (
        <Container>
            <NavLink to="/">
                <Brand>
                 rede social
                </Brand>
            </NavLink>
            <ContainerSection>
                <Burger />
                <SwitchButton themeToggle={props.themeToggle} />
            </ContainerSection>
        </Container>
    );
};
