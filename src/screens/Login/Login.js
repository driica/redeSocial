import formSignImg2 from '../../assets/ilustration/formSignUp2.jpg';
import { Container, Error } from '../../globalStyles';
import useAuthentication from '../../hooks/useAuthentication';
import { useState, useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login, error: authError, loading } = useAuthentication();

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields');
            return;
        }

        const user = {
            email: email,
            password: password,
        };

        login(user);
    };

    return (
        <Container>
            <div style={{ minHeight: '450px' }}>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar na rede social</h1>
                    <span>Faça login e compartilhe suas experiências.</span>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Digite seu E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input
                            autoComplete="on"
                            type="password"
                            name="password"
                            required
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {!loading && <button>Entrar</button>}
                    {loading && <button disabled>Loading...</button>}
                    {error && <Error>{error}</Error>}
                </form>
                <section>
                    <img src={formSignImg2} alt={'Descriptive'} />
                </section>
            </div>
        </Container>
    );
};

export default Login;
