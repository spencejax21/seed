import { database } from '../firebaseConfig';
import { collection, doc, getDocs } from "firebase/firestore";

export default class DatabaseManager{
    static getTasks = async (type) => {
        //console.log(type);
        const tasks = [];
        const querySnapshot = await getDocs(collection(database, "tasks", type, "list"));
        querySnapshot.forEach((doc) => {
            tasks.push({text: doc.data().text, points: doc.data().points});
            //console.log(doc.id, " => ", doc.data());
        });
        //console.log(tasks);
        return tasks;
      }
}

