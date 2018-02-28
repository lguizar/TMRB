$('#show').click(function(){
	console.log("Button clicked");
    var dialog = document.getElementById('window');  

        dialog.show();  

});

$('#exit').click(function(){
	console.log("Button clicked");
	var dialog = document.getElementById('window');

		dialog.close();

});