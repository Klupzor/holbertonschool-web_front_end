function setCookies() {
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    var newP = document.createElement("p");
    var pContent = document.createTextNode(document.cookie);
    newP.appendChild(pContent);

    document.body.appendChild(newP);
}
