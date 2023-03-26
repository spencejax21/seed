import { database } from '../firebaseConfig';
import { collection, doc, getDocs } from "firebase/firestore";

export default class DatabaseManager{
    static getTasks = async (type) => {
        if(type == "all"){
            const tasks = [];
            const querySnapshotA = await getDocs(collection(database, "tasks", "home", "list"));
            querySnapshotA.forEach((doc) => {
                tasks.push({text: doc.data().text, points: doc.data().points});
                //console.log(doc.id, " => ", doc.data());
            });
            const querySnapshotB = await getDocs(collection(database, "tasks", "transportation", "list"));
            querySnapshotB.forEach((doc) => {
                tasks.push({text: doc.data().text, points: doc.data().points});
                //console.log(doc.id, " => ", doc.data());
            });
            const querySnapshotC = await getDocs(collection(database, "tasks", "reuse", "list"));
            querySnapshotC.forEach((doc) => {
                tasks.push({text: doc.data().text, points: doc.data().points});
                //console.log(doc.id, " => ", doc.data());
            });
            //console.log(tasks);
            return tasks;
        }else{
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
}

