import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container, Handle, Icon } from './styles';

const SwitchButton = (props) => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn((prev) => !prev);
        props.themeToggle();
    };

    return (
        <Container onClick={() => handleClick()} style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}>
            <Handle layout>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Icon
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </AnimatePresence>
            </Handle>
        </Container>
    );
};

export default SwitchButton;
