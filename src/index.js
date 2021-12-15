import {  initializeApp  } from 'firebase/app';
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIB25UqGBKXATfczWXZp9r5lg2E3U8nzk",
    authDomain: "fir-9-d4134.firebaseapp.com",
    projectId: "fir-9-d4134",
    storageBucket: "fir-9-d4134.appspot.com",
    messagingSenderId: "196306567884",
    appId: "1:196306567884:web:1ad8d22f811297d3ec3869"
  };

  // initializing app
  initializeApp(firebaseConfig);

  // init service
  const db = getFirestore();

  // get collection
  const refColl = collection(db, 'books');

  // get docs
  getDocs(refColl)
  .then((snapshot)=>{
      let books = []
      snapshot.docs.forEach(doc=>{
          books.push({ ...doc.data(), id: doc.id });
      });
      console.log(books);
  })