import { useReducer } from 'react';
import { db, storage } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const initialState = {
    loading: null,
    error: null,
};

const insertReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                error: null,
            };
        case 'ERROR':
            return {
                loading: null,
                error: action.message,
            };
        case 'SUCCESS':
            return {
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

const useInsert = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    const insertPost = async (post, image) => {
        dispatch({ type: 'LOADING' });
        try {
            const imageRef = ref(storage, `images/${image.idPost}`);

            await uploadBytes(imageRef, image.data);

            const url = await getDownloadURL(imageRef);

            const newPost = { ...post, linkImage: url, createdAt: Timestamp.now() };

            const insertedPost = await addDoc(collection(db, docCollection), newPost);

            dispatch({ type: 'SUCCESS', message: insertedPost });
        } catch (error) {
            dispatch({ type: 'ERROR', message: error.message });
        }
    };

    return { insertPost, response };
};

export default useInsert;
