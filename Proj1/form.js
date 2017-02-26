function setup() {
	var table = '';
		var rows =2;
		var cols  =3;
		for(var r = 0; r<rows; r++){
			table +='<tr>';			
			for (var c = 1; c <= cols ; c++){
				table += '<td>'+ c + '</td>';
			}			
			table += '</tr>';
		}
		document.write('<table border =1>' +table +'</table>')
}
setup();