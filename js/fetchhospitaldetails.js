firebase.initializeApp(firebaseConfig);

function fetchhospitaldetail()
{
	document.getElementById('model_con_proc').style.display="block";
	var sn=1;
	var table=document.getElementById('hos_table');
				var row=table.insertRow(0);
				var c1=row.insertCell(0);
				c1.innerHTML="Hospital Name";
				var c2=row.insertCell(1);
				c2.innerHTML="Hospital Registraion Number";
				var c3=row.insertCell(2);
				c3.innerHTML="Hospital status";
				var c4=row.insertCell(3);
				c4.innerHTML="Address";

	// fetch the details
	firebase.database().ref("Hospital_record").once('value',function(snapshot){
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			
				// fetch the extra details
				var hos_name=childsnapshot.val().hospital_name;
				var hos_reg=childsnapshot.val().hospital_registration_number;
				var hos_status=childsnapshot.val().status;
				var hos_address=childsnapshot.val().hospital_address;
				//create table to display
				var table=document.getElementById('hos_table');
				var row=table.insertRow(sn);
				var c1=row.insertCell(0);
				c1.innerHTML=hos_name;
				var c2=row.insertCell(1);
				c2.innerHTML=hos_reg;
				var c3=row.insertCell(2);
				c3.innerHTML=hos_status;
				var c4=row.insertCell(3);
				c4.innerHTML=hos_address;
				sn++;
				document.getElementById('model_con_proc').style.display="none";
			});
		});
	document.getElementById('model_con_proc').style.display="none";
}

fetchhospitaldetail();
