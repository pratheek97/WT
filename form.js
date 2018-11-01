function closeForm()
{
document.getElementById("myForm").style.display="none";	
}

function closeForm1()
{
document.getElementById("myForm1").style.display="none";	
}
function closeForm2()
{
document.getElementById("myForm2").style.display="none";	
}

function openForm(){
	document.getElementById("myForm").style.display="block";
	
}

function openForm1(){
	document.getElementById("myForm1").style.display="block";

}

function openForm2(){
	document.getElementById("myForm2").style.display="block";

}

// Initialize Firebase
   var config = {
    apiKey: "AIzaSyC8AtCcg0H-dttrOh5-7FDktMyC9ezwSlQ",
    authDomain: "jarvis-d69eb.firebaseapp.com",
    databaseURL: "https://jarvis-d69eb.firebaseio.com",
    projectId: "jarvis-d69eb",
    storageBucket: "",
    messagingSenderId: "886248724745"
  };
  firebase.initializeApp(config);


//Refernce message collection
var internRef=firebase.database().ref('Intern');
var fresherRef=firebase.database().ref('Fresher');
var expRef=firebase.database().ref('Experience');

//Listen for the Intern form 
document.getElementById('internForm').addEventListener('submit',submitForm);
document.getElementById('fresherForm').addEventListener('submit',submitForm1);
document.getElementById('experienceForm').addEventListener('submit',submitForm2);


//Submit Form
function submitForm(e)
{
	e.preventDefault();
	var fname=getInputsVal('fname');
	var lname=getInputsVal('lname');
	var email=getInputsVal('email');
	var phone=getInputsVal('phone');
	var apply=getInputsVal('applyintern');
	
	//Save message
	save(fname,lname,email,phone,apply);

}

function submitForm1(e)
{
	e.preventDefault();
	var fname=getInputsVal('fname');
	var lname=getInputsVal('lname');
	var email=getInputsVal('email');
	var phone=getInputsVal('phone');
	var apply=getInputsVal('applyfresher');
	console.log(fname)
	//Save message
	save(fname,lname,email,phone,apply);

}

function submitForm2(e)
{
	e.preventDefault();
	var fname=getInputsVal('fname');
	var lname=getInputsVal('lname');
	var email=getInputsVal('email');
	var phone=getInputsVal('phone');
	var apply=getInputsVal('applyexp');
	
	//Save message
	save(fname,lname,email,phone,apply);

}

//function to get the values

function getInputsVal(id){
	return document.getElementById(id).value;
}


//Save message to firebase database
function save(fname,lname,email,phone,apply){
	var newnameref=internRef.push();
	newnameref.set({
		fname:fname,
		lname:lname,
		email:email,
		phone:phone,
		apply:apply
	})
}

function save2(fname,lname,email,phone,apply){
	var newnameref=fresherRef.push();
	newnameref.set({
		fname:fname,
		lname:lname,
		email:email,
		phone:phone,
		apply:apply
	})
}

function save1(fname,lname,email,phone,apply){
	var newnameref=expRef.push();
	newnameref.set({
		fname:fname,
		lname:lname,
		email:email,
		phone:phone,
		apply:apply
	})
}