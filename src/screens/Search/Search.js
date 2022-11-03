import useFetch from '../../hooks/useFetch';
import useQuery from '../../hooks/useQuery';
import CardPost from '../../components/UI/CardPost/CardPost';
import { Container, ContainerResult, Btn } from './styles';

const Search = () => {
    const URL = useQuery().get('q');

    const { documents: posts } = useFetch('posts', URL);

    console.log(posts);

    return (
        <Container>
            <ContainerResult>
                <h2>Resultado da pesquisa:</h2>
                {posts && posts.length !== 0 && <span>There were {posts.length} results found for your tag.</span>}
                {posts && posts.length === 0 && (
                    <div>
                        <span>Não foram encontrados resultados para a sua tag.</span>
                        <Btn to="/">Voltar</Btn>
                    </div>
                )}
            </ContainerResult>
            <div>{posts && posts.map((post) => <CardPost key={post.id} post={post} />)}</div>
        </Container>
    );
};

export default Search;
