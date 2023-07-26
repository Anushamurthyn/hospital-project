firebase.initializeApp(firebaseConfig);


var database = firebase.database().ref('Appointment_record');
$('#app_data').submit(function(e){
	
	
	//avoid auto refresh
	e.preventDefault();
	var data=database.push();
	data.set({
		health_id:$('#ah_id').val(),
		Appointment_date: $('#app_date').val(),
		Doctor_consulting: $('#doc_cons').val(),
		
		status: "pending"
	});
	alert("data submitted successfully");
	
	window.location.reload();

});