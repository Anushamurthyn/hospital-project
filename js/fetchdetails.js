firebase.initializeApp(firebaseConfig);

function fetchpersonaldetail()
{
	
	// fetch the details
	firebase.database().ref("Hospital_record").once('value',function(snapshot){
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			// fetch database id
			var d_id=childsnapshot.val().id;
			//fetch the active user
			var a_id=document.getElementById('hidden_user').value;
			if(a_id=="")
			{
				document.getElementById('model_con_pd').style.display="none";
				document.getElementById('model_con').style.display="block";
			}
			
			if(d_id==a_id){
				document.getElementById('model_con_pd').style.display="none";
				// fetch the extra details
				var hos_name=childsnapshot.val().hospital_name;
				var hos_reg=childsnapshot.val().hospital_registration_number;
				var dir_pan=childsnapshot.val().director_pan;
				var dir_name=childsnapshot.val().director_name;
				var hos_address=childsnapshot.val().hospital_address;


				//fetch status
				var status=childsnapshot.val().status;
				if(status=="deactive")
				{
					document.getElementById('f_btn').disabled=true;
					document.getElementById('p_btn').disabled=true;
				}

				// set into paragraph
				document.getElementById('hospital_name').innerHTML="Hospital Name:"+hos_name;
				document.getElementById('hospital_registration_number').innerHTML="Hospital Registration Number:"+hos_reg;
				document.getElementById('director_pan').innerHTML="Director Pan Number:"+dir_pan;
				document.getElementById('director_name').innerHTML="Director Name:"+dir_name;
				document.getElementById('hospital_address').innerHTML="Hospital Address:"+hos_address;





			}
		});
	});

}

fetchpersonaldetail()
