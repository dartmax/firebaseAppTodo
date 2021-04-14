import { db } from './firebase';

export function get(collection){
  return db.collection(collection)
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items
    })
    .catch(error => {
      console.error("Error adding document: ", error)
    })
}