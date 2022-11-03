import { useReducer } from 'react';
import { db, storage } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const initialState = {
    loading: null,
    error: null,
};

const updateReducer = (state, action) => {
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

const useUpdate = (docCollection) => {
    const [response, dispatch] = useReducer(updateReducer, initialState);

    const updatePost = async (id, data, image = null) => {
        dispatch({ type: 'LOADING' });
        try {
            if (image) {
                const imageRef = await ref(storage, `images/${image.idPost}`);
                await uploadBytes(imageRef, image.data);
                const url = await getDownloadURL(imageRef);

                const newPost = { ...data, linkImage: url };
                const updatedPost = await updateDoc(doc(db, docCollection, id), newPost);

                dispatch({ type: 'SUCCESS', message: updatedPost });
            } else {
                const updatedPost = await updateDoc(doc(db, docCollection, id), data);
                dispatch({ type: 'SUCCESS', message: updatedPost });
            }
        } catch (error) {
            dispatch({ type: 'ERROR', message: error.message });
        }
    };

    return { updatePost, response };
};

export default useUpdate;
