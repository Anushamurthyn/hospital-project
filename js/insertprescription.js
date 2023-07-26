function pres_submit()
{
	//avoid auto refresh
	var database = firebase.database().ref('prescription_record');
	var data=database.push();
	var h_id =document.getElementById('int_id').value;
	var i_id =document.getElementById('i_id').value;
	var m_id =document.getElementById('m_id').value;
	var d_id =document.getElementById('d_id').value;



	var datetemp = new Date();
	var month = datetemp.getUTCMonth() +1;
	var day = datetemp.getUTCDate();
	var year = datetemp.getUTCFullYear();

	if (month<10) 
	{
		var cur_date= year+"-0"+month+"-"+day;

	}else{

		var cur_date= year+"-"+month+"-"+day;
		}

	

     data.set({

    	health_id:h_id,
    	illness:i_id,
    	medicine:m_id,
    	duration:d_id,
    	timedata:cur_date
		
	});
	alert("data submitted successfully");
	window.location.reload();
	document.getElementById('p_con').style.display="block";


};