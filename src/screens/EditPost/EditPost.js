import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import useUpdate from '../../hooks/useUpdate';
import useFetch from '../../hooks/useFetch';
import useQuery from '../../hooks/useQuery';

import { Container, Error } from '../../globalStyles';
import { ContainerCreatePost, TitleImage } from './styles';

const EditPost = () => {
    const URL = useQuery().get('q');
    const { document: post } = useFetch('posts', null, null, URL);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);

            const textTags = post.tagsArray.join(', ');
            setTags(textTags);
        }
    }, [post]);

    const { updatePost, response } = useUpdate('posts');
    const { user } = useAuthValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError('');

        if (title.trim() === '' || content.trim() === '' || !tags.length) {
            setFormError('Please fill out all fields');
            return;
        } else if (image) {
            if (!image.type.includes('jpg') && !image.type.includes('png') && !image.type.includes('jpeg')) {
                setFormError('Only jpg/png/jpeg images are allowed');
                return;
            }
        }

        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

        const idPost = Math.random().toString(36);

        const data = {
            title,
            content,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
            idPost,
        };
        let imageData;

        if (image) {
            imageData = { uid: user.uid, data: image, idPost };
        }

        updatePost(URL, data, imageData);

        setTimeout(() => {
            navigate('/dashboard');
        }, 500);
    };

    return (
        <Container>
            {post && (
                <ContainerCreatePost>
                    <form onSubmit={handleSubmit}>
                        <h1>Edit your post</h1>
                        <span>Change the post data as you like</span>
                        <label>
                            <span>Title:</span>
                            <input
                                type="text"
                                name="title"
                                placeholder="Write a cool title:"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Image:</span>
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                placeholder="Insert an image that represents you:"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label>
                        <TitleImage>Current image preview:</TitleImage>
                        <img src={post.linkImage} alt="Current preview" />
                        <label>
                            <span>Content:</span>
                            <textarea
                                type="text"
                                name="content"
                                placeholder="Talk about this post:"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input
                                type="text"
                                name="tags"
                                placeholder="Enter tags separated by comma:"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </label>
                        {!response.loading && <button style={{ width: '8em' }}>Create</button>}
                        {response.loading && (
                            <button style={{ width: '8em' }} disabled>
                                Loading...
                            </button>
                        )}
                        {response.error && <Error>{response.error}</Error>}
                        {formError && <Error>{formError}</Error>}
                    </form>
                </ContainerCreatePost>
            )}
        </Container>
    );
};

export default EditPost;
