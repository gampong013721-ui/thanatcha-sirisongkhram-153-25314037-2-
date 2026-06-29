// JavaScript functions added for the website project

function showWelcome() {
    var message = document.getElementById("welcomeMessage");
    if (message) {
        message.innerHTML = "Welcome to Thanatcha's Tokyo Life!";
    }
}

function convertTemperature() {
    var celsius = document.getElementById("celsius").value;
    var result = document.getElementById("temperatureResult");

    if (celsius === "") {
        result.innerHTML = "Please enter a Celsius temperature.";
        return;
    }

    var fahrenheit = (9 / 5) * celsius + 32;
    result.innerHTML = celsius + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit";
}
