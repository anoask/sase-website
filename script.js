//converts topnav into mobile mode
function mobile_menu() {
	var x = document.getElementById("topnav");
	if (x.className === "nav") {
		x.className += " mobile";
	} else {
		x.className = "nav";
	}
}

// send function sends email from email contact form
function send() {
	// if statement doesn't send email if any text boxes are invalid
	if (
		document.getElementById("name").checkValidity() &&
		document.getElementById("email").checkValidity() &&
		document.getElementById("message").checkValidity()
	) {
		var params = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			message: document.getElementById("message").value
		}

		// NOTE: fake sender emails will still send message followed by auto message error reply
		emailjs.send("service_ml39rlg", "template_qmvvvfp", params);
		alert("Email sent!");
	}
	else
		alert("Please fill in all text boxes properly.");
}