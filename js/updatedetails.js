function update()
{
	document.getElementById('model_con_proc').style.display="block";
	//step1 fetch the updated details
	var up_name=document.getElementById('hospital_name').value;
	var up_reg=document.getElementById('hospital_registration_number').value;
	var up_dir_pan=document.getElementById('director_pan').value;
	var up_dir_name=document.getElementById('director_name').value;
	var up_address=document.getElementById('hospital_address').value;

	//connect the database to update
	firebase.database().ref("Hospital_record").once('value',function(snapshot){
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			// fetch database id
			var d_id=childsnapshot.val().id;
			//fetch the active user
			var a_id=document.getElementById('hidden_user').value;
			if(d_id==a_id){
				
				childsnapshot.ref.update({'hospital_name':up_name});
				childsnapshot.ref.update({'hospital_registration_number':up_reg});
				childsnapshot.ref.update({'director_pan':up_dir_pan});
				childsnapshot.ref.update({'director_name':up_dir_name});
				childsnapshot.ref.update({'hospital_address':up_address});

				





			}
		});
		alert('data update sucessfuly');
		document.getElementById('model_con_proc').style.display="none";
		window.location.href="../templete/dashbord.html";
	});


}