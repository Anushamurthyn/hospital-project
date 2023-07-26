

function activate()
{
	document.getElementById('model_con_proc').style.display="block";

firebase.database().ref("Hospital_record").once('value',function(snapshot){
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			// fetch database id
			var h_reg=childsnapshot.val().hospital_registration_number;
			//fetch the active user
			var i_reg=document.getElementById('h_reg_no').value;
			if(h_reg==i_reg)
			{
				childsnapshot.ref.update({'status':"active"});
				alert("Hospital Activated");
				document.getElementById('model_con_proc').style.display="none";
				window.location.reload();
			}
		});
	});
}



function deactivate()
{

firebase.database().ref("Hospital_record").once('value',function(snapshot){
	document.getElementById('model_con_proc').style.display="block";
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			// fetch database id
			var h_reg=childsnapshot.val().hospital_registration_number;
			//fetch the active user
			var i_reg=document.getElementById('h_reg_no').value;
			if(h_reg==i_reg)
			{
				childsnapshot.ref.update({'status':"deactive"});
				document.getElementById('model_con_proc').style.display="none";
				alert("Hospital Deactivated");
				window.location.reload();
			}
		});
	});
}