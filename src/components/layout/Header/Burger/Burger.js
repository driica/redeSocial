import React, { useState } from 'react';
import { StyledBurger } from './styles';
import RightNav from '../RightNav/RightNav';

const Burger = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    };

    return (
        <>
            <StyledBurger open={open} onClick={handleModal} style={{ position: open === true ? 'fixed' : 'absolute' }}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} handleModal={handleModal} />
        </>
    );
};

export default Burger;
