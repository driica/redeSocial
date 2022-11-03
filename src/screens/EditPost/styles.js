import styled from 'styled-components';

const ContainerCreatePost = styled.div`
    width: 800px !important;
    max-width: 95% !important;

    form {
        width: 90% !important;
    }

    img {
        align-self: center;
        width: 90%;
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

const TitleImage = styled.span`
    align-self: center;
    font-weight: 700;
`;

export { ContainerCreatePost, TitleImage };
