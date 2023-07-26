firebase.initializeApp(firebaseConfig);


var database = firebase.database().ref('patient_details');

$('#new_data').submit(function(e){
	//avoid auto refresh
	document.getElementById('model_con_proc').style.display="block";
	e.preventDefault();
	//generate health id no
	var n1=Math.ceil(Math.random()*10)+'';
	var n2=Math.ceil(Math.random()*10)+'';
	var n3=Math.ceil(Math.random()*10)+'';
	var n4=Math.ceil(Math.random()*10)+'';

	var health_id = n1+n2+n3+n4;
	//display the temporary health id
	//set the data

	document.getElementById('n_name').innerHTML="name"+ document.getElementById('p_nickname').value;
	document.getElementById('n_health_id').innerHTML=health_id;

	// display the health card
	document.getElementById('health_con').style.display="block";



	var data=database.push();
	data.set({
		patientname:$('#p_nickname').val(),
		parentname: $('#parent_name').val(),
		parentcontact: $('#parent_contact').val(),
		healthid: health_id
	});
	alert("data submitted successfully");
	document.getElementById('model_con_proc').style.display="none";
});