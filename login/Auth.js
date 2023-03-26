import { database } from '../firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 

const addNewUser = async (user, pass, setInvalid) => {

    await setDoc(doc(database, "users", user), {
        'username': user,
    });

}

export { addNewUser }