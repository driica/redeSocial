import formSignImg2 from '../../assets/ilustration/formSignUp2.jpg';
import { Container, Error } from '../../globalStyles';
import { useState, useEffect } from 'react';
import useAuthentication from '../../hooks/useAuthentication';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const { createUser, error: authError, loading } = useAuthentication();

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        const user = {
            displayName: username,
            email: email,
            password: password,
        };

        createUser(user);
    };

    return (
        <Container>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Registre-se</h1>
                    <span>Crie seu usuário e compartilhe suas experiências.</span>
                    <label>
                        <span>Username:</span>
                        <input
                            type="text"
                            name="username"
                            required
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="User E-mail"
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
                            placeholder="Digite a senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Confirme a senha:</span>
                        <input
                            autoComplete="on"
                            type="password"
                            name="confirmedPassword"
                            required
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    {!loading && <button>Registrar</button>}
                    {loading && <button disabled>Loading...</button>}
                    {error && <Error>{error}</Error>}
                </form>
                <section>
                    <img src={formSignImg2} alt="Registered" />
                </section>
            </div>
        </Container>
    );
};

export default Register;
