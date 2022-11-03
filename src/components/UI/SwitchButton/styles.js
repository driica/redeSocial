import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    height: 30px;
    width: 80px;
    background-image: ;
    border-radius: 25px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.3s;
    background-image: ${(props) => props.theme.gradient};

    @media (max-width: 768px) {
        margin-right: 2em;
    }
`;

const Handle = styled(motion.div)`
    height: 22px;
    width: 22px;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #fff;
    overflow: hidden;
`;

const Icon = styled(motion.i)`
    color: #f88748;
`;

export { Container, Handle, Icon };
