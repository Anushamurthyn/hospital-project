firebase.initializeApp(firebaseConfig);


var database = firebase.database().ref('Hospital_record');
$('#pd_data').submit(function(e){
	document.getElementById('model_con_proc').style.display="block";
	//avoid auto refresh
	e.preventDefault();
	var data=database.push();
	data.set({
		hospital_name:$('#h_name').val(),
		hospital_registration_number: $('#r_reg_no').val(),
		director_pan: $('#d_pan_no').val(),
		director_name: $('#d_name').val(),
		hospital_address: $('#h_address').val(),
		id: $('#hidden_user').val(),
		status: "deactive"
	});
	alert("data submitted successfully");
	document.getElementById('model_con_proc').style.display="none";
	window.location.href="file:///C:/Users/Anusha/Desktop/fullstackweb/centralized_hospital_project/templete/dashbord.html";

});