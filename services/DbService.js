// all of our firestore functionality 
import { collection, addDoc, getDocs, query, orderBy, } from "firebase/firestore";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

// * : create new list itm function 
export const createNewBucketItem = async (item) => {

    try {

        // the addDoc it adding a new document and we need to specify where to add it - to a collection in our db - imported at the top -should pop up
        // * to create a user -----------------------------------------------------------------------
        // docref - our reference to our newly created document (brand ne with a self-generated ID)
        const docRef = await addDoc(collection(db, "items"), item);
        console.log("Document written with ID: ", docRef.id);
        // * : to navigate back to previous screen after filling in info
        return true //  be more specific on why 
        // we cant ascces the info yet
        // console.log("document written with first: ", docRef.first);
    } catch (e) {
        console.error("Error adding document: ", e);
        // * : to navigate back to previous screen after filling in info
        return false
    }

}

// todo : get all list items function
// you past the code from the documentation and move the import
export const getMyBucketList = async () => {
    // getDocs - get all the docs in our collection (optional where - that you can add)

    // * create variable for all items ------------------------------------------------------------
    var allItems = [] // this is out array we want to return

    // to filter the order - making custom query 
    var q = query(collection(db, "items"), orderBy('priority', "desc"))
    const querySnapshot = await getDocs(q);
    // const querySnapshot = await getDocs(collection(db, "items")); // changed defualt to the collection we want - items : Without order
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        allItems.push({ ...doc.data(), id: doc.id }) // push each docs data to the array i want to return
    });
    // can't just use query snapshot as the array of items - need to access .data()

    // once its done wwe want to return all items - as an array
    // console.log(allItems)
    // the return is being called in the list screen
    return allItems
}


// TODO : Get single Item 
// possable method
// 1. get id of the item you pressed
// 2. have that item id = var
// 3. have the var being called in the getDoc
export const getBucketItem = async () => {
    // const id = query(collection(db,"items"))

    const docRef = doc(db, "items", "9X6N9ZOn1rqUJ6TcbZ1j");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}