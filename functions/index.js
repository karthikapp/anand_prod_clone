const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

var db = admin.database();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.similarCompanies = functions.database.ref('/accounts')
.onUpdate((change,context) => {
	var industrytype = context.params.industrytype;
	var companytype = context.params.companytype;

	var combinedtype = industrytype + companytype
	console.log(combinedtype)
})



