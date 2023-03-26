import { database } from '../firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore"; 

const addNewUser = async (user) => {

    const docRef = doc(database, "users", user);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        await setDoc(doc(database, "users", user), {
            'username': user,
            'points': 0
        });
    } 
}

export { addNewUser }