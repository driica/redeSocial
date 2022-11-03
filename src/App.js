import { useState, useEffect } from 'react';
import useAuthentication from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyle } from './globalStyles';

import { Navbar } from './components/layout/Header/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import Paths from './routes';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => setUser(user));
    }, [auth]);

    return (
        <AuthProvider value={{ user }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Container>
                    <Navbar themeToggle={themeToggle} />
                    {user === undefined && <p>Loading...</p>}
                    <Paths />
                    <Footer />
                    <GlobalStyle />
                </Container>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
