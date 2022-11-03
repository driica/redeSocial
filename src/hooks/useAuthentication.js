import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth';

import { useState } from 'react';

const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const auth = getAuth();

    const createUser = async (data) => {
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(user, { displayName: data.displayName });

            return user;
        } catch (error) {
            if (error.message.includes('password')) {
                setError('A senha deve ter pelo menos 6 caracteres');
            } else if (error.message.includes('email')) {
                setError('O e-mail já está cadastrado');
            } else {
                setError('Algo deu errado');
            }
        }

        setLoading(false);
    };

    const logout = () => {
        signOut(auth);
    };

    const login = async (data) => {
        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (error) {
            if (error.message.includes('user-not-found')) {
                setError('Usuário não encontrado');
            } else if (error.message.includes('wrong-password')) {
                setError('Senha incorreta');
            } else {
                setError('Algo deu errado');
            }
        }

        setLoading(false);
    };

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
};

export default useAuthentication;
