function newuser()
{
	document.getElementById('model_con_proc').style.display="block";
	document.getElementById("login_con").style.display="none";
	document.getElementById("signup_con").style.display="block";
	document.getElementById('model_con_proc').style.display="none";
}

function login()
{
	document.getElementById('model_con_proc').style.display="block";

	var l_userid=document.getElementById("l_userid").value;
	var l_password=document.getElementById("l_password").value;
	var n_captcha = document.getElementById("n_captcha").value;
	var hidden_captcha = document.getElementById("hidden_captcha").value;

	if (n_captcha==hidden_captcha) {

		firebase.auth().signInWithEmailAndPassword(l_userid,l_password).then((success)=>{

			alert("login successfuly");
			document.getElementById('model_con_proc').style.display="none";


			window.location.reload();
		}).catch((error)=>{
			alert("wrong credentials");
		});

	}

	else
	{
		alert("invalid captcha");
	}
}

function createacc(){

	document.getElementById('model_con_proc').style.display="block";
	var s_userid=document.getElementById("s_userid").value;
	var s_password=document.getElementById("s_password").value;

	var captcha=document.getElementById('captcha').value;
	var n_captcha=document.getElementById('n_captcha').value;
	

	if(captcha==n_captcha)
 {
 	alert('captcha correct');
 }

	//createaccount

	//step1 connet to google server-connection.js
	//step2 push the data
	firebase.auth().createUserWithEmailAndPassword(s_userid,s_password).then((success)=>{
		

		alert("account created successfuly");
		document.getElementById('model_con_proc').style.display="none";


	}).catch((error)=>{
		
		alert("something went wrong");
		document.getElementById('model_con_proc').style.display="none";


	});
	
	document.getElementById("signup_con").style.display="none";
	document.getElementById("verification_con").style.display="block";
	
}

function sendemail()
{
	document.getElementById('model_con_proc').style.display="block";

	//fetch the useremail
	var user=firebase.auth().currentUser;
	//send email
	user.sendEmailVerification().then((success)=>{

		alert("mail sent successfuly");
		document.getElementById('model_con_proc').style.display="none";


	}).catch((error)=>{
		alert("email not found");
		document.getElementById('model_con_proc').style.display="none";

	});

}
function logout()
{	
	
	authentication.signOut();
	alert("logout successfuly");

	window.location.reload();
	
}
function loginback()
{
	window.location.href="../index.html";
}
function submit()
{
	window.location.href="../templete/details.html";
}

function printout()
{
	print();
}
function new_opd()
{
	window.location.href="../templete/patient_registration.html";
}
 function refresh()
 {
 	var n1=Math.ceil(Math.random()*10)+'';
	var n2=Math.ceil(Math.random()*10)+'';
	var n3=Math.ceil(Math.random()*10)+'';
	var n4=Math.ceil(Math.random()*10)+'';

	var rand_id = n1+n2+n3+n4;

	document.getElementById('captcha').innerHTML=rand_id;
	document.getElementById('hidden_captcha').value=rand_id;
 }
function app()
{
	window.location.href="../templete/appointment.html";

}

function openupdate()
{
	window.location.href="../templete/update.html";
}
