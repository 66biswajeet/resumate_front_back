// /backend/testFirestore.js
const { db } = require("./config/firebaseConfig");

async function testFirestore() {
  try {
    const testDoc = await db.collection("testCollection").doc("testDoc").get();
    console.log("Test document data:", testDoc.data());
  } catch (error) {
    console.error("Error testing Firestore connection:", error);
  }
}

testFirestore();
