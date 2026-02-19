import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { serverTimestamp } from "firebase/firestore";

export async function createBooking(animalId, shelterId, startDate, endDate, pricePerDay) {
  
  const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  const totalPrice = days * pricePerDay;

  await addDoc(collection(db, "bookings"), {
    userId: auth.currentUser.uid,
    animalId,
    shelterId,
    startDate,
    endDate,
    totalPrice,
    status: "pending",
    createdAt: serverTimestamp()
  });
}