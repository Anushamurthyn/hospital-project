function appointment()
{

var sn=1;
	var table=document.getElementById('app_table');
	var row=table.insertRow(0);
				var c1=row.insertCell(0);
				c1.innerHTML="Sno";
				var c2=row.insertCell(1);
				c2.innerHTML="health ID";
				var c3=row.insertCell(2);
				c3.innerHTML="Doctor Consulting";
				var c4=row.insertCell(3);
				c4.innerHTML="Status";


				firebase.database().ref("Appointment_record").once('value',function(snapshot){
					    //retrieve one by one
						snapshot.forEach(function(childsnapshot){


							firebase.database().ref("prescription_record").once('value',function(snapshot1){
					    //retrieve one by one
						snapshot1.forEach(function(childsnapshot1){

							var pres_date=childsnapshot1.val().timedata;



						var health_id=childsnapshot.val().health_id;
						var doc_cons=childsnapshot.val().Doctor_consulting;
						var app_status=childsnapshot.val().status;

						var app_date=childsnapshot.val().Appointment_date;

						var datetemp = new Date();
						var month = datetemp.getUTCMonth() +1;
						var day = datetemp.getUTCDate();
						var year = datetemp.getUTCFullYear();

						if (month<10) {
							var cur_date= year+"-0"+month+"-"+day;

						}else{

						var cur_date= year+"-"+month+"-"+day;

				     	}
						if(app_date==cur_date)
						{
							var table=document.getElementById('app_table');

								var row=table.insertRow(sn);
									var c1=row.insertCell(0);
									c1.innerHTML=sn;
									var c2=row.insertCell(1);
									c2.innerHTML=health_id;
									var c3=row.insertCell(2);
									c3.innerHTML=doc_cons;
									var c4=row.insertCell(3);
									c4.innerHTML=app_status;
									sn++;
						}


						if(cur_date==pres_date)
						{
							childsnapshot.ref.update({'status':"completed"});
						}


						
							        
						});
					});

				


						});
					});






						



}

appointment()