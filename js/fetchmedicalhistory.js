

function fetch()
{
	var sn=1;
	var table=document.getElementById('med_table');
				var row=table.insertRow(0);
				var c1=row.insertCell(0);
				c1.innerHTML="Sno";
				var c2=row.insertCell(1);
				c2.innerHTML="Illness";
				var c3=row.insertCell(2);
				c3.innerHTML="Hospital Reporting date";
				var c4=row.insertCell(3);
				c4.innerHTML="Hospital name";
				var c5=row.insertCell(4);
				c5.innerHTML="Prescription";
				var c6=row.insertCell(5);
				c6.innerHTML="Treatment Duration";


		firebase.database().ref("prescription_record").once('value',function(snapshot){
	    //retrieve one by one
		snapshot.forEach(function(childsnapshot){
			
				// fetch the extra details
				var h_id=childsnapshot.val().health_id;
				var int_id=document.getElementById('int_id').value;
				if(h_id==int_id)
				{
				    	//fetch the hospital name based on active id
						firebase.database().ref("Hospital_record").once('value',function(snapshot1){
					    //retrieve one by one
						snapshot1.forEach(function(childsnapshot1){
							
								// fetch the extra details
								var h_id=document.getElementById('hidden_user').value;
								var d_id=childsnapshot1.val().id;
								if(d_id==h_id)
								{
									var h_name=childsnapshot1.val().hospital_name;
									var illness=childsnapshot.val().illness;
									var prescription=childsnapshot.val().medicine;
									var duration=childsnapshot.val().duration;
									var timedata=childsnapshot.val().timedata;


									//create table to display
									var table=document.getElementById('med_table');
									var row=table.insertRow(sn);
									var c1=row.insertCell(0);
									c1.innerHTML=sn;
									var c2=row.insertCell(1);
									c2.innerHTML=illness;
									var c3=row.insertCell(2);
									c3.innerHTML=timedata;
									var c4=row.insertCell(3);
									c4.innerHTML=h_name;
									var c5=row.insertCell(4);
									c5.innerHTML=prescription;
									var c6=row.insertCell(5);
									c6.innerHTML=duration;
									sn++;
									//set the data in the table
								}
								
								
								//display in a table
							});
						});

				
				}

			});
		});
}
