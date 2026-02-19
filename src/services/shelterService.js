import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function getShelters() {
  const snapshot = await getDocs(collection(db, "shelters"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}