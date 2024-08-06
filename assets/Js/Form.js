function sendEmail() {
    emailjs.init({
        publicKey:"dxkaTtd0GknUmjcgS",
    });
    var parameters = {
        name: document.getElementById("full-name").value,
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    
    const templateID = "template_3s1kcyf";
    const serviceID = "service_6uyeg9x";

    emailjs.send(templateID, serviceID, parameters).then((res) => {
        document.getElementById("full-name").value = "";
        document.getElementById("company").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
    }).catch((err) => console.log(err))
}