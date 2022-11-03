import useQuery from '../../hooks/useQuery';
import useFetch from '../../hooks/useFetch';

import { Container, ContainerPost, Btn } from './styles';

const Post = () => {
    const id = useQuery().get('q');

    const { document: post, loading } = useFetch('posts', null, null, id);
    return (
        <Container>
            {loading && <p>Loading...</p>}
            {post && (
                <ContainerPost>
                    <div>
                        <span>{post.title}</span>
                        <span>{post.createdBy}</span>
                    </div>
                    <img src={post.linkImage} alt={post.title} />
                    <span>{post.content}</span>
                    <div>
                        {post.tagsArray.map((tag) => (
                            <span key={tag}>
                                <span>#</span>
                                {tag + '  '}
                            </span>
                        ))}
                    </div>
                    <Btn to="/">Voltar</Btn>
                </ContainerPost>
            )}
        </Container>
    );
};

export default Post;
