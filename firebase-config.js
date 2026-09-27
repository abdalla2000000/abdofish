const firebaseConfig = {
  apiKey: "ضع_هنا_مفتاح_API",
  authDomain: "ضع_هنا_authDomain",
  projectId: "ضع_هنا_projectId",
  storageBucket: "ضع_هنا_storageBucket",
  messagingSenderId: "ضع_هنا_messagingSenderId",
  appId: "ضع_هنا_appId"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();