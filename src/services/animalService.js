import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { serverTimestamp } from "firebase/firestore";

export async function addAnimal(name, type, age, notes) {
  await addDoc(collection(db, "animals"), {
    ownerId: auth.currentUser.uid,
    name,
    type,
    age,
    notes,
    createdAt: serverTimestamp()
  });
}