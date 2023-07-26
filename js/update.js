firebase.initializeApp(firebaseConfig);

function fetchforupdate()
{
	document.getElementById('model_con_proc').style.display="block";
	// fetch the details
	firebase.database().ref("Hospital_record").once('value',function(snapshot){
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			// fetch database id
			var d_id=childsnapshot.val().id;
			//fetch the active user
			var a_id=document.getElementById('hidden_user').value;
			if(d_id==a_id){
				
				// fetch the extra details
				var hos_name=childsnapshot.val().hospital_name;
				var hos_reg=childsnapshot.val().hospital_registration_number;
				var dir_pan=childsnapshot.val().director_pan;
				var dir_name=childsnapshot.val().director_name;
				var hos_address=childsnapshot.val().hospital_address;


				
				// set into paragraph
				document.getElementById('hospital_name').value=hos_name;
				document.getElementById('hospital_registration_number').value=hos_reg;
				document.getElementById('director_pan').value=dir_pan;
				document.getElementById('director_name').value=dir_name;
				document.getElementById('hospital_address').value=hos_address;
				document.getElementById('model_con_proc').style.display="none";





			}
		});
		document.getElementById('model_con_proc').style.display="none";
	});

}

fetchforupdate()
