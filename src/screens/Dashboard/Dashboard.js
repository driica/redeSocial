import {
    Container,
    EditMessage,
    ContainerError,
    BtnCreate,
    ContainerPosts,
    ContainerHeader,
    ContainerPost,
    BtnEdit,
} from './styles';

import { useAuthValue } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import useDelete from '../../hooks/useDelete';

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    const { deletePost, response } = useDelete('posts');

    const { documents: posts, loading } = useFetch('posts', null, uid);

    return (
        <Container>
            <h1>Dashboard</h1>
            <EditMessage>Edite suas postagens</EditMessage>
            {loading && <p>Loading...</p>}
            {posts && posts.length === 0 ? (
                <ContainerError>
                    <span>Você não tem postagens criadas.</span>
                    <span>Vamos criar um post?</span>
                    <BtnCreate to="/posts/create">Criar</BtnCreate>
                </ContainerError>
            ) : (
                <ContainerPosts>
                    <ContainerHeader>
                        <span>Título</span>
                        <span>Ações</span>
                    </ContainerHeader>
                    {posts &&
                        posts.map((post) => (
                            <ContainerPost key={post.id}>
                                <div>
                                    <span>{post.title}</span>
                                    <div>
                                        <BtnEdit to={`/posts?q=${post.id}`}>Ler</BtnEdit>
                                        <BtnEdit to={`/posts/edit?q=${post.id}`}>Editar</BtnEdit>
                                        <button onClick={() => deletePost(post.idPost, post.id)}>
                                            {response.loading ? 'Loading' : 'Excluír'}
                                        </button>
                                    </div>
                                </div>
                            </ContainerPost>
                        ))}
                </ContainerPosts>
            )}
        </Container>
    );
};

export default Dashboard;
