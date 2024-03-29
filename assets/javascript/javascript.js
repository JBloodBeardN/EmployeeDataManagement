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

var database = firebase.database();

var name;
var role;
var startDate;
var monthlyRate;
var monthsWorked;
var totalBilled;

var database = firebase.database();



$("#add-user").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#startDate-input").val().trim();
    monthlyRate = $("#monthlyRate-input").val().trim();
    var array = [name, role, startDate, monthlyRate];
    sendRecondToFirebase(array);
    

  });

database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#role-display").text(sv.role);
    $("#startDate-display").text(sv.startDate);
    $("#monthlyRate-display").text(sv.monthlyRate);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


$('#add-employee-btn').on("click", function(e){
    e.preventDefault();
    name = $('#employee-name-input').val();
    role = $('#employee-name-input').val();
    startDate = $('#employee-name-input').val();
    monthlyRate = $('#employee-name-input').val();
    var arrayToFirebase = [name, role, startDate, monthlyRate];
    sendRecondToFirebase(arrayToFirebase);
    alert("Employee "+name+" added to database.");

function sendRecordToFirebase(arrayObject){
    database.ref().push({
        name: arrayObject[0],
        role: arrayObject[1],
        startDate: arrayObject[2],
        monthlyRate: arrayObject[3],
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
}

// onsubmit of form (onClick of #add-employee-btn)
// preventDefault();
// -set local variables equal to $(#inputID)
// -sendRecordToFirebase();
// alerts for employee added
// -clear form (or reset defaults/placeholders)

// onChildAdded ()
// function updateTableInHTML();

// local variables:
// name 
// role
// startDate
// monthlyRate
// monthsWorked
// totalBilled

// needed functions:
// function updateTableInHTML(object)
// -build a <tr> element 
//  >>append all to this <tr> 
//  >>append tr to <tbody>
// -print object to HTML field

// function sendRecordToFireBase()
// 

// form fields
// #name *required
// #role*required
// #startDate *required
// #monthlyRate *required

// only in table:
// #monthsWorked- calculated
// #totalBilled -calculated

// jumbotron that looks pretty






// bonus: delete a record from table >> deletes from database (.remove())
