import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import useInsert from '../../hooks/useInsert';

import { Container, Error } from '../../globalStyles';
import { ContainerCreatePost } from './styles';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');
    const navigate = useNavigate();

    const { insertPost, response } = useInsert('posts');
    const { user } = useAuthValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError('');

        if (title.trim() === '' || !image || content.trim() === '' || !tags.length) {
            setFormError('Please fill out all fields');
            return;
        } else if (!image.type.includes('jpg') && !image.type.includes('png') && !image.type.includes('jpeg')) {
            setFormError('Only jpg/png/jpeg images are allowed');
            return;
        }

        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

        const idPost = Math.random().toString(36);

        insertPost(
            {
                title,
                content,
                tagsArray,
                uid: user.uid,
                createdBy: user.displayName,
                idPost,
            },
            {
                uid: user.uid,
                data: image,
                idPost,
            }
        );

        setTimeout(() => {
            navigate('/');
        }, 500);
    };

    return (
        <Container>
            <ContainerCreatePost>
                <form onSubmit={handleSubmit}>
                    <h1>Criar uma postagem</h1>
                    <span>Escreva sobre o que você gosta e compartilhe conosco.</span>
                    <label>
                        <span>Título:</span>
                        <input
                            type="text"
                            name="title"
                            placeholder="Escreva um título legal"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Imagem:</span>
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            placeholder="Insert an image that represents you:"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </label>
                    <label>
                        <span>Comentar</span>
                        <textarea
                            type="text"
                            name="content"
                            placeholder="Fale sobre essa postagem"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Tags:</span>
                        <input
                            type="text"
                            name="tags"
                            placeholder="Insira as tags separadas por vírgulas."
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </label>
                    {!response.loading && <button style={{ width: '8em' }}>Criar</button>}
                    {response.loading && (
                        <button style={{ width: '8em' }} disabled>
                            Loading...
                        </button>
                    )}
                    {response.error && <Error>{response.error}</Error>}
                    {formError && <Error>{formError}</Error>}
                </form>
            </ContainerCreatePost>
        </Container>
    );
};

export default CreatePost;
