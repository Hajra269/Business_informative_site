var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var nameformat =  /^[A-Z]/;

function loginValidatation(event)
{	event.preventDefault();

	var inputEmail = document.getElementById('inputEmail').value
	var password = document.getElementById('Password').value
	
	if(inputEmail == "" | password == "")
	{
		alert("Please enter your email and password!");
		return false;
	}
	else
	{
		if(inputEmail.match(emailformat))
		{
			if(password.length >= 8 )
			{
				if(password.match(/[a-z]/g))
				{
					if(password.match(/[A-Z]/g))
					{
						if(password.match(/[0-9]/g))
						{
							if(password.match(/[!@#$%^&*]/g))
							{
								window.location.href="./home.html";
								return true;
							}
							else
							{
								alert("Password should contain atleast one symbol!");
								return false;
							}
						}
						else
						{
							alert("Password should contain atleast one digit!");
							return false;
						}
					}
					else
					{
						alert("Password should contain atleast one uppercase letter!");
						return false;
					}
				}
				else
				{
					alert("Password should contain atleast one lowercase letter!");
					return false;
				}
			}
			else
			{
				alert("Password should contain 8 characters!");
				return false;
			}
		}
		else
		{
			document.form1.email.focus();
			alert("Please enter correct email or password!");
			return false;
		}
	}
}
function Validatation(inputEmail,inputname)  // for form validation in contact page
{
	if(inputname.value.match(nameformat))
	{
		if(inputEmail.value.match(emailformat))
		{
			document.form1.email.focus();
			alert("Your message has been sent!\n Thank You!");
			return true;
		}
		else
		{
			alert("Incorrect Email \nPlease enter correct Email Address!");
			document.form1.email.focus();
			return false;
		}
	}
	else
	{
		alert("Your name should be start with Capital letter!");
		return false;
	}
}
function openIconSidebar()       // Drawer 
{
	document.getElementById("nav1").style.width = "8%";
	document.getElementById("nav1").style.height = "80%";
	document.getElementById("nav1").style.padding = "20px";
	document.getElementById("nav2").style.padding = "0px";
	document.getElementById("nav2").style.width = "0%";
	document.getElementById("nav2").style.height = "0%";
	document.getElementById("main").style.width = "85%";
	document.getElementById("main").style.margin = "0px 160px 0px";
	document.getElementById("map").style.width = "545px";
}
function closeIconSidebar() 
{
	document.getElementById("nav2").style.width = "15%";
	document.getElementById("nav2").style.height = "79.4%";
	document.getElementById("nav1").style.width = "0%";
	document.getElementById("nav1").style.height = "0%";
	document.getElementById("main").style.width = "78.2%";
	document.getElementById("nav2").style.padding = "20px";
	document.getElementById("nav1").style.padding = "0px";
	document.getElementById("main").style.margin = "0px 250px 0px";
	document.getElementById("map").style.width = "500px";
	document.getElementById("map").style.height = "500px";
}
