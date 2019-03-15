// Initialize Firebase
var config = {
    apiKey: "AIzaSyAiF_D3wKvTxjFOw1MhUH8yad-MdMIk5os",
    authDomain: "coderbay-4caa2.firebaseapp.com",
    databaseURL: "https://coderbay-4caa2.firebaseio.com",
    projectId: "coderbay-4caa2",
    storageBucket: "coderbay-4caa2.appspot.com",
    messagingSenderId: "516782442624"
  };
  firebase.initializeApp(config);


// alerts for employee added
// -error alert if failure

// onsubmit of form
// -send to firebase
// -update table in html (rebuild from database.snapshot)
// -clear form (or reset defaults/placeholders)

// form fields
// -name *required
// -role*required
// -start date *required
// monthly rate *required

// only in table:
// months worked- calculated
// total billed -calculated

// jumbotron that looks pretty


// local variables:
// name
// role
// startDate
// monthlyRate
// monthsWorked
// totalBilled


// bonus: delete a record from table >> deletes from database (.remove())