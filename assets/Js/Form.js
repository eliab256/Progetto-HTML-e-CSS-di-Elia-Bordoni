


function sendEmail() {

    var params = {
        name: document.getElementById("full-name").value,
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
   
    const templateID = "template_5vkuo8n";
    const serviceID = "service_g8ukqjl";

    emailjs.send(serviceID, templateID,  params)
    .then((res) => {
        document.getElementById("full-name").value = "";
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




