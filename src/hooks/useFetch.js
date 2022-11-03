import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, orderBy, onSnapshot, where, doc, getDoc } from 'firebase/firestore';

const useFetch = (docCollection, search = null, uid = null, id = null) => {
    const [documents, setDocuments] = useState(null);
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let q;

                if (search) {
                    q = query(
                        collectionRef,
                        where('tagsArray', 'array-contains', search),
                        orderBy('createdAt', 'desc')
                    );
                } else if (id) {
                    const docRef = await doc(db, docCollection, id);

                    const docSnap = await getDoc(docRef);

                    setDocument(docSnap.data());
                } else if (uid) {
                    q = query(collectionRef, where('uid', '==', uid), orderBy('createdAt', 'desc'));
                } else {
                    q = await query(collectionRef, orderBy('createdAt', 'desc'));
                }

                await onSnapshot(q, (QuerySnapshot) => {
                    setDocuments(QuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                });

                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [docCollection, search, uid, id]);

    return { document, documents, error, loading };
};

export default useFetch;
