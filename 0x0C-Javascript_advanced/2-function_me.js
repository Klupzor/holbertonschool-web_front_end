function welcomeMessage() {
    alert("Welcome " + this.fullName);
}

var guillaume = welcomeMessage.bind({fullName: "Guillaume"});
var alex = welcomeMessage.bind({fullName: "Alex"});
var fred = welcomeMessage.bind({fullName: "Fred"});
