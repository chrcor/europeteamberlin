// Main.js

window.onload = function ()
{
	//console.log('Dokument geladen');
	render_date();
}

function format_date_d_m(){
	
	function get_next_date(){
		var d = new Date();
		d.setDate(d.getDate() + (3 + 7 - d.getDay()) % 7);
		return d;
	}
	
	var d = get_next_date();
	var day = d.getDate();
	var month = (d.getMonth()+1).toString();

	if (month > 10 || month < 4){
		return "Frühjahr 2021"
	}

	if(month.length==1){
		return day+".0"+month;
	}
	return day+"."+month;
}

function render_date(){
	document.getElementById('date_placeholder').innerHTML += format_date_d_m();
}