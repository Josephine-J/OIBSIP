function convertTemp() {
    let degree = parseFloat(document.getElementById("degree").value);
    let type = document.getElementById("typeSelect").value;
    let resultField = document.getElementById("result");

    // Reset to black before conversion
    resultField.style.color = "black";

    if (isNaN(degree)) {
        resultField.value = "Enter a valid number";
        return;
    }

    if (type === "select") {
        resultField.value = "Select type";
        return;
    }

    let result;

    if (type === "fahrenheit") {
        result = ((degree - 32) * 5/9).toFixed(4) + " °C";
    } 
    else if (type === "celsius") {
        result = ((degree * 9/5) + 32).toFixed(4) + " °F";
    }
    else if (type === "kelvin") {
        result = (degree - 273.15).toFixed(4) + " °C";
    }

    // Fade-out effect before updating
    resultField.classList.add("fade-result");

    setTimeout(() => {
        resultField.value = result;

        // Red color after converting
        resultField.style.color = "red";

        // Fade-in effect
        resultField.classList.remove("fade-result");
    }, 200);
}
