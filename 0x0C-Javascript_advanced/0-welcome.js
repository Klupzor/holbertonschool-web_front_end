function welcome(firstName, lastName)
{
    let fullName;

    fullName = firstName + " " + lastName;
    function displayFullName() {
        alert("Welcome " + fullName + "!")
    }

    displayFullName();
}
