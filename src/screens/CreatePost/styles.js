import styled from 'styled-components';

const ContainerCreatePost = styled.div`
    width: 800px !important;
    max-width: 95% !important;

    form {
        width: 90% !important;
    }
    input[type='file'] {
        color: #fff;
    }

    @media (max-width: 768px) {
        form {
            width: 100% !important;
        }
    }
`;

export { ContainerCreatePost };
