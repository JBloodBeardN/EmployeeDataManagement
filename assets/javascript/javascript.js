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
    
    var name;
    var role;
    var startDate;
    var monthlyRate;
    var monthsWorked;
    var totalBilled;
    
    
    var database = firebase.database();
    
    // Initial Values
    var name = "";
    var role = "";
    var startDate = "";
    var monthlyRate = 0;
    
    $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
    
    // Grabbed values from text boxes
    name = $("#emplyee-name-input").val("");
    role = $("#role-input").val("");
    startDate = $("#start-input").val("");
    monthlyRate = $("#rate-input").val("");
    //nothing in ref means we are using the root
    // Code for handling the push
    database.ref().push({
    name: name,
    role: role,
    start: startDate,
    rate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    
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
    
    
    function sendRecordToFirebase(arrayObject){
    // stuff for sending to database.ref().set() stuff
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
    // >>append all to this <tr>
    // >>append tr to <tbody>
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
