function validateform(){  
	var name=document.myform.name.value;  

	if (name==null || name==""){  
		alert("Please fill out name");  
		return false;  
		}  
	}  




let nameElement = document.getElementById('name')
let emailElement = document.getElementById('email')
let messageElement = document.getElementById('message')

document.getElementById('my-form').addEventListener('submit', (e) => {
    e.preventDefault()
    if (nameElement.value == '' || nameElement.value == null) {
        document.getElementById('name-err').style.display = 'block';
    }

    if (emailElement.value == '' || emailElement.value == null) {
        document.getElementById('email-err').style.display = 'block';
    }

    if (messageElement.value == '' || messageElement.value == null) {
        document.getElementById('message-err').style.display = 'block';
    }
})