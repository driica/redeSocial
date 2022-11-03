import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SearchForm, ContainerSearch, ContainerPosts, BtnLink, Container } from './styles';
import { useState } from 'react';
import CardPost from '../../components/UI/CardPost/CardPost';

const Home = () => {
    const [searched, setSearched] = useState('');
    const { documents: posts, error, loading } = useFetch('posts');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searched) {
            return navigate(`/search?q=${searched}`);
        }
    };

    return (
        <Container hasPosts={posts && posts.length === 0}>
            <ContainerSearch>
                <h1>Postagens recentes</h1>
                <SearchForm onSubmit={handleSubmit}>
                    <input type="text" placeholder="Pesquisar por tags..." onChange={(e) => setSearched(e.target.value)} />
                    <button>Search</button>
                </SearchForm>
            </ContainerSearch>
            <ContainerPosts>
                {error && <p>{error}</p>}
                {posts && posts.map((post) => <CardPost post={post} key={post.title}></CardPost>)}
                {!loading && posts && posts.length === 0 && (
                    <div>
                        <p>Nenhuma postagem encontrada...</p>
                        <BtnLink to="/posts/create">Criar um novo post</BtnLink>
                    </div>
                )}
            </ContainerPosts>
            {loading && <p>Loading...</p>}
        </Container>
    );
};

export default Home;
