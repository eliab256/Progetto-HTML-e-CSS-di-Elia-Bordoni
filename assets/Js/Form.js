


function sendEmail() {

    event.preventDefault();

    const form = document.querySelector('.contact-form');
    if (!form.checkValidity()) {
        alert("Please fill out all required fields correctly.");
        return;
    }

    var params = {
        fullName: document.getElementById("fullName").value,
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
   
    const templateID = "template_5vkuo8n";
    const serviceID = "service_g8ukqjl";

    emailjs.send(serviceID, templateID,  params)
    .then((res) => {
        document.getElementById("fullName").value = "";
        document.getElementById("company").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent succesfully");
    })
    .catch((err) => console.log(err));
}

(function(){
    emailjs.init( "dxkaTtd0GknUmjcgS");
 })();




