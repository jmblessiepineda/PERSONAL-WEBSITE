	function postBlog() 
	{
		console.log('test');
		var input_name = document.getElementById('input_name').value;
		var input_email= document.getElementById('input_email').value;
		var input_subject=document.getElementById('input_subject').value;
		var input_message=document.getElementById('input_message').value;
		var date_today = new Date();

		document.getElementById('Name').innerHTML = input_name + 
		'<br>'+ date_today;
		document.getElementById('Email').innerHTML = input_email;
		document.getElementById('Subject').innerHTML = input_subject;
		document.getElementById('Message').innerHTML = input_message;
	
	}
